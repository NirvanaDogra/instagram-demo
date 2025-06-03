import React from "react";
import defaultImage from './image.png';
import "./userProfile.css";
const UserProfile = ({ img = defaultImage, alt = "user", size = "s", isClosefriend = false }) => {
    const statusClass = isClosefriend ? "close-friend" : "other-friends"
    return <img className={`p-userProfile-${size} ${statusClass}`} alt={alt} src={img} crossOrigin="anonymous" />
};

export default UserProfile;
