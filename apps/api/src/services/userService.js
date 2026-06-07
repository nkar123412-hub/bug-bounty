const users = [
  { id: 'usr_1', username: 'alice', role: 'freelancer', bio: 'Expert in React' },
  { id: 'usr_2', username: 'bob', role: 'freelancer', bio: 'Backend wizard' },
  { id: 'usr_3', username: 'charlie', role: 'client', bio: 'Looking for experts' },
];

export async function getUsers() {
  return users;
}

export async function registerUser(payload) {
  const user = { id: `usr_${Date.now()}`, ...payload };
  users.push(user);
  return user;
}

export async function findUserByUsername(username) {
  return users.find(u => u.username === username);
}
