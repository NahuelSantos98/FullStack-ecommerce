import CarouselHome from '../../components/carouselComponents/carouselHome/CarouselHome'
import { items } from '../../utils/images'

const CarouselCategory = () => {
    return (
        <div>
            <div className="block md:hidden">
                <h1>Hola</h1>
            </div>
            <div className="hidden md:block">
                <CarouselHome items={items} />
            </div>
        </div>
    )
}

export default CarouselCategory