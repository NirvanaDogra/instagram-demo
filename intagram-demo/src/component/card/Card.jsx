import React from "react";
import { formattedNumbers } from "../../util/NumberUtil.js";
import Carousel from '../carousel/Carousel.jsx';
import Header from '../header/Header.jsx';
import Reactions from '../reactions/Reactions.jsx';
import "./card.css";


const defaultItemTemplate = (value) => {
    return <img src={value} alt="carousel item" />;
};

const Card = ({ post }) => {
    const { title, isVerified, time, postLocation } = post.user
    const { imgUrls, hasLikes, noOfLikes, message } = post.post
    return (
        <article className="p-card">
            <Header title={title} isVerified={isVerified} time={time} location={postLocation} />
            <Carousel list={imgUrls} intialValue={0} itemTemplate={defaultItemTemplate} />
            <Reactions hasLiked={hasLikes} />
            <section>
                <p><strong>{formattedNumbers(noOfLikes)} likes</strong></p>
                <p>{message}</p>
            </section>
        </article>
    );
}

export default Card;