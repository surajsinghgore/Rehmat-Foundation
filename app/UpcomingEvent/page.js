import Image from "next/legacy/image";
import style from "./style.module.css";
import { MdDateRange } from "react-icons/md";
import { IoIosClock } from "react-icons/io";
export default function page() {
  return (
    <div className={style.UpcomingEvent}>
      <h1>Upcoming Event</h1>

      <div className={style.bannerImage}>
        <div className={style.imageSection}>
          <Image src="/banner3.jpg" alt="banner 3" layout="fill" priority />
        </div>
      </div>

      <div className={style.eventDetails}>
<div className={style.left}>
<h1>Event Brief</h1>
</div>
<div className={style.right}>


<div className={style.quote}>
“ਨਿੱਕੀਆਂ ਜਿੰਦਾਂ ਵੱਡੇ ਸਾਕੇ”
</div>
<p>Rehmat Foundation is organizing the 2nd Shaheedi Jodmel of Chaar Sahibzaade at Sector 43 A Chandigarh</p>

<p><span><MdDateRange /></span>30 DEC 2023</p>
<p><span><IoIosClock /></span>10:00 AM - 9:00 PM</p>


<h4>MAIN ATTRACTION</h4>
<div className={style.details}>

<p>1. BLOOD DONATION CAMP <br/>
2. MEDICAL CHECK-UP<br/>
3. MAMMOGRAPHY & BONE DENSITY CHECKUP BY Tera Hi Tera Mission Hospital<br/>
4. PAGRI LANGAR (MANJIT FIROZPURIA)<br/>
5. GURUMUKHI LIPI PARDARSHNI<br/>
6. PLANT DISTRIBUTION<br/>
7. KHETI VIRASAT MISSION FOR MILLETS STALL<br/>
8. INTERNATIONAL NATUROPATHIC ORGANISATION CAMP<br/>
9. GURU SHASTRAS EXIBITION BY S. NARINDER PAL SINGH FROM LUDHIANA<br/>
10. PUNJABI BOOKS BASED ON SIKH LITERATURE EXHIBITION BY SANT SEWA SINGH (RAMPUR KHERA SAHIB, GARHDIWALA, HOSHIAPUR DISTRICT)
<br/>
  </p>

  
</div>
<h5><b>LIGHT AND SOUND SHOW</b></h5>
<h5>SAKA-E-SIRHIND LIGHT & SOUND SHOW BY UNIVERSAL ART & CULTURE WELFARE SOCIETY</h5>
<p><span><IoIosClock /></span>5:30 PM - 8:30 PM</p>
</div>
      </div>


    </div>
  );
}
