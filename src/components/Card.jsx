import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="body-card" data-testid="card">
      <Link to={`details/${props.nativeName}`} className="details-link" data-testid="card-link">
        <div className="card-image" id="card">
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
