'use strict';

const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const morgan = require('morgan');
// const createError = require('http-errors');
const cors = require('cors');
const debug = require('debug')('cfgram:server');

const authRouter = require('./route/auth-router.js');
const errors = require('./lib/error-middleware.js');

dotenv.load();

const app = express();
const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGODB_URI);

app.use(cors());
app.use(morgan('dev'));

app.use(authRouter);
app.use(errors);

// app.post('/*', () => createError(404, 'not found'));

app.listen(PORT, () => debug(`app listening on: ${PORT}`));
