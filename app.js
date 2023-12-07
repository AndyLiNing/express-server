const express = require('express');
const cors = require('cors');

const requestRoutes = require('./route');

const app = express();
app.use(cors());

app.use(requestRoutes);


module.exports = app;
