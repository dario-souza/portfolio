import TemplateEmail from "@/components/email/template-email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from: "<darioo_dario@hotmail.com>",
      to: ["dariosouzaletras@hotmail.com"],
      subject: "Teste 2",
      react: TemplateEmail({ name, email, message }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
