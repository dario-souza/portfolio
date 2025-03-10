import TemplateEmail from "@/components/email/template-email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: `${name} <dariodev@dariosouza.tech>`,
      to: ["dariosouzaletras@hotmail.com"],
      subject: `${name} quer falar com você`,
      react: TemplateEmail({ name, email, message }),
    });
    if (error) {
      return Response.json({ error }, { status: 500 });
    }
    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
