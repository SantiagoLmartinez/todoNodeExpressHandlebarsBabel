"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

// const taskSchema = new Schema({
//     title: String,
//     description: String,
//     done: Boolean,
// },{
//     timestamps: true
// })
var taskSchema2 = new _mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    "default": false
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Task', taskSchema2);

exports["default"] = _default;