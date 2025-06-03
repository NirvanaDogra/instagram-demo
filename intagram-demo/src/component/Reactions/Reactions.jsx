import React, { useState } from "react";
import Heart from "./heart/Heart.jsx";
import "./reaction.css";

const Message = ({ handleClick }) => {
    return <span onClick={handleClick}>
        <svg aria-label="Comment" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>
    </span>
}

const Share = ({ handleClick }) => {
    return <span onClick={handleClick}>
        <svg aria-label="Share" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share</title><path d="M13.973 20.046 21.77 6.928C22.8 5.195 21.55 3 19.535 3H4.466C2.138 3 .984 5.825 2.646 7.456l4.842 4.752 1.723 7.121c.548 2.266 3.571 2.721 4.762.717Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="7.488" x2="15.515" y1="12.208" y2="7.641"></line></svg>
    </span>
}

const BookMark = ({ handleClick }) => {
    return <span onClick={handleClick}>
        <svg aria-label="Save" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Save</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
    </span>
}

const Reactions = ({ hasLiked = false }) => {
   
    return <section className="p-reactions">
        <div className="p-reactions-action">
            <Heart isActive={hasLiked} />
            <Message handleClick={() => alert("meesgae")} />
            <Share handleClick={() => alert("share")} />
        </div>
        <BookMark handleClick={() => alert("bookmark")} />
    </section>
};

export default Reactions;