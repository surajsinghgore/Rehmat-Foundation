import Image from "next/legacy/image";
import style from "./style.module.css";
import Link from "next/link";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
export default function page() {
  return (
    <div className={style.PastEvent}>
      <h1>Event Completed</h1>
      <p>Our lives in praising God</p>


<div className={style.parent}>




      {/* 18 Dec 2022 */}
     
        {" "}
        <div className={style.container}>
        <Link href="/Events/Event1">
          <div className={style.event}>
            <div className={style.Main_Image}>
              <Image
                src="/firstevent.jpg"
                alt="event 1"
                layout="fill"
                priority
              />
            </div>
            <h2>Chaar Sahibzade</h2>
            <p>Event 1</p>
            <div className={style.date}>
              <span>
                <FaRegCalendarAlt />{" "}
              </span>
              18 December 2022
            </div>
            <div className={style.date}>
              <span>
                <MdOutlineLocationOn />
              </span>
              Dussehra Ground, Sector 43-A Chandigarh{" "}
            </div>
          </div>   </Link>
        </div>{" "}
   



 {/* 30 Dec 2023 */}
   
        {" "}
        <div className={style.container}>
        <Link href="/Events/Event2">
          <div className={style.event}>
            <div className={style.Main_Image}>
              <Image
                src="https://res.cloudinary.com/du68kdw3m/image/upload/v1705051836/photos/lhufrtgzlvhpqeapxz56.jpg"
                alt="event 1"
                layout="fill"
                priority
              />
            </div>
            <h2>Chaar Sahibzade</h2>
            <p>Event 2</p>
            <div className={style.date}>
              <span>
                <FaRegCalendarAlt />{" "}
              </span>
              30 December 2023
            </div>
            <div className={style.date}>
              <span>
                <MdOutlineLocationOn />
              </span>
              Dussehra Ground, Sector 43-A Chandigarh{" "}
            </div>
          </div>    </Link>
        </div>
        </div>
    </div>
  );
}
