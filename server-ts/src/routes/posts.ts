import { Router } from 'express';
import { createPost, listPosts, getPost } from '../controllers/postsController';
import { requireAuth } from '../utils/auth';

const router = Router();
router.get('/', listPosts);
router.get('/:id', getPost);
router.post('/', requireAuth, createPost);

export default router;
