import { Schema, model } from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     Publication:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: ID único generado por MongoDB.
 *           example: "645bc3e234f1a2b678c12345"
 *         title:
 *           type: string
 *           description: Título de la publicación.
 *           maxLength: 100
 *           example: "Introducción a Node.js"
 *         description:
 *           type: string
 *           description: Descripción del contenido de la publicación.
 *           example: "Esta publicación trata sobre los conceptos básicos de Node.js y su funcionamiento."
 *         course:
 *           type: string
 *           description: Categoría del curso al que pertenece la publicación.
 *           enum:
 *             - Taller
 *             - Tecnología
 *             - Practica Supervisada
 *           example: "Taller"
 *         dateCreated:
 *           type: string
 *           format: date-time
 *           description: Fecha de creación de la publicación.
 *           example: "2025-05-08T12:34:56Z"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Fecha de creación automática.
 *           example: "2025-05-08T12:34:56Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Fecha de actualización automática.
 *           example: "2025-05-08T12:34:56Z"
 *       required:
 *         - title
 *         - description
 *         - course
 */

const publicationSchema = new Schema({
    title: {
        type: String,
        required: [true, "Post title is required."],
        maxLength: [100, "The title of the publication cannot exceed 100 characters."],
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    course: {
        type: String,
        enum: ['Taller', 'Tecnología', 'Practica Supervisada'],
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Publication', publicationSchema);
