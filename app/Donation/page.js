import Image from "next/legacy/image";
import style from "./style.module.css";
import { FaRupeeSign } from "react-icons/fa";

export default function page() {
  return (
    <div className={style.donation}>
      <div className={style.formSection}>
        <h2>Payment Details</h2>
        <div className={style.formLinks}>
          <li>
            <div className={style.title}>Amount</div>
            <div className={style.input}>
              <span>
                <FaRupeeSign />
              </span>
              <input type="number" name="amount" />
            </div>
          </li>

          <li>
            <div className={style.title}>Name</div>
            <div className={style.input}>
              
              <input type="text" name="name" />
            </div>
          </li>

          <li>
            <div className={style.title}>Phone</div>
            <div className={style.input}>
              
              <input type="Number" name="phone" />
            </div>
          </li>

          
          <li>
            <div className={style.title}>Email</div>
            <div className={style.input}>
              
              <input type="email" name="email" />
            </div>
          </li>

          <li>
            <div className={style.title}>Address</div>
            <div className={style.input}>
              
              <input type="text" name="address" />
            </div>
          </li>
       
        </div>

        <div className={style.bottomBtn}>
<div className={style.left}></div>
<div className={style.right}>Pay ₹ 5000</div>
        </div>
        <p>You will get receipt of this payment on your Email.</p>
      </div>
    </div>
  );
}
