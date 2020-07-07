const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose')
require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api/productRoute');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to db"))

// Route middleware
app.use('/api/product', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
