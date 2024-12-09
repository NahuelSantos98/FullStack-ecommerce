import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CarouselCard = ({ item }) => {
    const { url, title, link } = item;

    return (
        <Link to={link}>
        <div
            className="flex-shrink-0 mr-4"
            style={{ minWidth: "17rem" }}
        >
            <div
                style={{ backgroundImage: `url(${url})` }}
                className="relative rounded-lg shadow-lg w-full h-[7rem] bg-cover bg-center"
            >
                <div className="absolute bottom-0 left-0 w-full bg-[#194813] bg-opacity-80 text-white text-sm py-1 text-center rounded">
                    <p className="truncate px-2">{title}</p>
                </div>
            </div>
        </div>
        </Link>
    );
};

CarouselCard.propTypes = {
    item: PropTypes.object.isRequired,
};

export default CarouselCard;
