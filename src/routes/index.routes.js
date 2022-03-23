import { Router } from 'express';
import { createTask, deletetask, renderTasks, toggleDoneTask, updateGetTask, updatePostTask } from '../controllers/task.controllers';
// import  Task from '../models/Task'

const router = Router();
// OBTENER
router.get('/', renderTasks )

// CREAR
router.post('/tasks/add', createTask)

// ELIMINAR
router.get('/delete/:id', deletetask)

// router.get('/about', (req,res) =>{
//     res.render('about')
// })

// EDITAR
router.get('/edit/:id', updateGetTask)
router.post('/edit/:id', updatePostTask)

// toggle done
router.get('/toggleDone/:id', toggleDoneTask)

export default router;