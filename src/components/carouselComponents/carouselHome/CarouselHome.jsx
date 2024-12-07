import { useState } from "react";
import PropTypes from "prop-types";
import CarouselCard from "../carouselCard/CarouselCard";

const CarouselHome = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 3 >= items.length ? 0 : prevIndex + 3
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 3 < 0 ? items.length - 3 : prevIndex - 3
        );
    };

    return (
        <div className="relative w-full flex justify-center items-center">

            <button
                onClick={prevSlide}
                className="bg-[#75988f] text-white p-3 rounded-full hover:bg-[#3C7868] shadow-lg mr-4"
            >
                {"<"}
            </button>

            <div className="w-full sm:w-4/5 max-w-4xl overflow-hidden relative">
                <div
                    className="flex transition-transform duration-500"
                    style={{
                        transform: `translateX(-${currentIndex * (100 / 3)}%)`,
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
