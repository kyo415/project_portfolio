import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().trim().min(1, "Ten project khong duoc de trong").max(150),
  description: z.string().trim().min(1, "Mo ta khong duoc de trong").max(2000),
  techStack: z.array(z.string().trim()).optional().default([]),
  imageUrl: z.string().trim().url("imageUrl phai la URL hop le").optional().or(z.literal("")),
  demoUrl: z.string().trim().url("demoUrl phai la URL hop le").optional().or(z.literal("")),
  githubUrl: z.string().trim().url("githubUrl phai la URL hop le").optional().or(z.literal("")),
});

export const projectUpdateSchema = projectSchema.partial();
