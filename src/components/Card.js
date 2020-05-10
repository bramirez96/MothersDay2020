import React from "react";

const Card = (props) => {
  const { img } = props;
  return (
    <div className="Card">
      <img src={img} alt="alt" />
    </div>
  );
};

export default Card;
