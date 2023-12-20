import style from "./page.module.css";
import { FaRegCalendar } from "react-icons/fa"; 
import { VscLocation } from "react-icons/vsc";

import CountDownTimer from "../CountDownTimer/page"
export default function page() {
  return (
    <div className={style.homeBannerContainer}>

    <div className={style.HomeBanner}>
      <div className={style.textHeading}>
        Living a life of Truth, believe in one God (creator of universe),
        respect for others, and high moral standards.
      </div>
    </div>
    {/* upcoming */}


    <div className={style.upcomingEvent}>
    {/* date */}
    <div className={style.date}>
    <div>
       <h1>30</h1> 
       <h2> DEC</h2> 
    
    </div>
    </div>
{/* details */}
    <div className={style.eventDetails}> 
    <h1> Upcoming Event : 2nd SHAHEEDI JODMELA OF CHAAR SAHIBZADE</h1>
       <h2> <span><FaRegCalendar /> </span>  10:00 AM - 9:00 PM</h2>
  <h2> <span> <VscLocation /></span> Dusshera Ground, Sector 43 A Chandigarh</h2>
  

    </div>
{/* date */}
<CountDownTimer date={"30.12.2023"} time={"10.00"}/>    



    </div>



    </div>
  );
}
