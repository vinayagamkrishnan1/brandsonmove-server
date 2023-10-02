import express from "express";

import nodeMailerRouter from "./nodemailer/nodemailer";

const router = express.Router();

router.use("/api/nodemailer", nodeMailerRouter);

export default router;