import {Router} from 'express';
import { addComment, getCommentsByPublication } from './comment.controller.js';

const router = Router();

/**
 * @swagger
 * /{publicationId}/addComment:
 *   post:
 *     summary: Agregar un comentario
 *     description: Permite crear un nuevo comentario asociado a una publicación específica.
 *     parameters:
 *       - name: publicationId
 *         in: path
 *         required: true
 *         description: ID de la publicación.
 *         schema:
 *           type: string
 *           example: "609e12f1341a1a3b1c123456"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: string
 *                 description: Nombre del usuario.
 *                 example: "Juan Pérez"
 *               textComment:
 *                 type: string
 *                 description: Contenido del comentario.
 *                 example: "Este es un comentario de prueba."
 *     responses:
 *       '201':
 *         description: Comentario creado con éxito.
 *       '400':
 *         description: Datos inválidos en la solicitud.
 *       '404':
 *         description: Publicación no encontrada.
 */
router.post('/:publicationId/addComment', addComment);

/**
 * @swagger
 * /{publicationId}/comments:
 *   get:
 *     summary: Obtener comentarios de una publicación
 *     description: Recupera todos los comentarios asociados a una publicación específica.
 *     parameters:
 *       - name: publicationId
 *         in: path
 *         required: true
 *         description: ID de la publicación.
 *         schema:
 *           type: string
 *           example: "609e12f1341a1a3b1c123456"
 *     responses:
 *       '200':
 *         description: Lista de comentarios obtenida con éxito.
 *       '404':
 *         description: Publicación no encontrada.
 */
router.get('/:publicationId/comments', getCommentsByPublication);

export default router;