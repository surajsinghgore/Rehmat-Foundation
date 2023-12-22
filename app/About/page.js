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
            <Image src={"/homeabout.jpg"} alt="lsogo" layout="fill" priority />
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
              So who is good, and who is bad? The main focus of foundation is to
              provide education to needy youth to lighten the coming Future and to engage youth with ourself.
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


</div>
    </div>
  );
}
