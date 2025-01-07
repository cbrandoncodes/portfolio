import { sendContactMessage } from "@/utils/send-contact-email";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, message } = await req.json();

    if (!firstName || !lastName || !email || !message) {
      return new Response(
        JSON.stringify({ message: "Invalid payload", success: false }),
        { status: 400 }
      );
    }

    const result = await sendContactMessage(
      email,
      `${firstName} ${lastName}`,
      message
    );
    const success = !!result?.MessageId;

    if (!success) {
      throw new Error("Failed to send message");
    }

    return new Response(
      JSON.stringify({
        message: "Message sent successfully!",
        success: true,
      }),
      {
        status: 200,
      }
    );
  } catch (err: any) {
    console.log("error: ", err.message);
    return new Response(
      JSON.stringify({
        message: err?.message ?? "An error occurred",
        success: false,
      }),
      {
        status: 500,
      }
    );
  }
}
