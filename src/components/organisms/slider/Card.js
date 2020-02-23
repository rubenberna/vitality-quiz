import React from "react";
import PropTypes from "prop-types";

const Card = ({ property }) => {
  const { index, price, description, name, pic } = property;
  console.log(property);
  return (
    <div id={`card-${index}`} className="cards">
      <img src={pic} alt={name} />
      <div className="details">
        <span className="index">
          {index + 1}
        </span>
        <p className="location">
          {name}
          <br />
          {description}
        </p>
        <ul className="features">
          <li className="icon-car">
            Price <span>€</span>
            {price}{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

Card.propTypes = {
  property: PropTypes.object.isRequired
};

export default Card;
