import React, { useState } from "react";
import "./carousel.css";

const Carousel = ({
    list,
    initialValue = 0,
    itemTemplate,
    itemShowAtOnce = 1
}) => {
    const [carouselPos, setCarouselPos] = useState(initialValue);

    const isLeftHidden = carouselPos === 0;
    const isRightHidden = carouselPos === list.length - 1;

    const visibleItems = list
        .slice(carouselPos, carouselPos + itemShowAtOnce)
        .map(itemTemplate);

    return (
        <section className="p-carousel">
            {!isLeftHidden && (<div className="p-carousel-leftArr" aria-label="naviagte left" onClick={() => setCarouselPos((prev) => Math.max(prev - 1, 0))}>&larr;</div>)}
            <div className="p-carousel-items">
                {visibleItems}
            </div>
            {!isRightHidden && (<div className="p-carousel-rightArr" aria-label="naviagte right" onClick={() => setCarouselPos((prev) => Math.min(prev + 1, list.length - 1))}>&rarr;</div>)}
        </section>
    );
};

export default Carousel;
