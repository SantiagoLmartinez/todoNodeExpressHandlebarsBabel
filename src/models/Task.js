// const taskSchema = new Schema({
//     title: String,
//     description: String,
//     done: Boolean,
// },{
//     timestamps: true
// })

import { Schema, model} from 'mongoose';


const taskSchema2 = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        
    },
    description:{
        type: String,
        required: true
    },
    done:{
        type: Boolean,
        default: false
    } 
},{
    timestamps: true,
    versionKey: false
})
export default model('Task', taskSchema2)