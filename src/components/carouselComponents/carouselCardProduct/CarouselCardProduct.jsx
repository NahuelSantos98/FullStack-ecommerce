import PropTypes from "prop-types";
import "react-multi-carousel/lib/styles.css";

const CarouselCardProduct = ({ prod }) => {
  return (
    <div className="carousel-card">
      <h2>{prod.title}</h2>
      <p>{prod.description}</p>
      <p><strong>Categoría:</strong> {prod.category}</p>
      <p><strong>Autor:</strong> {prod.author}</p>
      <p><strong>Fecha:</strong> {prod.date}</p>
    </div>
  );
};

CarouselCardProduct.propTypes = {
  prod: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default CarouselCardProduct;
