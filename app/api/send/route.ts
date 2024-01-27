import { Resend } from "resend";
import EmailTemplate from "@/app/components/email/template";
import { NextResponse } from "next/server";
import IncomingTemplate from "@/app/components/email/incoming";

const resend = new Resend(process.env.RESEND_API);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  try {
    if (!name || !email || !message) {
      return NextResponse.error();
    }

    const data = await resend.emails.send({
      from: "Sean Relampagos <hello@seangjr.tech>",
      to: [email, "delivered@resend.dev"],
      reply_to: "sean@relampagos.org",
      subject: "Thanks for reaching out!",
      text: `Hey ${name}, thanks for reaching out! I'll get back to you as soon as I can.`,
      react: EmailTemplate({ name }),
    });

    // send the message to my email
    await resend.emails.send({
      from: "hello@seangjr.tech",
      to: "sean@relampagos.org",
      subject: `New message from your website! <${email}>`,
      text: `Hey Sean, you have a new message from ${name}! Here's what they said: ${message}`,
      react: IncomingTemplate({ name, email, message }),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
  }
}
