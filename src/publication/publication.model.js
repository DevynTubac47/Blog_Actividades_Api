import { Schema, model } from "mongoose";

const publicationSchema = new Schema({
    title:{
        type: String,
        required: [true, "Post title is required."],
        maxLength: [100, "The title of the publication cannot exceed 100 characters."],
        unique: true
    },
    description:{
        type: String,
        required: true
    },
    course:{
        type: String,
        enum: ['Taller', 'Tecnología', 'Practica Supervisada', 'Investigación', 'Otros'],
        required: true
    },
    dateCreated:{
        type: Date,
        default: Date.now
    },
},{
    timestamps: true,
    versionKey: false
});

export default model('Publication', publicationSchema)