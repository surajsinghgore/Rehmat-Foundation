import { NextResponse } from "next/server";

const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NEXT_PUBLIC_GMAIL_ACCOUNT_ID,
    pass: process.env.NEXT_PUBLIC_GMAIL_ACCOUNT_PASSWORD,
  },
});

// POST REQUEST
export async function POST(req) {
  try {
    // checking whether field is empty or not
    const { clientName, email, message } = await req.json();
    if (clientName == "" || clientName == undefined) {
      return NextResponse.json(
        { message: "please enter your name" },
        {
          status: 400,
        }
      );
    }

    if (email == "" || email == undefined) {
      return NextResponse.json(
        { message: "please enter your email" },
        {
          status: 400,
        }
      );
    }

    if (message == "" || message == undefined) {
      return NextResponse.json(
        { message: "please enter your message" },
        {
          status: 400,
        }
      );
    }

    // validate correct email id or not
    function validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
    if (validateEmail(email) == false) {
      return NextResponse.json(
        { message: "Email Id Is inValid" },
        {
          status: 400,
        }
      );
    }

    // send mail

    const mailOption = {
      from: process.env.NEXT_PUBLIC_GMAIL_ACCOUNT_ID,
      to: process.env.NEXT_PUBLIC_GMAIL_FOR_CLIENT_MESSAGE,

      subject: "Client Wanted to Contact",
      html: `
<h1 style="color:red;text-align:center">Contact Me</h1>
<h4 style="color:orange;padding-left:5px;color:#636363">Client Name</h4>
<div style="border:2px solid #636363;padding:1% 3% 1% 3%;font-size:6vw;color:#636363;margin-top:10%;margin-bottom:10%;text-align:center;margin-top:-5%">${clientName}</div>
<h4 style="color:orange;padding-left:5px;color:#636363">Client Email Id</h4>
<div style="border:2px solid #636363;padding: 2% 3% 2% 1%;font-size:6vw;color:#636363;margin-top:10%;margin-bottom:10%;text-align:center;margin-top:-5%">${email}</div>
<h4 style="color:orange;padding-left:5px;color:#636363">Client Message</h4>
<div style="border:2px solid #636363;padding:5% 3% 5% 3%;font-size:6vw;color:#636363;margin-top:10%;margin-bottom:10%;text-align:center;margin-top:-5%">${message}</div>
`,
    };

    const success = await new Promise((resolve, reject) => {
      // send mail

      transporter.sendMail(mailOption, function (error, info) {
        if (error) {
          reject(err);
        }
        if (info) {
          resolve(true);
          return NextResponse.json({
            message: "Message Successfully Send",
            status: 200,
          });
        }
      });
    });

    if (!success) {
      return NextResponse.json({
        message: "Something Went Wrong .Please try again",
        status: 400,
      });
    } else {
      return NextResponse.json({
        message: "Message Successfully Send",
        status: 200,
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// export async function PUT() {
//   return NextResponse.json({ message: 'Hello - PUT' });
// }

// export async function DELETE() {
//   return NextResponse.json({ message: 'Hello - DELETE' });
// }
