
const express = require('express');

const routes = require('./routes');

app = express();

Object.keys(routes).forEach(key => {
    console.log(`key is ${key}`);
    app.use(`/${key}`, routes[key]);
})

module.exports = app;
