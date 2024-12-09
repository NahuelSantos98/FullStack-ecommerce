

const CarouselCardProduct = ({prod}) => {
    const {image} =  prod;
    
  return (
    <div className='h-full w-[400px] m-2 flex-shrink-0 cursor-pointer '>
        <div className="rounded-3xl overflow-hidden mb-4 relative h-[250px]">
            <img src={image} alt='image product'/>
        </div>
    </div>
  )
}

export default CarouselCardProduct