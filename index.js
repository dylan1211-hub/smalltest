const PORT = 3000;
const axios = require('axios');
const express = require('express');
const app = express();
const cors = require('cors');
const sche = require('node-schedule');
const Pool = require('pg').Pool;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.listen(PORT, function (err) {
  if (err) console.log(err);
  else console.log(`Server listening at ${PORT}`);
});