import { Resend } from "resend";
import EmailTemplate from "@/emails/index";
import { FormState } from "@/context/useFormContext";

const resend = new Resend(process.env.RESEND_API_KEY);

type Props = {
  notify: string;
  formState: FormState;
};

export const sendMail = async ({ formState, notify }: Props) => {
  try {
    await resend.emails.send({
      from: "encuesta-taha@inteminer.com",
      to: notify,
      subject: "Nueva respuesta recibida - Grupo Taha",
      react: EmailTemplate(formState),
    });
  } catch (error) {
    console.log(error);
  }
};
