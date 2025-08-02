// app/api/send-email/route.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const { name, email, subject, message } = await req.json();

    try {
        const data = await resend.emails.send({
            from: 'Your Name <noreply@yourdomain.com>',
            to: 'shivajee141004@gmail.com',
            subject: `[New Project Inquiry] ${subject}`,
            html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        return Response.json({ success: true, data });
    } catch (error) {
        return Response.json({ success: false, error });
    }
}
