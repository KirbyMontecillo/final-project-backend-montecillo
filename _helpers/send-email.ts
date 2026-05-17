import nodemailer from 'nodemailer';

export default async function sendEmail({ to, subject, html, from = process.env.SMTP_USER }: any) {
    const port = Number(process.env.SMTP_PORT) || 587;
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: port,
        secure: port === 465,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    await transporter.sendMail({ from, to, subject, html });
}