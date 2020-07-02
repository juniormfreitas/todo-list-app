import React from "react";

const LayoutWrap = ({ children }) => {
  return (
    <div className="container-fluid wrapper">
      <div className="row">{children}</div>
    </div>
  );
};

export default LayoutWrap;
