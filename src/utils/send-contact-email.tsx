import ContactMessage from "@/templates/contact-message";
import { render } from "@react-email/render";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

export async function sendContactMessage(
  email: string,
  name: string,
  message: string
) {
  const sesClient = new SESClient({
    region: process.env.AWS_REGION!,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
  });

  const emailHtml = render(
    <ContactMessage message={message} name={name} email={email} />
  );
  const sendEmailCommand = new SendEmailCommand({
    Source: process.env.AWS_SES_SENDER!,
    Destination: {
      ToAddresses: [process.env.TO_EMAIL!],
    },
    ReplyToAddresses: [],
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: emailHtml,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "New Portfolio Contact Message",
      },
    },
  });

  return await sesClient.send(sendEmailCommand);
}
