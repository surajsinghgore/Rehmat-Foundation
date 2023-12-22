const https = require('https');
import PaytmChecksum from "paytmchecksum";
import { NextResponse } from "next/server";

let mid=process.env.NEXT_PUBLIC_PAYTM_MID;
let mkey=process.env.NEXT_PUBLIC_PAYTM_MKEY;
let HOST="http://localhost:3000";
export async function POST(req) {
  if (req.method == "POST") {



try{
    const { orderID, amount,name,phone, Email,address } = await req.json();
    var paytmParams = {};
    paytmParams.body = {
        "requestType"   : "Payment",
        "mid"           : mid,
        "websiteName"   : "WEBSTAGING",
        "orderId"       : `${orderID}`,
        "callbackUrl"   : `${HOST}/api/PaytmPostTransaction?Email=${Email}&name=${name}&phone=${phone}&address=${address}`,
        "txnAmount"     : {
            "value"     : `${amount}`,
            "currency"  : "INR",
        },
        "userInfo"      : {
            "custId"    : `${Email}`,
        },
    };
    
    
    let checksum=await PaytmChecksum.generateSignature(JSON.stringify(paytmParams.body), mkey)
        paytmParams.head = {
            "signature"    : checksum
        };
    


        let post_data = JSON.stringify(paytmParams);
    const requestAsync=async()=>{
      return new Promise((resolve,reject)=>{

            let options = {
    
                  /* for Staging */
                  hostname: 'securegw-stage.paytm.in',
          
                  /* for Production */
                  // hostname: 'securegw.paytm.in',
          
                  port: 443,
                  path: `/theia/api/v1/initiateTransaction?mid=${mid}&orderId=${orderID}`,
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                      'Content-Length': post_data.length
                  }
              };
          
              var response = "";
              var post_req =https.request(options, function(post_res) {
                  post_res.on('data', async function (chunk) {
                      response += chunk;
                  });
          
                  post_res.on('end',async function(){
                    
           let token=await JSON.parse(response).body.txnToken;

          resolve(token)
                  });
              });
          
              post_req.write(post_data);
              post_req.end();
      })
    }
 let token=await requestAsync();

 return NextResponse.json(
  { token },
  { status: 200 }
);
  

 }
 catch(error){
  console.log(error);
  return NextResponse.json(
    { message: "Internal Server Error" },
    { status: 500 }
  );
  }


  }

 
}