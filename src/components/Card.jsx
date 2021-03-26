import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="body-card">
      <Link to={`details/${props.name}`} className="details-link">
        <div className="card-image">
          <img src={props.image} alt="flag" />
        </div>
        <div className="card-info">
          <li className="count">{props.name}</li>
          <li className="cap">{props.capital}</li>
        </div>
      </Link>
    </div>
  );
};

export default Card;
