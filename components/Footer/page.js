import Image from 'next/legacy/image';
import style from './style.module.css'
import { CiHeart } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaAngleDoubleRight } from "react-icons/fa";
import Link from 'next/link';
export default function page() {
  return (
    <div className={style.FooterSection}>
    <div className={style.mainContainer}>
{/* address */}
<div className={style.address}>
<div className={style.nameSection}>
<div className={style.imageSection}>
<Image src="/logo.png" alt="logo" layout='fill' />
</div>
<div className={style.brandName}>
Rehmat Foundation Chandigarh
</div>
</div>

{/* contact */}
<div className={style.contact}>
<li><span><SlLocationPin /></span> Sector 43-A Chandigarh</li>
<li><span><FaPhone /></span>+91 7658647638</li>
<li><span><IoMdMail /></span>rehmatfoundation@gmail.com</li>


</div>

</div>
{/* use full links */}
<div className={style.useFullLinks}>
<h3>USEFUL LINKS</h3>
<div className={style.links}>
<li><span><FaAngleDoubleRight /></span><Link href="">About</Link></li>
<li><span><FaAngleDoubleRight /></span><Link href="">Gallery</Link></li>
<li><span><FaAngleDoubleRight /></span><Link href="">Events</Link></li>
<li><span><FaAngleDoubleRight /></span><Link href="">Contact</Link></li>


</div>
</div>

{/* recent events */}
<div className={style.aboutUs}>
<h3>ABOUT US</h3>
<p>Rehmat Foundation is a foundation or NGO in Chandigarh which helps needy people by giving them food-langar and shelter. The foudation provide equality in every religion. </p>
</div>
    </div>
     <div className={style.bottom}>
     Copyright ©2023 All rights reserved | This template is made with <span><CiHeart /></span> by Rehmat Foundation
     </div>
    </div>
  )
}
