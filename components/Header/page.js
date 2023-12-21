"use client";

import { usePathname } from 'next/navigation';
import style from "./page.module.css";
import logo from "../../app/icon.png";
import Image from "next/legacy/image";
import Link from "next/link";


export default function Page() {
  const currentPage = usePathname();

  return (
    <div className={style.Header}>
      {/* Header Logo */}
      <div className={style.logo}>
        <div className={style.image}>
          <Link href={"/"}>
            <Image src={logo} alt="Logo" layout="fill" priority/>
          </Link>
        </div>
        <div className={style.heading}>
          REH<span>MAT</span>
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
        className={(currentPage=="/About")?style.activePage:""}
        
        >
          <Link href="">ABOUT</Link>
        </li>
        <li
        className={(currentPage=="/Gallery")?style.activePage:""}
        
        >
          <Link href="">GALLERY</Link>
        </li>
        <li
        
        className={(currentPage=="/Events"||currentPage=="/UpcomingEvent")?style.activePage:""}
        >
          <Link href="/Events">EVENTS</Link>
        </li>
        <li className={(currentPage=="/Contact")?style.activePage:""}>
          <Link href="">CONTACT</Link>
        </li>
        <li className={(currentPage=="/Members")?style.activePage:""}>
          <Link href="">MEMBERS</Link>
        </li>
      </div>

      {/* donate button */}
      <div className={style.donateButton}>
        <button>DONATE</button>
      </div>
    </div>
  );
}
