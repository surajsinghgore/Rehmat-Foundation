import Image from "next/legacy/image";
import style from "./style.module.css";
export default function Page() {
  return (
    <div className={style.donate}>
      <h1>Donate With Us</h1>

      <h2>Donate  Online</h2>
      <p>
        Please send an email to{" "}
        <a href="mailto:rehmatfoundationofficial@gmail.com">
          rehmatfoundationofficial@gmail.com
        </a>{" "}
        once you have made a donation, so we can confirm receipt.
        <br /> Attach screenshot of payment with email
      </p>
      <div className={style.qrcodescan}>
        <div className={style.qrcode}>
          <Image src={"/qr.jpg"} alt="qr code " layout="fill" priority />
        </div>
      </div>

<h2>Pay with Bank Account Details</h2>
<div className={style.paywithbank}>


<h6><span>Bank:</span>ICICI BANK</h6>
<h6><span>Account Number:</span>001301533100</h6>
<h6><span>IFSC Code:</span>ICIC0000013</h6>

<h6><span>Branch:</span>Sector 9-C Chandigarh (160017) </h6></div>
    </div>
  );
}
