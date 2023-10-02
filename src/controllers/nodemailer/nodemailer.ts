import { NextFunction, Request, Response } from "express";
import nodemailer from "nodemailer";
import { PASSWORD, EMAIL } from "../../constants/constants";
import { createEmailTemplate } from "../../utils/utils";

/** send mail from testing account */
const signup = async (request: Request, response: Response, next: NextFunction) => {
    /** testing account */
    let testAccount = await nodemailer.createTestAccount();
      // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
        },
    });

    let message = {
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Successfully Register with us.", // plain text body
        html: "<b>Successfully Register with us.</b>", // html body
    }
    transporter.sendMail(message).then((info) => {
        return response.status(201)
        .json({ 
            msg: "you should receive an email",
            info : info.messageId,
            preview: nodemailer.getTestMessageUrl(info)
        })
    }).catch(error => {
        return response.status(500).json({ error })
    })
}

/** send mail from real gmail account */
const sendEmail = (request: Request, response: Response, next: NextFunction) => {

    console.log("DATA::::::", request.body);

    const { 
        toemail, 
        ccemails, 
        name,
        passcode,
        meetinginvitelink, 
        approvedtimeslot
    } = request.body;

    let config = {
        service : 'gmail',
        auth : {
            user: EMAIL,
            pass: PASSWORD
        }
    }
    let transporter = nodemailer.createTransport(config);

    let emailMessage = {
        from : EMAIL,
        to : toemail,
        cc: ccemails,
        subject: "Inivitation mail.",
        html: createEmailTemplate(request?.body)
    }

    transporter.sendMail(emailMessage).then(() => {
        return response.status(200).json({
            message: "success"
        })
    }).catch((error: any) => {
        return response.status(500).json({ error })
    });
}

export = {
    signup,
    sendEmail
};