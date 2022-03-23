import  Task from '../models/Task'

// OBTENER
export const renderTasks = async(req,res) =>{
    const tasks = await Task.find().lean()
    res.render('index', {tasks})
}

//CREAR
export const createTask =  async (req,res) =>{
    try {
        const task = Task(req.body)
        const taskSave = await task.save()
        // console.log(task);
        res.redirect('/')
    } catch (error) {
        console.log(error, "no se puedo agregar a db")
    }
}
//DELETE
export const deletetask =  async (req,res) =>{
    try {
        const { id } = req.params
        await Task.findByIdAndDelete(id)
        res.redirect('/')
    } catch (error) {
        console.log(error, "No se pudo eliminar")
    }
}

//UPDATE GET
export const updateGetTask = async (req,res) =>{
    try {
    const task =  await Task.findById(req.params.id).lean()  
    res.render('edit', {task})
    } catch (error) {
        console.log(error.mesagge)
    }
}
//UPDATE POST
export const updatePostTask = async (req,res) =>{
    const {id} = req.params
    await Task.findByIdAndUpdate(id, req.body)
    res.redirect('/')
    try {
        
    } catch (error) {
        
    }
}

//TOGGLE DONE
export const toggleDoneTask =  async(req,res) =>{
    const { id } = req.params
    const task = await Task.findById(id)
    task.done = !task.done
    await task.save()
    res.redirect('/')
}