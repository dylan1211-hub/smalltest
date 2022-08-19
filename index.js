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