const express = require('express');
const app = express();
const PORT = 5050;
const axios = require('axios');
const cors = require('cors');
const sche = require('node-schedule');
const Pool = require('pg').Pool;
const qs = require('qs');
const tool_base = require('./urlchineseroute.js');
const { request, response } = require('express');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(tool_base);

app.listen(PORT, function (err) {
  if (err) console.log(err);
  else console.log(`Server listening at ${PORT}`);
});

const pool = new Pool ({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "ar_bus_test"
});

// TDX API
let apiResponse;
let accessToken;
const cronJob = sche.scheduleJob('*/1 * * * *', function() {
  getApiResponse();
  // Delete data farer than 1 hour
  pool.query(
    `DELETE FROM estimateTime WHERE datatime <= NOW() - INTERVAL '1 HOUR'`
  );
  console.log("do job");
});

// TDX Bus data
// Get Authorization-Header first
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
    // console.log(accessToken);
    return {
      authorization: `Bearer ${accessToken.access_token}`,
    }
  } catch (err) {
    return err;
  }
}

// Then fetch data from TDX API (after we get the header)
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


// Dynamic estimateTime
// sche.scheduleJob('*/1 * * * *', function() {
//   app.get('/estimateTime', (request, response) => {
//     pool.query(
//       `SELECT estimateTime FROM estimateTime WHERE routename_en = '19'`
//     );
//   });
// });

app.get('*區', (request, response) => {
  console.log(request.url);
  const sql = "SELECT DISTINCT ON (stopname_zh) * FROM stops WHERE stopaddress LIKE $1";
  const startDistrict = ["%"+request.url.substring(1)+"%"];
  pool.query(sql, startDistrict, (err, res) => {
    if (err) { response.end(); return; } 
    else { console.log(res.rows); response.json(res.rows); }
  });
});

// Handle Convenience Store data.
app.get('/seven', (request, response) => {
  pool.query(
    `SELECT * FROM ConvenienceStore WHERE category = 'seven'`, (err, res) => {
      if (err) { response.end(); return; }
      else { response.json(res); }
    }
  );
});

app.get('/fami', (request, response) => {
  pool.query(
    `SELECT * FROM ConvenienceStore WHERE category = '全家'`, (err, res) => {
      if (err) { response.end(); return; }
      else { response.json(res); }
    }
  );
});

app.get('/hilife', (request, response) => {
  pool.query(
    `SELECT * FROM ConvenienceStore WHERE category = '萊爾富'`, (err, res) => {
      if (err) { response.end(); return; }
      else { response.json(res); }
    }
  );
});

app.get('/ok', (request, response) => {
  pool.query(
    `SELECT * FROM ConvenienceStore WHERE category = 'OK'`, (err, res) => {
      if (err) { response.end(); return; }
      else { response.json(res); }
    }
  );
});

app.get('/mxmart', (request, response) => {
  pool.query(
    `SELECT * FROM ConvenienceStore WHERE category = '全聯'`, (err, res) => {
      if (err) { response.end(); return; }
      else { response.json(res); }
    }
  );
});

// Handle Restaurant
app.get('/snacks', (request, response) => {
  pool.query(
    `SELECT * FROM restaurant WHERE consume = 'snack'`, (err, res) => {
      if (err) { response.end(); return; }
      else { response.json(res); console.log(res); }
    }
  );
});

app.get('/dessert', (request, response) => {
  pool.query(
    `SELECT * FROM restaurant WHERE consume = 'desrt'`, (err, res) => {
      if (err) { response.end(); return; }
      else { response.json(res); console.log(res); }
    }
  );
});

app.get('/drinks', (request, response) => {
  pool.query(
    `SELECT * FROM restaurant WHERE consume = 'drink'`, (err, res) => {
      if (err) { response.end(); return; }
      else { response.json(res); console.log(res); }
    }
  );
});

app.get('/cafe', (request, response) => {
  pool.query(
    `SELECT * FROM restaurant WHERE consume = 'cafe'`, (err, res) => {
      if (err) { response.end(); return; }
      else { response.json(res); console.log(res); }
    }
  );
});

app.get('/gift', (request, response) => {
  pool.query(
    `SELECT * FROM restaurant WHERE consume = 'gift'`, (err, res) => {
      if (err) { response.end(); return; }
      else { response.json(res); console.log(res); }
    }
  );
});