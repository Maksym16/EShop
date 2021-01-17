import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Maksym Fedorenko',
    email: 'max@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Yana Kotliar',
    email: 'yana@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users