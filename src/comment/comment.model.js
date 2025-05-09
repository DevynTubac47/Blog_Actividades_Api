import { Schema, model } from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     Comment:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: ID único generado por MongoDB.
 *           example: "645bc3e234f1a2b678c12345"
 *         userName:
 *           type: string
 *           description: Nombre del usuario que realiza el comentario.
 *           maxLength: 50
 *           example: "Juan Pérez"
 *         textComment:
 *           type: string
 *           description: Contenido del comentario.
 *           example: "Este es un comentario interesante."
 *         dateComment:
 *           type: string
 *           format: date-time
 *           description: Fecha y hora en que se creó el comentario.
 *           example: "2025-05-08T12:34:56Z"
 *         publication:
 *           type: string
 *           description: ID de la publicación a la que pertenece el comentario.
 *           example: "609e12f1341a1a3b1c123456"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Fecha de creación del comentario.
 *           example: "2025-05-08T12:34:56Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Fecha de última actualización del comentario.
 *           example: "2025-05-08T12:34:56Z"
 *       required:
 *         - userName
 *         - textComment
 *         - publication
 */

const commentSchema = Schema({
    userName: {
        type: String,
        required: true,
        maxLength: [50, "The name of the user cannot exceed 50 characters."]
    },
    textComment: {
        type: String,
        required: true
    },
    dateComment: {
        type: Date,
        default: Date.now
    },
    publication: {
        type: Schema.Types.ObjectId,
        ref: 'Publication',
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Comment', commentSchema);
