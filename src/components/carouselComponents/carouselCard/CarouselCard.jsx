import PropTypes from "prop-types"

const CarouselCard = ({ item }) => {
    const { title, description } = item;
    return (
        <div className="w-full sm:w-1/3 max-w-[calc(100%/3)] flex-shrink-0 p-2">
            <div className="bg-gray-200 rounded-lg shadow-lg p-4 text-center">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
            </div>
        </div>
    );
};

CarouselCard.propTypes = {
    item: PropTypes.object.isRequired,
};

export default CarouselCard;
