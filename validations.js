import { body } from "express-validator";

export const loginValidaton = [
  body('email', 'Wrong email format').isEmail(),
  body('password', 'Password should be at least 5 digits').isLength({ min: 5 }),
];

export const regValidaton = [
  body('email', 'Wrong email format').isEmail(),
  body('password', 'Password should be at least 5 digits').isLength({ min: 5 }),
  body('fullName', 'Name is required').isLength({ min: 3 }),
  body('avatar', 'Wrong link').optional().isURL(),
];

export const postCreateValidation = [
  body('title', 'Type post title').isLength({ min: 5 }).isString(),
  body('text', 'Type post text').isLength({ min: 10 }).isString(),
  body('tags', 'Wrong tags format').optional().isArray(),
  body('imageUrl', 'Wrong link to image').optional().isString(),
];