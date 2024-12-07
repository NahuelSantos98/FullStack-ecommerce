import CarouselCategory from '../../sections/carouselHome/CarouselCategory';
import Banner from '../../sections/homeSection/banner/Banner'


const Home = () => {
  return (
    <div className="pt-4">
      <div className="flex flex-col items-center gap-6">
      <Banner />
      <CarouselCategory />
      </div>
    </div>
  )
}

export default Home