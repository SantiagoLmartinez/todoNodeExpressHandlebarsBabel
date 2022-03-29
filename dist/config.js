"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PORT = exports.MONGODB_URI = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)(); // console.log(process.env.URI_MONGO)

var MONGODB_URI = process.env.URI_MONGO || "mongodb://localhost/test";
exports.MONGODB_URI = MONGODB_URI;
var PORT = process.env.PORT || 3000;
exports.PORT = PORT;