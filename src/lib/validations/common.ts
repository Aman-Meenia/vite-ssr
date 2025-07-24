import { z } from "zod";

export const contactMessageSchema = z
  .string()
  .min(10, "Message must be at least 10 characters long")
  .max(2000, "Message cannot exceed 2000 characters");

export const nameSchema = z
  .string()
  .min(1, "Name is required")
  .max(50, "Name cannot exceed 50 characters")
  .transform((val) => val.trim())
  .refine((val) => /^[a-zA-Z\s]+$/.test(val), {
    message: "Nickname must contain only letters and spaces",
  });

export const firstNameSchema = z
  .string()
  .min(2, { message: "First name must be at least 2 characters long" })
  .max(30, { message: "First name cannot exceed 30 characters" })
  .transform((val) => val.trim())
  .refine((val) => /^[a-zA-Z]+$/.test(val), {
    message: "First name must contain only letters (A-Z, a-z)",
  });

export const lastNameSchema = z
  .string()
  .min(2, { message: "Last name must be at least 2 characters long" })
  .max(30, { message: "Last name cannot exceed 30 characters" })
  .transform((val) => val.trim())
  .refine((val) => /^[a-zA-Z]+$/.test(val), {
    message: "Last name must contain only letters (A-Z, a-z)",
  });

export const nickNameSchema = z
  .string()
  .min(1, "Nickname is required")
  .max(30, "Nickname cannot exceed 30 characters")
  .transform((val) => val.trim())
  .refine((val) => /^[a-zA-Z\s]+$/.test(val), {
    message: "Nickname must contain only letters and spaces",
  });

export const phoneNumberSchema = z
  .string()
  .min(10, { message: "Phone number must be exactly 10 digits" })
  .max(10, { message: "Phone number must be exactly 10 digits" })
  .transform((val) => val.trim())
  .refine(
    (val) => {
      if (val) return val;
    },
    {
      message: "Phone No is required",
    },
  );

export const emailSchema = z
  .string()
  .min(1, { message: "Email is required" })
  .email({ message: "Invalid email" });

export const confirmPasswordSchema = z
  .string()
  .min(1, { message: "Confirm password is required" })
  .min(8, { message: "Must be 8 characters or more" });

export const genderSchema = z
  .string()
  .min(1, { message: "Gender is required" });

export const dobSchema = z.date({ message: "Date of birth is required" });

export const zipCodeSchema = z
  .string({ message: "ZipCode is required" })
  .min(1, { message: "ZipCode is required" })
  .max(10, { message: "Zipcode cannot exceed 10 characters" });

export const otpSchema = z.string().min(6, "OTP must be exactly 6 digits");

export const bioSchema = z
  .string()
  .min(1, "Bio is required")
  .max(300, "Bio cannot exceed 300 characters")
  .transform((val) => val.trim())
  .refine(
    (val) => {
      if (val) {
        return val;
      }
    },
    {
      message: "Bio is required",
    },
  );

export const citySchema = z
  .string({ message: "City is required" })
  .min(1, { message: "City is required" })
  .max(50, { message: "City cannot exceed 50 characters" });

export const stateSchema = z
  .string({ message: "State is required" })
  .min(1, { message: "State is required" })
  .max(50, { message: "State cannot exceed 50 characters" });
