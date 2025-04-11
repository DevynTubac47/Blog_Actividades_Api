import {Router} from 'express';
import { addComment } from './comment.controller.js';

const router = Router();

router.post('/:publicationId/addComment', addComment);

export default router;