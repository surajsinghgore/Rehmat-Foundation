"use client"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingBar from "react-top-loading-bar";
import Script from 'next/script'





import {  useState } from "react";
import style from "./style.module.css";
import { FaRupeeSign } from "react-icons/fa";

export default function Page() {
  let d = new Date();
  // generate token
  let TokenId =
    Math.floor(Math.random() * 1000000000000000 + 1) +
    d.getDate() +
    d.getMonth() +
    d.getFullYear();

  const [progress, setProgress] = useState(0);

  const [data,setData]=useState({amount:'',name:'',phone:'',email:'',address:''})

  const makePaytmPayment = async (amounts) => {
   
    let ress = await fetch('/api/PaytmPreTransaction',
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          orderID: TokenId,
          amount:  data.amount,
          name:data.name,
          Email:data.email,
          phone:data.phone,
          address:data.address,
        }),
      }
    );
    let txnToken = await ress.json();
    setProgress(100);

    var config = {
             "root": "",
             "flow": "DEFAULT",
             "data": {
              "orderId": TokenId,
              "token": txnToken.token,
              "tokenType": "TXN_TOKEN",
              "amount":amounts
             },
             "handler": {
                "notifyMerchant": function(eventName,data){
                  console.log(eventName,data)
                }
              }
            };
                  window.Paytm.CheckoutJS.init(config).then(function onSuccess() {

    window.Paytm.CheckoutJS.invoke();
    }).catch(function onError(error){
    console.log("error => ",error);
    });
  };






  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const MakePayment=async(e)=>{
    e.preventDefault();
    setProgress(40);
    if(data.amount.length>9){
      toast.info("Maximum Amount To Donate is 999999999", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setData({...data,amount:''})
    setProgress(100);

      return;
    }

    if(data.phone.length>10 || data.phone.length<10){
      toast.warn("Please Provide 10 Digit Mobile Number", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setData({...data,phone:''})
    setProgress(100);

      return;
    }
    function validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
    let resCheck=validateEmail(data.email);
    if(resCheck==false){
      toast.warn("Invalid Email ID", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setData({...data,email:''})
    setProgress(100);

      return;

    }
  
    makePaytmPayment(data.amount);

    
  }
  return (
    <div className={style.donation}>
    <Script type="application/javascript" src={`https://securegw-stage.paytm.in/merchantpgpui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_PAYTM_MID}`} crossorigin="anonymous"></Script>
       <LoadingBar
        color="#ff0800"
        progress={progress}
       
        height={6}
      />
    <form onSubmit={MakePayment} method="post">

      <div className={style.formSection}>
        <h2>Payment Details</h2>
        <div className={style.formLinks}>
          <li>
            <div className={style.title}>Amount</div>
            <div className={style.input}>
              <span>
                <FaRupeeSign />
              </span>
              <input type="number" name="amount" value={data.amount}  onChange={handleChangeInput}  autoFocus required/>
            </div>
          </li>

          <li>
            <div className={style.title}>Name</div>
            <div className={style.input}>
              <input type="text" name="name" value={data.name}  onChange={handleChangeInput} required/>
            </div>
          </li>

          <li>
            <div className={style.title}>Phone</div>
            <div className={style.input}>
              <input type="Number" name="phone" value={data.phone}  onChange={handleChangeInput} required />
            </div>
          </li>

          <li>
            <div className={style.title}>Email</div>
            <div className={style.input}>
              <input type="email" name="email" value={data.email}  onChange={handleChangeInput} required/>
            </div>
          </li>

          <li>
            <div className={style.title}>Address</div>
            <div className={style.input}>
              <input type="text" name="address" value={data.address}  onChange={handleChangeInput} required/>
            </div>
          </li>
        </div>

        <div className={style.bottomBtn}>
          <div className={style.left}></div>
          <button> 
          
          Pay ₹ {data.amount}
            
          
      
          </button>
        </div>
        <p>You will get receipt of this payment on your Email.</p>
      </div>
    </form>
    <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
