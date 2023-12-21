import Image from 'next/legacy/image';
import style from './style.module.css';
import Link from 'next/link';
import { MdOutlineLocationOn } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
export default function page() {
  return (
    <div className={style.PastEvent}>
      <h1>Event Completed</h1>
      <p>Our lives in praising God</p>

      <Link href="/Events/Event1"> <div className={style.container}>
     
{/* 18 Dec 2022 */}
        <div className={style.event}>
<div className={style.Main_Image}>
<Image src="/event1.jpg" alt="event 1" layout='fill' priority/>
</div>
<h2>Chaar Sahibzade</h2>
<p>Event 1</p>
<div className={style.date}><span><FaRegCalendarAlt /> </span>18 December 2022</div>
<div className={style.date}><span><MdOutlineLocationOn /></span>Dussehra Ground, Sector 43-A Chandigarh </div>
        </div>
       


        
      </div> </Link>
    </div>
  )
}
