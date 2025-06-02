import React from "react"
import "./header.css"
import UserProfile from "../UserProfile/UserProfile.jsx";
import ProfileOwner from "./ProfileOwner/ProfileOwner.jsx";

const Header = () => {
    return <div className="p-card-header-m">
        <span className="p-card-header-info">
            <UserProfile />
            <ProfileOwner title={"jayshetty"} location={"Los Angeles, California"} isVerified={true} time={"5hr"}/>
        </span>
        <span className="p-card-header-moreInfo">...</span>
    </div>
}

export default Header;