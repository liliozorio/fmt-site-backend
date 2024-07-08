
import nodemailer from 'nodemailer'
import path from "path"

import { IEmailProvider } from '@/shared/container/providers/EmailProvider/IEmailProvider';

class EmailProvider implements IEmailProvider {

    private logoImagePath = path.join(__dirname, '..', 'assets', 'MattzeroLogo.jpg');
    private backgroundImageEmailPath = path.join(__dirname, '..', 'assets', 'BackgroundImageEmail.jpg');


    private transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        service: process.env.EMAIL_SERVICE,
        port: parseInt(process.env.EMAIL_PORT), 
        secure: process.env.EMAIL_SECURE === 'true', 
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },

    });


    async sendEmail(
        from: string,
        to: string | string[],
        subject: string,
        hmtl: string,
    ) {
        try {
            this.transporter.sendMail({
                from,
                to,
                subject,
                html: hmtl,
                attachments: [
                    {
                        filename: "LogoFourMatt.jpg",
                        path: this.logoImagePath,
                        cid: 'logoEmbed'
                    },
                    {
                        filename: "BackgroundImageEmail.jpg",
                        path: this.backgroundImageEmailPath,
                        cid: 'backgroundImage'
                    }
                ]
            }
        )
        } catch (e) {
            throw e
        }
    }
}

export { EmailProvider }
