import { Schema, model } from "mongoose";

const commentSchema = Schema({
    userName:{
        type: String,
        required: true,
        maxLength: [50, "The name of the user cannot exceed 50 characters."]
    },
    textComment:{
        type: String,
        required: true
    },
    dateComment:{
        type: Date,
        default: Date.now
    },
    publication:{
        type: Schema.Types.ObjectId,
        ref: 'Publication',
        required: true
    },
},{
    timestamps: true,
    versionKey: false
});

export default model('Comment', commentSchema)
