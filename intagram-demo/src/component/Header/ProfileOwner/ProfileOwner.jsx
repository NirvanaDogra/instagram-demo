import React from "react"
import Verified from "../../verified/Verified"
import "./profileOwner.css"
const ProfileOwner = ({ title, location, isVerified, time }) => {
    isVerified = true
    return <span className="p-header-profileOwner">
        <span className="p-header-profileOwner-info">
            <h3 className="title">{title}</h3>
            {isVerified && <Verified />}
            <p className="dot"></p>
            <p className="time">{time}</p>
        </span>
        {location}
    </span>
}

export default ProfileOwner