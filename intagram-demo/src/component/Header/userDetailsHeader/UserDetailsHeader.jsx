import React from "react"
import User from "../../user/User"
import "./userDetailsHeader.css"

const UserDetailsHeader = ({ title, location, isVerified, time }) => {
    return <span className="p-header-profileOwner">
        <span className="p-header-profileOwner-info">
            <User unsername={title} isVerified={isVerified} />
            <p className="p-header-profileOwner-info-dot">.</p>
            <p className="time">{time}</p>
        </span>
        {location}
    </span>
}

export default UserDetailsHeader;