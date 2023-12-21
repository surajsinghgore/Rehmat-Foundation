import Image from 'next/legacy/image'
import style from './style.module.css'

export default function page() {
  return (
    <div className={style.gallery}>
      <h1>Gallery</h1>
      <div className={style.pics}>

<div className={style.sectionSmall}>
    <Image src="/gallery/img1.jpg" alt="img1" layout='fill' />
</div>
<div className={style.sectionSmall}>
    <Image src="/gallery/img2.jpg" alt="img1" layout='fill' />
</div>
<div className={style.sectionSmall}>
    <Image src="/gallery/img3.jpg" alt="img1" layout='fill' />
</div>
<div className={style.sectionSmallSmall}>
    <Image src="/gallery/img4.jpg" alt="img1" layout='fill' />
</div>
<div className={style.sectionLarge}>
    <Image src="/gallery/img7.jpg" alt="img1" layout='fill' />
</div>
<div className={style.sectionSmallSmall}>
    <Image src="/gallery/img5.jpg" alt="img1" layout='fill' />
</div>
<div className={style.sectionSmall}>
    <Image src="/gallery/img8.jpg" alt="img1" layout='fill' />
</div>
<div className={style.sectionSmall}>
    <Image src="/gallery/img6.jpg" alt="img1" layout='fill' />
</div>

<div className={style.sectionSmall}>
    <Image src="/gallery/img9.jpg" alt="img1" layout='fill' />
</div>
<div className={style.sectionLarge}>
    <Image src="/gallery/img10.jpg" alt="img1" layout='fill' />
</div>
<div className={style.sectionSmallSmall}>
    <Image src="/gallery/img11.jpg" alt="img1" layout='fill' />
</div>
<div className={style.sectionSmallSmall}>
    <Image src="/gallery/img12.jpg" alt="img1" layout='fill' />
</div>


<div className={style.sectionSmall}>
    <Image src="/gallery/img13.jpg" alt="img1" layout='fill' />
</div>
<div className={style.sectionSmall}>
    <Image src="/gallery/img14.jpg" alt="img1" layout='fill' />
</div>

<div className={style.sectionSmall}>
    <Image src="/gallery/img15.jpg" alt="img1" layout='fill' />
</div>





<div className={style.sectionSmallSmall}>
    <Image src="/gallery/img16.jpg" alt="img1" layout='fill' />
</div>
<div className={style.sectionSmallSmall}>
    <Image src="/gallery/img17.jpg" alt="img1" layout='fill' />
</div>
<div className={style.sectionLarge}>
    <Image src="/gallery/img18.jpg" alt="img1" layout='fill' />
</div>
      </div>
    </div>
  )
}
