import Joi from "joi";
import { RegisterUser } from "./types";

export function validateRegister(data: RegisterUser) {
  const schema = Joi.object({
    name: Joi.string().trim().min(2).max(255).required(),
    email: Joi.string().trim().min(3).email().required(),
    password: Joi.string().trim().min(8).max(255).required(),
    role: Joi.string().trim().required(),
  });
  return schema.validate(data);
}

export function validateLogin(data: { email: string; password: string }) {
  const schema = Joi.object({
    email: Joi.string().trim().min(3).email().required(),
    password: Joi.string().trim().min(8).max(255).required(),
  });
  return schema.validate(data);
}
