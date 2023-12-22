import { NextResponse,NextRequest } from "next/server";
const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NEXT_PUBLIC_GMAIL_ACCOUNT_ID,
    pass: process.env.NEXT_PUBLIC_GMAIL_ACCOUNT_PASSWORD,
  },
});
export async function POST(req,res) {
  const formData = await req.formData()
  const BANKNAME = formData.get('BANKNAME')
  const BANKTXNID = formData.get('BANKTXNID')
  const CHECKSUMHASH = formData.get('CHECKSUMHASH')
  const CURRENCY = formData.get('CURRENCY')
  const GATEWAYNAME = formData.get('GATEWAYNAME')
  const MID = formData.get('MID')
  const ORDERID = formData.get('ORDERID')
  const PAYMENTMODE = formData.get('PAYMENTMODE')
  const RESPCODE = formData.get('RESPCODE')
  const RESPMSG = formData.get('RESPMSG')
  const STATUS = formData.get('STATUS')
  const TXNAMOUNT = formData.get('TXNAMOUNT')
  const TXNDATE = formData.get('TXNDATE')
  const TXNID = formData.get('TXNID')


let urls=req.url;

let str1=urls.split("?")
str1.shift()
let two=str1.toString();

let str2=two.split("&")




let s1=str2.toString();
let news1=s1.replaceAll("=",'":"');
let ns=news1.split(",")
let userData=`{"${ns[0]}","${ns[1]}","${ns[2]}","${ns[3]}"}`;
let userInfo=JSON.parse(userData)


  try {
 
if(STATUS=="TXN_SUCCESS"){
 // send mail to organization
 const mailOption = {
  from: process.env.NEXT_PUBLIC_GMAIL_ACCOUNT_ID,
  to: process.env.NEXT_PUBLIC_GMAIL_FOR_CLIENT_MESSAGE,

  subject: "Payment Received",
  html: `
<h1 style="color:red;text-align:center">Donation Received</h1>

<h4 style="color:orange;padding-left:5px;color:#636363">Amount</h4>
<div style="border:2px solid #636363;padding:1% 3% 1% 3%;font-size:6vw;color:#636363;margin-top:10%;margin-bottom:10%;text-align:center;margin-top:-5%">${TXNAMOUNT}</div>

<h4 style="color:orange;padding-left:5px;color:#636363">PHONE NUMBER</h4>
<div style="border:2px solid #636363;padding:1% 3% 1% 3%;font-size:6vw;color:#636363;margin-top:10%;margin-bottom:10%;text-align:center;margin-top:-5%">${userInfo.phone}</div>

<h4 style="color:orange;padding-left:5px;color:#636363">EMAIL ADDRESS</h4>
<div style="border:2px solid #636363;padding:1% 3% 1% 3%;font-size:6vw;color:#636363;margin-top:10%;margin-bottom:10%;text-align:center;margin-top:-5%">${userInfo.Email}</div>

<h4 style="color:orange;padding-left:5px;color:#636363"> ADDRESS</h4>
<div style="border:2px solid #636363;padding:1% 3% 1% 3%;font-size:6vw;color:#636363;margin-top:10%;margin-bottom:10%;text-align:center;margin-top:-5%">${userInfo.address}</div>


<h4 style="color:orange;padding-left:5px;color:#636363">DATE</h4>
<div style="border:2px solid #636363;padding:1% 3% 1% 3%;font-size:6vw;color:#636363;margin-top:10%;margin-bottom:10%;text-align:center;margin-top:-5%">${TXNDATE}</div>


<h4 style="color:orange;padding-left:5px;color:#636363">ORDERID</h4>
<div style="border:2px solid #636363;padding:1% 3% 1% 3%;font-size:6vw;color:#636363;margin-top:10%;margin-bottom:10%;text-align:center;margin-top:-5%">${ORDERID}</div>

<h4 style="color:orange;padding-left:5px;color:#636363">STATUS</h4>
<div style="border:2px solid #636363;padding:1% 3% 1% 3%;font-size:6vw;color:#636363;margin-top:10%;margin-bottom:10%;text-align:center;margin-top:-5%">${STATUS}</div>



<h4 style="color:orange;padding-left:5px;color:#636363">PAYMENTMODE</h4>
<div style="border:2px solid #636363;padding:1% 3% 1% 3%;font-size:6vw;color:#636363;margin-top:10%;margin-bottom:10%;text-align:center;margin-top:-5%">${PAYMENTMODE}</div>



<h4 style="color:orange;padding-left:5px;color:#636363">BANKNAME</h4>
<div style="border:2px solid #636363;padding:1% 3% 1% 3%;font-size:6vw;color:#636363;margin-top:10%;margin-bottom:10%;text-align:center;margin-top:-5%">${BANKNAME}</div>



<h4 style="color:orange;padding-left:5px;color:#636363">CURRENCY</h4>
<div style="border:2px solid #636363;padding:1% 3% 1% 3%;font-size:6vw;color:#636363;margin-top:10%;margin-bottom:10%;text-align:center;margin-top:-5%">${CURRENCY}</div>



<h4 style="color:orange;padding-left:5px;color:#636363">BANKTXNID</h4>
<div style="border:2px solid #636363;padding:1% 3% 1% 3%;font-size:6vw;color:#636363;margin-top:10%;margin-bottom:10%;text-align:center;margin-top:-5%">${BANKTXNID}</div>


<h4 style="color:orange;padding-left:5px;color:#636363">TXNID</h4>
<div style="border:2px solid #636363;padding:1% 3% 1% 3%;font-size:6vw;color:#636363;margin-top:10%;margin-bottom:10%;text-align:center;margin-top:-5%">${TXNID}</div>

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


// send mail to customer
const mailOptions = {
  from: process.env.NEXT_PUBLIC_GMAIL_ACCOUNT_ID,
  to:userInfo.Email,

  subject: "Payment Received",
  html: `
<h1 style="color:red;text-align:center">Thanks For Donation</h1>

<h4 style="color:orange;padding-left:5px;color:#636363">Amount Donated</h4>
<div style="border:2px solid #636363;padding:1% 3% 1% 3%;font-size:6vw;color:#636363;margin-top:10%;margin-bottom:10%;text-align:center;margin-top:-5%">${TXNAMOUNT}</div>

<p>On behalf of everyone at rehmat foundation, I want to extend our deepest thanks for your recent donation </p>

`,
};

const successToClient = await new Promise((resolve, reject) => {
  // send mail

  transporter.sendMail(mailOptions, function (error, info) {
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









return NextResponse.json({
  message: "Message Successfully Send",
  status: 200,
});

}
  
return NextResponse.json({
  message: "Something went wrong",
  status: 400,
}); 
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      message: "err Successfully Send",
      status: 500,
    });
  }
  




}
