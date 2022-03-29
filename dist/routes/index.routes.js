"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _task = require("../controllers/task.controllers");

// import  Task from '../models/Task'
var router = (0, _express.Router)(); // OBTENER

router.get('/', _task.renderTasks); // CREAR

router.post('/tasks/add', _task.createTask); // ELIMINAR

router.get('/tasks/:id/delete', _task.deletetask); // router.get('/about', (req,res) =>{
//     res.render('about')
// })
// EDITAR

router.get('/tasks/:id/edit', _task.updateGetTask);
router.post('/tasks/:id/edit', _task.updatePostTask); // toggle done

router.get('/tasks/:id/toggleDone', _task.toggleDoneTask);
var _default = router;
exports["default"] = _default;