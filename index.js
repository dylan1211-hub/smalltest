const express = require('express');
const app = express();
const PORT = 5050;
const axios = require('axios');
const cors = require('cors');
const sche = require('node-schedule');
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
  database: "ar_bus_test"
});

// TDX Bus data
// Get Author-Header first
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

