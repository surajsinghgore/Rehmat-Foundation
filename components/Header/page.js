"use client";

import { usePathname } from 'next/navigation';
import style from "./page.module.css";
import Image from "next/legacy/image";
import Link from "next/link";


export default function Page() {
  const currentPage = usePathname();
  const myArray = currentPage.split("/")

  return (
    <div className={style.Header}>
      {/* Header Logo */}
      <div className={style.logo}>
        <div className={style.image}>
          <Link href={"/"}>
            <Image src={"/logo.png"} alt="Logo" layout="fill" priority/>
          </Link>
        </div>
        <div className={style.heading}>
        <Link href={"/"}> REH<span>MAT</span></Link>
        </div>
      </div>
      {/* links of header */}
      <div className={style.links}>
        <li 
        className={(currentPage=="/")?style.activePage:""}

        >
          <Link href="/">HOME</Link>
        </li>
        <li
        className={(myArray[1]=="About")?style.activePage:""}
        
        >
          <Link href="/About">ABOUT</Link>
        </li>
        <li
        className={(myArray[1]=="Gallery")?style.activePage:""}
        
        >
          <Link href="/Gallery">GALLERY</Link>
        </li>
        <li
        
        className={(myArray[1]=="Events"||currentPage=="/UpcomingEvent")?style.activePage:""}
        >
          <Link href="/Events">EVENTS</Link>
        </li>
        <li className={(myArray[1]=="Contact")?style.activePage:""}>
          <Link href="/Contact">CONTACT</Link>
        </li>
        <li className={(myArray[1]=="Members")?style.activePage:""}>
          <Link href="/Members">MEMBERS</Link>
        </li>
      </div>

      {/* donate button */}
      <div className={style.donateButton}>
      <Link href="/Donation"> <button>DONATE</button></Link>
      </div>
    </div>
  );
}
