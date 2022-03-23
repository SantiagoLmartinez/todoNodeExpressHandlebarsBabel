import { Router } from 'express';
import  Task from '../models/Task'

const router = Router();
// OBTENER
router.get('/', async(req,res) =>{
    const tasks = await Task.find().lean()

    res.render('index', {tasks})
})
// CREAR
router.post('/tasks/add', async (req,res) =>{
    try {
        const task = Task(req.body)
        const taskSave = await task.save()
        // console.log(task);
        res.redirect('/')
    } catch (error) {
        console.log(error, "no se puedo agregar a db")
    }
})
// ELIMINAR
router.get('/delete/:id', async (req,res) =>{
    try {
        const { id } = req.params
        await Task.findByIdAndDelete(id)
        res.redirect('/')
    } catch (error) {
        console.log(error, "No se pudo eliminar")
    }
})

router.get('/about', (req,res) =>{
    res.render('about')
})
// EDITAR
router.get('/edit/:id', async (req,res) =>{
    try {
    const task =  await Task.findById(req.params.id).lean()  
    res.render('edit', {task})
    } catch (error) {
        console.log(error.mesagge)
    }
})
router.post('/edit/:id', async (req,res) =>{
    const {id} = req.params
    await Task.findByIdAndUpdate(id, req.body)
    res.redirect('/')
    try {
        
    } catch (error) {
        
    }
})
// toggle done
router.get('/toggleDone/:id', async(req,res) =>{
    const { id } = req.params
    const task = await Task.findById(id)
    task.done = !task.done
    await task.save()
    res.redirect('/')
})

export default router;