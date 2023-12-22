import Image from 'next/legacy/image';
import style from './style.module.css';


export default function page() {
  return (
    <div className={style.Member}>
      <h1>Members List</h1>

<div className={style.memberCards}>
{/* member 1 */}
<div className={style.card}>
<div className={style.image}>
<Image src="/member/img1.jpg" alt="member 1" layout="fill" priority/>
</div>
<h3>Founder</h3>
<h2>Kuljeet Singh Gill</h2>
</div>

{/* member 2 */}
<div className={style.card}>
<div className={style.image}>
<Image src="/member/img11.jpg" alt="member 1" layout="fill" priority/>
</div>
<h3>Adviser</h3>
<h2>Rimmi Gill</h2>
</div>
{/* member 3 */}
<div className={style.card}>
<div className={style.image}>
<Image src="/member/img13.jpg" alt="member 1" layout="fill" priority/>
</div>
<h3>Chairman</h3>
<h2>Jarnail Singh, DY Commissioner Excise and Taxation PB(Retd.)</h2>
</div>


{/* member 4 */}
<div className={style.card}>
<div className={style.image}>
<Image src="/member/img10.jpg" alt="member 1" layout="fill" priority/>
</div>
<h3>General Secretary</h3>
<h2>Ram Singh Balongi</h2>
</div>

{/* member 5 */}
<div className={style.card}>
<div className={style.image}>
<Image src="/member/img7.jpg" alt="member 1" layout="fill" priority/>
</div>
<h3>Secretary</h3>
<h2>Jassi Ghuman</h2>
</div>

<div className={style.card}>
<div className={style.image}>
<Image src="/member/img16.jpg" alt="member 1" layout="fill" priority/>
</div>
<h3>Media Advisor</h3>
<h2>Amarjit Singh</h2>
</div>




{/* member 6 */}
<div className={style.card}>
<div className={style.image}>
<Image src="/member/img12.jpg" alt="member 1" layout="fill" priority/>
</div>
<h3>President</h3>
<h2> Kuldeep Singh</h2>
</div>

{/* member 7 */}
<div className={style.card}>
<div className={style.image}>
<Image src="/member/img8.jpg" alt="member 1" layout="fill" priority/>
</div>
<h3>Vice President</h3>
<h2>Parmod Bhargav</h2>
</div>

{/* member 8 */}
<div className={style.card}>
<div className={style.image}>
<Image src="/member/img3.jpg" alt="member 1" layout="fill" priority/>
</div>
<h3>Finance Secretary</h3>
<h2>Mandeep Singh</h2>
</div>

{/* member 9 */}
<div className={style.card}>
<div className={style.image}>
<Image src="/member/img9.jpg" alt="member 1" layout="fill" priority/>
</div>
<h3>Joint Secretary</h3>
<h2>Karmjit Singh</h2>
</div>

{/* member 10 */}
<div className={style.card}>
<div className={style.image}>
<Image src="/member/img14.jpg" alt="member 1" layout="fill" priority/>
</div>
<h3>Sr Vice President</h3>
<h2>Sukhdev Singh</h2>
</div>


{/* member 11 */}
<div className={style.card}>
<div className={style.image}>
<Image src="/member/img15.jpg" alt="member 1" layout="fill" priority/>
</div>
<h3>Member</h3>
<h2>Suresh Kumar Shashi</h2>
</div>


{/* member 12 */}
<div className={style.card}>
<div className={style.image}>
<Image src="/member/img5.jpg" alt="member 1" layout="fill" priority/>
</div>
<h3>Member</h3>
<h2>Kavita Pathania</h2>
</div>


{/* member 13 */}
<div className={style.card}>
<div className={style.image}>
<Image src="/member/img4.jpg" alt="member 1" layout="fill" priority/>
</div>
<h3>Member</h3>
<h2>Ram Gopal Dhot</h2>
</div>

{/* member 14 */}
<div className={style.card}>
<div className={style.image}>
<Image src="/member/img6.jpg" alt="member 1" layout="fill" priority/>
</div>
<h3>Member</h3>
<h2>Baljit Kaur</h2>
</div>


{/* member 15 */}
<div className={style.card}>
<div className={style.image}>
<Image src="/member/img2.jpg" alt="member 1" layout="fill" priority/>
</div>
<h3>Member</h3>
<h2>Jagdeep Singh</h2>
</div>
</div>
    </div>
  )
}
