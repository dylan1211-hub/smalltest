const express = require('express');
const app = express();
const PORT = 3000;
const axios = require('axios');
const cors = require('cors');
const schedule = require('node-schedule');
const Pool = require('pg').Pool;
const qs = require('qs');
const { request, response } = require('express');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.listen(PORT, function (err) {
  if (err) console.log(err);
  else console.log(`Server listening at ${PORT}`);
});

const pool = new Pool ({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "bus"
});

let apiResponse;

// TDX API
let accessToken;
const cronJob = schedule.scheduleJob('*/1 * * * *', function() {
  // getApiResponse();
  console.log("do job");
});

async function getAuthorizationHeader() {
  const parameter = {
    grant_type: "client_credentials",
    client_id: "f64074031-039f6d9b-6271-4196",
    client_secret: "266d1796-9aed-458a-b6f0-1bf6f12e43af",
  };

  let auth_url = "https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token";

  try {
    let res = await axios({
      method: "POST",
      url: auth_url,
      data: qs.stringify(parameter),
      headers: { "content-type": "application/x-www-form-urlencoded" },
    });
    accessToken = res.data;
    // test
    console.log("accessToken:");
    console.log(accessToken);
    return {
      authorization: `Bearer ${accessToken.access_token}`,
    }
  } catch (err) {
    return err;
  }
};

async function getApiResponse() {
  let apiUrl = "https://tdx.transportdata.tw/api/basic/v3/Bus/EstimatedTimeOfArrival/City/Tainan";
  try {
    let res = await axios.get(apiUrl, {
      headers: await getAuthorizationHeader(),  // 獲取accessToken
    });
    // console.log(res.data.N1Datas);
    // 存預估到站時間進資料庫
    apiResponse = res.data.N1Datas;
    console.log("apiResponse:");
    // console.log(apiResponse);
    for (let i = 0; i < apiResponse.length; i++) {
			pool.query(
        `INSERT INTO estimateTime (RouteUID, RouteID, RouteName_zh, RouteName_en, Direction, DestinationStopID, StopUID, StopID, StopName_zh, StopName_en, EstimateTime, IsLastBus, CurrentStop, StopStatus, StopCountDown, DataTime, RecTime, TransTime)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)`,
        [
          apiResponse[i].RouteUID, apiResponse[i].RouteID, apiResponse[i].RouteName.Zh_tw,
          apiResponse[i].RouteName.En, apiResponse[i].Direction, apiResponse[i].DestinationStopID,
          apiResponse[i].StopUID, apiResponse[i].StopID, apiResponse[i].StopName.Zh_tw,
          apiResponse[i].StopName.En, apiResponse[i].EstimateTime, apiResponse[i].IsLastBus,
          apiResponse[i].CurrentStop, apiResponse[i].StopStatus, apiResponse[i].StopCountDown,
          apiResponse[i].DataTime, apiResponse[i].RecTime, apiResponse[i].TransTime
        ]
      );
		}
    // return await res.data;
  } catch (err) {
    console.log(err);
  }
}

app.get('/test', (request, response) => {
  console.log("test for send data to front-end");
  pool.query(
    `SELECT * FROM all_route WHERE RouteName_en = '19'`, (err, res) => {
      if (err) {
        response.end();
        console.log(err);
        return;
      } else {
        response.json(res);
        console.log("res");
        console.log(res);
      }
    }
  );
});

app.get('/', (request, response) => {
  console.log("re-render option");
  const rows = pool.query(
    `SELECT DISTINCT stopName_zh FROM stops WHERE StopAddress LIKE '%$1%'`,
    []
  )
})

// console.log(jsonFile.Stops[9578]);

for (let i = 0; i < 143; i++) {
  // console.log(jsonFile.Routes[i]);
  pool.query(
    `INSERT INTO all_route (RouteUID, RouteID, RouteName_zh, RouteName_en, HasSubRoutes, 
      TicketPriceDescription_zh, TicketPriceDescription_en, DepartureStopName_zh, DepartureStopName_en, 
      StartStop_zh, StartStop_en, EndStop_zh, EndStop_en, RouteURL, LiveBusURL, RouteImageURL, FareURL)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)`,
    [jsonFile.Routes[i].RouteUID, jsonFile.Routes[i].RouteID, jsonFile.Routes[i].RouteName.Zh_tw, 
    jsonFile.Routes[i].RouteName.En, jsonFile.Routes[i].HasSubRoutes,
    jsonFile.Routes[i].TicketPriceDescription.Zh_tw, jsonFile.Routes[i].TicketPriceDescription.En, 
    jsonFile.Routes[i].DepartureStopName.Zh_tw, jsonFile.Routes[i].DepartureStopName.En, 
    jsonFile.Routes[i].StartStop.StopName.Zh_tw, jsonFile.Routes[i].StartStop.StopName.En, 
    jsonFile.Routes[i].EndStop.StopName.Zh_tw, jsonFile.Routes[i].EndStop.StopName.En, 
    jsonFile.Routes[i].RouteURL, jsonFile.Routes[i].LiveBusURL, jsonFile.Routes[i].RouteMapImageURL, 
    jsonFile.Routes[i].FareURL]
  );
}

for (let i = 0; i < 2280; i++) {
  pool.query(
    `INSERT INTO stops (StopUID, StopID, StopName_zh, StopName_en, StopPosition_lon, StopPosition_lat, 
      RoadName, CityCode, StopAddress, StationUID, StationID)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
    [jsonFile.Stops[i].StationUID, jsonFile.Stops[i].StopID, jsonFile.Stops[i].StopName.Zh_tw,
    jsonFile.Stops[i].StopName.En, jsonFile.Stops[i].StopPosition.PositionLon, 
    jsonFile.Stops[i].StopPosition.PositionLat,jsonFile.Stops[i].RoadName, 
    jsonFile.Stops[i].CityCode, jsonFile.Stops[i].StopAddress, jsonFile.Stops[i].StationUID,
    jsonFile.Stops[i].StationID]
  );
}