import React, { useState } from "react";
import "./carousel.css";

const DefaultItemTemplate = (value) => {
    return <img src={value} alt="carousel item" />;
};

const Carousel = ({
    list,
    initialValue = 0,
    itemTemplate = DefaultItemTemplate,
    itemShowAtOnce = 1
}) => {
    const [carouselPos, setCarouselPos] = useState(initialValue);

    const isLeftHidden = carouselPos === 0;
    const isRightHidden = carouselPos === list.length - 1;

    let cmp = []
    for (let i = 0; i < itemShowAtOnce; i++) {
        if (carouselPos + i < list.length) {
            cmp.push(itemTemplate(list[carouselPos + i]))
        }
    }

    return (
        <div className="p-carousel">
            {!isLeftHidden && (<div className="p-carousel-leftArr" onClick={() => setCarouselPos((prev) => Math.max(prev - 1, 0))}>&larr;</div>)}
            <div className="p-carousel-items">
                {cmp}
            </div>
            {!isRightHidden && (<div className="p-carousel-rightArr" onClick={() => setCarouselPos((prev) => Math.min(prev + 1, list.length - 1))}>&rarr;</div>)}
        </div>
    );
};

export default Carousel;
