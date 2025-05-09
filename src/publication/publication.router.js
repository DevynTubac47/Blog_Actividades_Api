import { Router } from 'express';
import { addPublication, getPublications, getPublicationsCourse, getPublicationsIndex, getPublicationById, updatePublication, deletePublication } from './publication.controller.js';

const router = Router();

/**
 * @swagger
 * paths:
 *   /addPublication:
 *     post:
 *       summary: Agregar una nueva publicación
 *       description: Permite crear una nueva publicación en el sistema.
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Publication'
 *       responses:
 *         '201':
 *           description: Publicación creada exitosamente.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Publication'
 *         '400':
 *           description: Datos inválidos en la solicitud.
 * 
 *   /publications:
 *     get:
 *       summary: Obtener todas las publicaciones
 *       description: Recupera la lista completa de publicaciones registradas en el sistema.
 *       responses:
 *         '200':
 *           description: Lista de publicaciones obtenida con éxito.
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Publication'
 * 
 *   /{course}:
 *     get:
 *       summary: Obtener publicaciones por curso
 *       description: Recupera todas las publicaciones asociadas a un curso específico.
 *       parameters:
 *         - name: course
 *           in: path
 *           required: true
 *           description: Nombre del curso (Taller, Tecnología, Practica Supervisada).
 *           schema:
 *             type: string
 *             example: "Taller"
 *       responses:
 *         '200':
 *           description: Lista de publicaciones por curso obtenida con éxito.
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Publication'
 *         '404':
 *           description: Curso no encontrado.
 * 
 *   /:
 *     get:
 *       summary: Obtener índice de publicaciones
 *       description: Recupera un resumen de todas las publicaciones disponibles.
 *       responses:
 *         '200':
 *           description: Índice de publicaciones obtenido con éxito.
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Publication'
 * 
 *   /publication/{publicationId}:
 *     get:
 *       summary: Obtener una publicación por ID
 *       description: Recupera una publicación específica por su ID.
 *       parameters:
 *         - name: publicationId
 *           in: path
 *           required: true
 *           description: ID de la publicación.
 *           schema:
 *             type: string
 *             example: "609e12f1341a1a3b1c123456"
 *       responses:
 *         '200':
 *           description: Publicación obtenida con éxito.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Publication'
 *         '404':
 *           description: Publicación no encontrada.
 * 
 *   /updatePublication/{publicationId}:
 *     put:
 *       summary: Actualizar una publicación
 *       description: Permite actualizar los datos de una publicación existente.
 *       parameters:
 *         - name: publicationId
 *           in: path
 *           required: true
 *           description: ID de la publicación a actualizar.
 *           schema:
 *             type: string
 *             example: "609e12f1341a1a3b1c123456"
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Publication'
 *       responses:
 *         '200':
 *           description: Publicación actualizada con éxito.
 *         '404':
 *           description: Publicación no encontrada.
 * 
 *   /deletePublication/{publicationId}:
 *     delete:
 *       summary: Eliminar una publicación
 *       description: Permite eliminar una publicación por su ID.
 *       parameters:
 *         - name: publicationId
 *           in: path
 *           required: true
 *           description: ID de la publicación a eliminar.
 *           schema:
 *             type: string
 *             example: "609e12f1341a1a3b1c123456"
 *       responses:
 *         '200':
 *           description: Publicación eliminada con éxito.
 *         '404':
 *           description: Publicación no encontrada.
 */

router.post('/addPublication', addPublication);
router.get('/publications', getPublications);
router.get('/:course', getPublicationsCourse);
router.get('/', getPublicationsIndex);
router.get('/publication/:publicationId', getPublicationById);
router.put('/updatePublication/:publicationId', updatePublication);
router.delete('/deletePublication/:publicationId', deletePublication);

export default router;
