import Search from "../searchbar/Search"


const BannerText = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-2 ">
        <h1 className="font-cormorant text-2xl font-bold md:text-5xl">Shop for any plant you wish</h1>
        <h4 className="w-[70%] font-simonetta md:text-2xl">Search by the name and find your new life for your place</h4>
        <Search />
    </div>
  )
}

export default BannerText;
