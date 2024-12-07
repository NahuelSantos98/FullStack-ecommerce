import BannerText from '../../../components/bannerComponents/bannerText/BannerText'
import bannerImg from '../../../utils/img/cactus-banner.png'

const Banner = () => {
  return (
    <section className="bg-[#75988f] pt-4 flex flex-col items-center rounded-2xl gap-4 w-[90%] md:flex-row md:items-center md:justify-around md:h-[30rem] md:pt-0 md:gap-8">
      <BannerText />
      <div className=" flex justify-center align-center md:mt-auto md:justify-start">
        <img src={bannerImg} alt="Cactus Image" className="w-[7rem] md:w-[12rem]" />
      </div>
    </section>
  );
};

export default Banner;
