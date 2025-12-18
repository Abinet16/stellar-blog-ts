import { Router } from "express";
import { requireAuth } from "../middleware/auth";
import { listComments, addComment } from "../controllers/commentController";

const router = Router();

router.get("/:id", listComments);
router.post("/:id", requireAuth, addComment);

export default router;
