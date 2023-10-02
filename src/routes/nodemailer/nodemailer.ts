import express, { NextFunction, Request, Response } from "express";
import { nodeMailerController } from "../../controllers/index";
const router = express.Router();

router.post('/sendemail', (req: Request, res: Response, next: NextFunction) => {
    nodeMailerController.sendEmail(req, res, next)
});


export default router;

