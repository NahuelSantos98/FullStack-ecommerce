import CarouselCategory from '../../sections/homeSection/carouselHome/CarouselCategory';
import Banner from '../../sections/homeSection/banner/Banner'
import BannerAbout from '../../sections/homeSection/bannerAbout/BannerAbout';
import Seal from '../../sections/homeSection/seal/Seal';
import CarouselProductHome from '../../sections/homeSection/carouselProductHome/CarouselProductHome';


const Home = () => {
  return (
    <div className="pt-4">
      <div className="flex flex-col items-center gap-6">
      <Banner />
      <CarouselCategory />
      <CarouselProductHome />
      <BannerAbout />
      <Seal />
      </div>
    </div>
  )
}

export default Home