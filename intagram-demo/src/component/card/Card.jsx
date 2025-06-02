import React from "react"
import Carousel from '../Carousel/Carousel.jsx';
import Header from '../Header/Header.jsx';
import Reactions from '../Reactions/Reactions.jsx';
import "./card.css"

const Card = ({ }) => {
    const list = ["https://placehold.co/600x400", "https://placehold.co/650x400", "https://placehold.co/610x400", "https://placehold.co/603x400"]
    return (
        <div className="p-card">
            <Header />
            <Carousel list={list} intialValue={0} />
            <Reactions />
            <p>11, 944 likes</p>
        </div>
    );
}

export default Card;