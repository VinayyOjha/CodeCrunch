import nodemailer from 'nodemailer';

export async function sendEmail(
    to: string,
    subject: string,
    text: string,
    html?: string
): Promise<void> {
    // Configuring the transporter (use SMTP credentials)
    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_FROM,
            pass: process.env.SMTP_PASS
        }
    });

    await transporter.sendMail({
        from: process.env.SMTP_FROM || '"No Reply" <no-reply@gmail.com',
        to, 
        subject,
        text,
        html,
    });
}