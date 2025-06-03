import React from "react";
import "./sideNavBar.css";
import { useLocation, useNavigate } from "react-router-dom";

const NavItem = ({ icon, item, onClick, route, isSelected }) => {
  return (
    <div className={`p-sidebar-navItem ${isSelected ? "selected":""}`} onClick={() => onClick(route)}>
      <span>{icon}</span>
      <span>{item}</span>
    </div>
  );
};

const SideNavBar = ({ items }) => {
  const navigate = useNavigate(); 
  const location = useLocation();
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
          isSelected={location.pathname.startsWith(it.route) && items!==""}
        />
      ))}
    </nav>
  );
};

export default SideNavBar;
