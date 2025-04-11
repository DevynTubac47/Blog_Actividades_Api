import {Router} from 'express';
import { addComment, getCommentsByPublication } from './comment.controller.js';

const router = Router();

router.post('/:publicationId/addComment', addComment);
router.get('/:publicationId/comments', getCommentsByPublication);

export default router;