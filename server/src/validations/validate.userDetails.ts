import { z } from 'zod'
import { UserRegistrationDetail } from "../interface/interface.user";

const nameSchema = z
    .string()
    .regex(/^[A-Za-z]/, "Username must start with a letter")
    .regex(/^[A-Za-z\s]+$/, "Username must contain only letters and spaces")
    .min(2, "Username is too short.");

const passwordSchema = z
  .string()
  .min(6, "Password must be at least 6 characters")
  .refine((val) => !/\s/.test(val), {
    message: "Password cannot contain spaces",
  });

const emailSchema = z.string().email("Invalid email format");

export const validateUserRegistrationData = ({
  email,
  name,
  password,
  TIC,
}: UserRegistrationDetail) => {
  let result = {
    status:
      nameSchema.safeParse(name).success &&
      emailSchema.safeParse(email).success &&
      passwordSchema.safeParse(password).success,

    message:
      nameSchema.safeParse(name).error?.issues[0].message ||
      emailSchema.safeParse(email).error?.issues[0].message ||
      passwordSchema.safeParse(password).error?.issues[0].message,
  };

  if (!result.status) {
    return { status: false, msg: result.message };
  }
  return { status: true, msg: "" };
};