import React from "react";
import Verified from '../verified/Verified.jsx';
import "./user.css";

const User = ({ unsername, isVerified }) => {
    return <span className="p-user">
        <h3 className="p-user-username">{unsername}</h3>
        {isVerified && <Verified />}
    </span>
}

export default User;