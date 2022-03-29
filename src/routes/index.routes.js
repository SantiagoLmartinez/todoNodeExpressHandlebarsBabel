import { Router } from 'express';
import { createTask, deletetask, renderTasks, toggleDoneTask, updateGetTask, updatePostTask } from '../controllers/task.controllers';
// import  Task from '../models/Task'

const router = Router();
// OBTENER
router.get('/', renderTasks )

// CREAR
router.post('/tasks/add', createTask)

// ELIMINAR
router.get('/tasks/:id/delete', deletetask)

// router.get('/about', (req,res) =>{
//     res.render('about')
// })

// EDITAR
router.get('/tasks/:id/edit', updateGetTask)
router.post('/tasks/:id/edit', updatePostTask)

// toggle done
router.get('/tasks/:id/toggleDone', toggleDoneTask)

export default router;