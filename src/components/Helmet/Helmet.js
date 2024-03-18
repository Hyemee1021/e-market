import React from "react";

const Helmet = (props) => {
  //changing tab title
  document.title = "E-market -" + props.title;
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
