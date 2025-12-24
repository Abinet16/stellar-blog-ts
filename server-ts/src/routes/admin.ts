import { Router } from "express";
import { requireAuth, requireRole } from "../middleware/auth";
import {
  listUsers,
  getUserById,
  updateUserRole,
  banUser,
  unbanUser,
} from "../controllers/adminUserController";
import { getAdminStats } from "../controllers/adminAnalyticsController";

const router = Router();

router.use(requireAuth, requireRole("admin"));

// USERS
router.get("/users", listUsers);
router.get("/users/:id", getUserById);
router.patch("/users/:id/role", updateUserRole);
router.patch("/users/:id/ban", banUser);
router.patch("/users/:id/unban", unbanUser);

// ANALYTICS
router.get("/stats", getAdminStats);

export default router;
