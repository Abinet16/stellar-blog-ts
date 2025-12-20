import { apiGet, apiPost } from "./api";
import { AdminStats, UserSummary, UserRole } from "./types";

export interface UserListResponse {
  users: UserSummary[];
  total: number;
  page: number;
  pages: number;
}

export async function fetchAdminStats(): Promise<AdminStats> {
  return apiGet<AdminStats>("/admin/stats");
}

export async function fetchUsers(params?: {
  page?: number;
  limit?: number;
  search?: string;
}): Promise<UserListResponse> {
  const query = new URLSearchParams();
  if (params?.page) query.set("page", String(params.page));
  if (params?.limit) query.set("limit", String(params.limit));
  if (params?.search) query.set("search", params.search);

  const qs = query.toString();
  const path = qs ? `/admin/users?${qs}` : "/admin/users";

  return apiGet<UserListResponse>(path);
}

export async function updateUserRole(id: string, role: UserRole) {
  return apiPost(`/admin/users/${id}/role`, { role });
}

export async function banUser(id: string) {
  return apiPost(`/admin/users/${id}/ban`, {});
}

export async function unbanUser(id: string) {
  return apiPost(`/admin/users/${id}/unban`, {});
}
