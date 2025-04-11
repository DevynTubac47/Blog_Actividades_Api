import { Router } from 'express';
import { addPublication, getPublications, getPublicationsCourse } from './publication.controller.js';

const router = Router();

router.post('/addPublication', addPublication);
router.get('/', getPublications);
router.get('/:course', getPublicationsCourse);

export default router;