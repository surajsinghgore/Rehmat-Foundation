import style from "./style.module.css";
import { IoLocationSharp } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { BsBrowserChrome } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import FormContainer from "../../containers/Contact/ContactForm/page";
export default function page() {
  return (
    <div className={style.ContactPage}>
      <h1>Contact US</h1>

      <div className={style.contactSection}>
        <div className={style.left}>
          <li>
            <span>
              <IoLocationSharp />
            </span>{" "}
            CHANDIGARH
          </li>
          <li>
            <span>
              <MdCall />
            </span>
            +91 9888987216
          </li>
          <li>
            <span>
              <MdCall />
            </span>{" "}
            +91 9915501161
          </li>
          <li>
            <span>
              <MdCall />
            </span>
            +91 9915108868
          </li>
          <li>
            <span>
              <BsBrowserChrome />
            </span>
            www.rehmatfoundation.in
          </li>
          <li>
            <span>
              <MdMailOutline />
            </span>
            rehmatfoundationofficial@gmail.com
          </li>
        </div>
        <FormContainer />
      </div>
    </div>
  );
}
