import { prodData } from "../../../utils/data";
import CarouselCardProduct from "../carouselCardProduct/CarouselCardProduct";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const CarouselProducts = () => {
  // Validación para evitar errores si `prodData` está vacío o no existe
  if (!prodData || prodData.length === 0) {
    return <p>No hay productos disponibles.</p>;
  }

  return (
    <div className="carousel-container">
      <Carousel responsive={responsive}>
        {prodData.map((item) => (
          <CarouselCardProduct key={item.id} prod={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselProducts;
