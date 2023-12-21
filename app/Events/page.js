import Image from 'next/legacy/image';
import style from './style.module.css';
import { FaCalendar } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";
import Link from 'next/link';
export default function page() {
  return (
    <div className={style.Event}>
      
<h1>LIST OF EVENTS</h1>
<p>Events held and scheduled by us</p>


<div className={style.container}>

{/* 30 Dec 2023 */}
<div className={style.card}><Link href="/UpcomingEvent">
<div className={style.imageSection}>
<Image src="/uc.jpg" alt="event 1" layout='fill' priority />
</div>
<div className={style.description}>
    <div className={style.date}>
    <div>
       <h1>30</h1> 
       <h2> DEC 2023</h2> 
    
    </div>
    </div>

    <div className={style.details}>

<h2>
2&apos;nd SHAHEEDI JODMEL OF CHAAR SAHIBZAADE
</h2>

<li><span><FaCalendar /></span> 30 DEC 2023     </li>
<li><span><IoTimeSharp /></span>  10:00 AM - 9:00 PM </li>

    </div>
</div>
</Link>
</div>





{/* 18 Dec 2022 */}

<div className={style.card}><Link href="">
<div className={style.imageSection}>
<Image src="/homeabout.jpg" alt="event 1" layout='fill' priority />
</div>
<div className={style.description}>
    <div className={style.date}>
    <div>
       <h1>18</h1> 
       <h2> DEC 2022</h2> 
    
    </div>
    </div>

    <div className={style.details}>

<h2>
1&apos;st SHAHEEDI JODMEL OF CHAAR SAHIBZAADE
</h2>

<li><span><FaCalendar /></span> 18 DEC 2022     </li>
<li><span><IoTimeSharp /></span>  10:00 AM - 9:00 PM </li>

    </div>
</div>
</Link>
</div>



</div>
    </div>
  )
}
