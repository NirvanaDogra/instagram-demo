import React from "react";
import "./sideNavBar.css";
import { useNavigate } from "react-router-dom";

const NavItem = ({ icon, item, onClick, route }) => {
  return (
    <div className="p-sidebar-navItem" onClick={() => onClick(route)}>
      <span>{icon}</span>
      <span>{item}</span>
    </div>
  );
};

const SideNavBar = ({ items }) => {
  const navigate = useNavigate(); 
  const handleClick = (route) => {
    navigate(route); 
  };

  return (
    <nav className="p-sidebar">
      {items.map((it) => (
        <NavItem
          key={it.route}      
          icon={it.icon}
          item={it.item}
          route={it.route}    
          onClick={handleClick}
        />
      ))}
    </nav>
  );
};

export default SideNavBar;
