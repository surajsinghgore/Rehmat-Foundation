
import style from './style.module.css'

export default function page() {
  return (
    <div className={style.videoSection}>
      <h1>Upcoming Event</h1>


<div className={style.format}>

{/* video1 */}

<video width="320" height="240" controls>
  <source src="https://res.cloudinary.com/du68kdw3m/video/upload/v1703343182/ka9ew0m5ua21kebbmbw3.mp4" type="video/mp4"/>
  <source src="https://res.cloudinary.com/du68kdw3m/video/upload/v1703343182/ka9ew0m5ua21kebbmbw3.mp4" type="video/ogg"/>
Your browser does not support the video tag.
</video>



{/* video2 */}
<video width="320" height="240" controls>
  <source src="https://res.cloudinary.com/du68kdw3m/video/upload/v1703343393/do0q9yukzx9s5pesdcfv.mp4" type="video/mp4"/>
  <source src="https://res.cloudinary.com/du68kdw3m/video/upload/v1703343393/do0q9yukzx9s5pesdcfv.mp4" type="video/ogg"/>
Your browser does not support the video tag.
</video>


{/* video3 */}
<video width="320" height="240" controls>
  <source src="https://res.cloudinary.com/du68kdw3m/video/upload/v1703343348/iv8f4jmxkbizifb5bzui.mp4" type="video/mp4"/>
  <source src="https://res.cloudinary.com/du68kdw3m/video/upload/v1703343348/iv8f4jmxkbizifb5bzui.mp4" type="video/ogg"/>
Your browser does not support the video tag.
</video>



{/* video4 */}
<video width="320" height="240" controls>
  <source src="https://res.cloudinary.com/du68kdw3m/video/upload/v1703343436/l8bokvfq0oktq4hfdp2y.mp4" type="video/mp4"/>
  <source src="https://res.cloudinary.com/du68kdw3m/video/upload/v1703343436/l8bokvfq0oktq4hfdp2y.mp4" type="video/ogg"/>
Your browser does not support the video tag.
</video>

</div>




     
    </div>
  )
}
