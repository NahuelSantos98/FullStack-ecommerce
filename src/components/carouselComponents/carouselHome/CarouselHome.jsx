import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CarouselCard from "../carouselCard/CarouselCard";

const CarouselHome = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(getVisibleCards());
    const [carouselWidth, setCarouselWidth] = useState(getCarouselWidth());

    // Lógica de visibilidad y tamaños para cada dispositivo
    function getVisibleCards() {
        if (window.innerWidth >= 1024) return 3;  // Desktop
        if (window.innerWidth >= 768) return 2;   // Tablet
        return 1;  // Mobile
    }

    function getCarouselWidth() {
        const cardWidth = 272; // 17rem en píxeles (redondeado)
        const cardSpacing = 16; // Espacio entre tarjetas
        return cardWidth * visibleCards + cardSpacing * (visibleCards - 1);
    }

    // Actualizar la visibilidad y el ancho al cambiar el tamaño de la pantalla
    useEffect(() => {
        const handleResize = () => {
            const newVisibleCards = getVisibleCards();
            setVisibleCards(newVisibleCards);
            setCarouselWidth(getCarouselWidth());
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [visibleCards]); // Esto asegura que se ejecute cuando cambia el número de tarjetas visibles

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            // Calculamos el índice teniendo en cuenta el número de tarjetas visibles
            const maxIndex = items.length - visibleCards;
            return prevIndex + 1 > maxIndex ? 0 : prevIndex + 1;
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            return prevIndex - 1 < 0 ? items.length - visibleCards : prevIndex - 1;
        });
    };

    const cardWidth = 272; // 17rem en píxeles (redondeado)
    const cardSpacing = 16; // Espacio entre tarjetas

    return (
        <div className="relative w-full flex justify-center items-center">
            <button
                onClick={prevSlide}
                className="bg-[#75988f] text-white p-3 rounded-full hover:bg-[#3C7868] shadow-lg mr-4"
            >
                {"<"}
            </button>

            <div className="overflow-hidden" style={{ width: `${carouselWidth}px` }}>
                <div
                    className="flex transition-transform duration-500"
                    style={{
                        transform: `translateX(-${currentIndex * (cardWidth + cardSpacing)}px)`,
                        width: `${items.length * (cardWidth + cardSpacing)}px`,
                    }}
                >
                    {items.map((item, index) => (
                        <CarouselCard item={item} key={index} />
                    ))}
                </div>
            </div>

            <button
                onClick={nextSlide}
                className="bg-[#75988f] text-white p-3 rounded-full hover:bg-[#3C7868] shadow-lg ml-4"
            >
                {">"}
            </button>
        </div>
    );
};

CarouselHome.propTypes = {
    items: PropTypes.array.isRequired,
};

export default CarouselHome;
