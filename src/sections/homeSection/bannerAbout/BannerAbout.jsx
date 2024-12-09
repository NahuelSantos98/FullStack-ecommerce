import bannerLogo from '../../../utils/img/Grow Plants Home Garden.png'

const BannerAbout = () => {
    return (
        <article className='w-screen bg-[#75988F] flex flex-col justify-around items-center px-4 md:flex-row md:h-80' >
            <h1 className='font-cormorant text-2xl my-4 block md:hidden underline text-white'>About us</h1>
            <div className='order-2'>
                <h1 className='font-cormorant text-2xl my-4 hidden md:block underline text-white'>About us</h1>
                <img src={bannerLogo} alt='Banner logo' className='h-[15rem]' />
            </div>
            <div className='order-1 text-lg text-center md:order-2 md:text-justify md:w-[35%] '>
                <p>Welcome to our Plant Shop, where you can find everything you need to nurture your green space. From high-quality gardening tools to a variety of beautiful plants, we offer a wide selection to help you create the perfect garden or indoor oasis. Whether you are looking to add some greenery to your home or find the right plants for your outdoor space, we have something for every plant lover. Visit us today and discover the perfect additions for your garden!</p>
            </div>
        </article>
    )
}

export default BannerAbout