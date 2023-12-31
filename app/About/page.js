import style from "./style.module.css";
import Image from "next/legacy/image";

export default function page() {
  return (
    <div>
      <div className={style.AboutHome}>
        <h1>REHMAT FOUNDATION </h1>
        <p>UNITY IS DIVERSITY</p>

        <div className={style.container}>
          {/* image */}
          <div className={style.left}>
            <Image src={"/about1.jpg"} alt="lsogo" layout="fill" priority />
          </div>
          <div className={style.right}>
            <h2>
              Rehmat Foundation is a foundation or NGO in Chandigarh which helps
              needy people by giving them food-langar. The foundation
              provide equality in every religion. Respect Every Religion.
              &rdquo;Awwal allah noor upaya, kudrat ke sab bandey&rdquo; First,
              Allah created the Light; then, by His Creative Power, He made all
              mortal beings. &rdquo;Ek noor te sab jag upajya, koun bhalley koun
              mandey&rdquo; From the One Light, the entire universe welled up.
              So who is good, and who is bad? <b>The main focus of foundation is to
              provide education to needy youth to lighten the coming Future and to engage youth with ourself.</b>
            </h2>
          </div>
        </div>

        <style></style>
      </div>


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

<div className={style.card}>
<div className={style.image}>
<Image src="/member/img12.jpg" alt="member 1" layout="fill" priority/>
</div>
<h3>President</h3>
<h2> Kuldeep Singh</h2>
</div>



<div className={style.card}>
<div className={style.image}>
<Image src="/member/img3.jpg" alt="member 1" layout="fill" priority/>
</div>
<h3>Finance Secretary</h3>
<h2>Mandeep Singh</h2>
</div>

<div className={style.card}>
<div className={style.image}>
<Image src="/member/img14.jpg" alt="member 1" layout="fill" priority/>
</div>
<h3>Sr Vice President</h3>
<h2>Sukhdev Singh</h2>
</div>

<div className={style.card}>
<div className={style.image}>
<Image src="/member/img10.jpg" alt="member 1" layout="fill" priority/>
</div>
<h3>General Secretary</h3>
<h2>Ram Singh Balongi</h2>
</div>

  
</div>
    </div>
  );
}
