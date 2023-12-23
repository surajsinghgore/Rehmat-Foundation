import HomeBanner from '../components/Layout/HomeBanner/page';
import HomeBanner2 from '../components/Layout/HomeBanner2/page';
import HomeAboutImage from '../components/Layout/HomeAbout/page';
import PastEvent from '../components/Layout/PastEvent/page';
import VideoSection from '../components/Layout/VideoSection/page';



export default function Home() {
  return <div>

<HomeBanner />
<VideoSection />
<HomeAboutImage />
<HomeBanner2 />
<PastEvent/>
  </div>
    
}
