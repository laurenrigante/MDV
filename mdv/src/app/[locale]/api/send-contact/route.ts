import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
console.log("RESEND_API_KEY:", process.env.RESEND_API_KEY ? " Key Loaded" : "Key Missing");

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const fullName = formData.get("fullname") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const company = formData.get("company") as string;
    const message = formData.get("msg") as string;

    const inquiries: string[] = [];
    formData.forEach((value, key) => {
      if (key.startsWith("inquiry[")) {
        inquiries.push(value as string);
      }
    });

    console.log("(2) Received form data=========================================================================\n", { fullName, email, phone, company, message, inquiries });


    // Validate required fields
    if (!fullName || !email || !message || !phone || !company) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    //email data 
    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>New Inquiry Received</title>
          <style>
            body {
              margin: 0;
              padding: 0;
              font-family: Arial, sans-serif;
              background-color: #f8f9fa;
              color: #333333;
              line-height: 1.6;
            }
            .email-wrapper {
              width: 100%;
              background-color: #f8f9fa;
              padding: 20px 0;
            }
            .email-content {
              width: 600px;
              background-color: white;
              margin: 0 auto;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            }
            h2 {
              color: #0a122a; /* secondaryBlue */
              font-size: 24px;
              font-weight: bold;
              border-bottom: 2px solid #00aeef; /* primaryBlue */
              padding-bottom: 10px;
            }
            h3 {
              color: #00aeef; /* primaryBlue */
              font-size: 18px;
              margin-top: 16px;
            }
            p {
              font-size: 16px;
              color: #6d6e71; /* primaryGray */
              margin-top: 12px;
            }
            .message {
             background-color: rgba(0, 174, 239, 0.1); /* primaryBlue with 10% opacity */
            color: #6D6E71; /* primaryGray */
              padding: 12px;
              border-radius: 8px;
              margin-top: 16px;
            }
            h4 {
              margin-top: 24px;
              font-size: 18px;
              font-weight: 600;
              color: #333333;
              border-top: 2px solid #e1e1e1;
              padding-top: 16px;
            }
            a {
              color: #00aeef; /* primaryBlue */
              text-decoration: none;
            }
            a:hover {
              text-decoration: underline;
            }
          </style>
        </head>
        <body>
          <div class="email-wrapper">
            <div class="email-content">
              <h2>New Inquiry Received from ${fullName} </h2>
              <h3>You have received an inquiry regarding: ${inquiries.join(", ")}</h3>
              <p class="message">${message}</p>
              <h4>Contact Information:</h4>
              <p><strong>Name:</strong> ${fullName}</p>
              <p><strong>Company:</strong> ${company}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            </div>
          </div>
        </body>
        </html>
      `;


    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'lauren.rigante@hotmail.com', 
      subject: 'New Inquiry Received',
      html: htmlContent
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("(3) Error sending email===============================================================================\n", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}