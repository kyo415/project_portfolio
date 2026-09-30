import { Router } from "express";
import { getAllMessages, createMessage } from "../controllers/messageController.js";
import { validate } from "../middleware/validate.js";
import { messageSchema } from "../validators/messageValidator.js";

const router = Router();

router.get("/", getAllMessages);
router.post("/", validate(messageSchema), createMessage);

export default router;
