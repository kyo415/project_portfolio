import { z } from "zod";

export const messageSchema = z.object({
  name: z.string().trim().min(1, "Ten khong duoc de trong").max(100),
  email: z.string().trim().email("Email khong hop le"),
  content: z.string().trim().min(1, "Noi dung khong duoc de trong").max(3000),
});
