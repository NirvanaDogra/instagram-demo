import React from "react";
import UserProfile from "../UserProfile/UserProfile.jsx";
import UserDetailsHeader from "./userDetailsHeader/UserDetailsHeader.jsx";
import "./header.css";

const Header = ({imgUrl, title, location, isVerified, time}) => {
    return <section className="p-card-header-m">
        <span className="p-card-header-info">
            <UserProfile img={imgUrl} alt={`${title}'s profile image`} />
            <UserDetailsHeader title={title} location={location} isVerified={isVerified} time={time}/>
        </span>
        <span className="p-card-header-moreInfo">...</span>
    </section>
}

export default Header;