import CarouselHome from '../../components/carouselComponents/carouselHome/CarouselHome'

const items = [
    { title: "Item 1", description: "Descripción del Item 1" },
    { title: "Item 2", description: "Descripción del Item 2" },
    { title: "Item 3", description: "Descripción del Item 3" },
    { title: "Item 4", description: "Descripción del Item 4" },
    { title: "Item 5", description: "Descripción del Item 5" },
    { title: "Item 6", description: "Descripción del Item 6" },
];

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