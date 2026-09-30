import { Message } from "../models/Message.js";

export async function getAllMessages(req, res, next) {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json({ success: true, data: messages });
  } catch (err) {
    next(err);
  }
}

export async function createMessage(req, res, next) {
  try {
    const message = await Message.create(req.body);
    res.status(201).json({
      success: true,
      message: "Gui tin nhan thanh cong",
      data: message,
    });
  } catch (err) {
    next(err);
  }
}
