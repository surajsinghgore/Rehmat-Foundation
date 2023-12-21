import style from "./page.module.css";
import logo from "../../app/icon.png";
import Image from "next/legacy/image";
import Link from "next/link";

export default function page() {
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
        <li className={style.activePage}>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="">ABOUT</Link>
        </li>
        <li>
          <Link href="">GALLERY</Link>
        </li>
        <li>
          <Link href="">EVENTS</Link>
        </li>
        <li>
          <Link href="">CONTACT</Link>
        </li>
        <li>
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
