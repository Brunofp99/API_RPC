require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();

const Routes = require('../routes');
Routes(app);

module.exports = app;