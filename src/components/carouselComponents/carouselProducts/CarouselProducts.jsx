import { productData } from '../../../utils/data'
import CarouselCardProduct from '../carouselCardProduct/CarouselCardProduct'

const CarouselProducts = () => {
  return (
    <>
        {productData.map(prod=>(
            <CarouselCardProduct prod={prod} key={prod.id} />
        ))}
    </>
  )
}

export default CarouselProducts