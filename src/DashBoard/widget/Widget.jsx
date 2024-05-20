import React from "react";
import "./widget.css";

const CustomWidget = ({ title, link, count, icon, onLinkClick }) => {
  const handleClick = () => {
    if (onLinkClick) {
      onLinkClick();
    }
  };

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{title}</span>
        <span className="counter">{count}</span>
      </div>
      <div className="right">
        {icon}
        <span className="link" onClick={handleClick}>{link}</span>
      </div>
    </div>
  );
};

export default CustomWidget;
