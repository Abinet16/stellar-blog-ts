import { UserRole } from "./types";
import { decodeJwt } from "./jwt";

export function hasRole(
  requiredRole: UserRole | UserRole[],
  token: string | null
): boolean {
  const payload = decodeJwt(token);
  if (!payload) return false;

  const userRole = payload.role;

  if (Array.isArray(requiredRole)) {
    return requiredRole.includes(userRole);
  }

  return userRole === requiredRole;
}
