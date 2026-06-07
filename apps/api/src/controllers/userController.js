import { ok, error } from "../utils/response.js";
import { getUsers, registerUser, findUserByUsername } from "../services/userService.js";

export async function getUsers(req, res) {
  return ok(res, await getUsers());
}

export async function getUserByUsername(req, res) {
  const { username } = req.params;
  const user = await findUserByUsername(username);
  if (!user) {
    return error(res, "User not found", 404);
  }
  return ok(res, user);
}

export async function postUser(req, res) {
  // Implementation for creating user
}
