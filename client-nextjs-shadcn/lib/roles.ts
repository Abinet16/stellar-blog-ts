export function hasRole(required: string, token: string | null): boolean {
  if (!token) return false;
  const payload = JSON.parse(atob(token.split(".")[1]));
  return payload.role === required;
}
