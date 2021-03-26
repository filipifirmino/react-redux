import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateCountries, editCountrie } from "../Actions/countries.action";

const CardDetails = (props) => {
  const editCountry = (props) => {
    props.edit(true, props.country);
  };

  const { country } = props;

  return (
    <div className="container-info">
      <div className="image-card">
        <img src={country.flag} alt="flag" />
      </div>
      <div className="card-details-info">
        <ul>
          <li>
            Country name: <i>{country.name}</i>
          </li>
          <li>
            Capital: <i>{country.capital}</i>
          </li>
          <li>
            Population: <i>{country.population}</i>
          </li>
          <li>
            Area: <i>{country.area}</i>
          </li>
          <li>Top Level Domain: {country.topLevelDomain}</li>
        </ul>
      </div>
      <button
        type="button"
        className="btn-edit"
        onClick={() => editCountry(props)}
      >
        Edit
      </button>
      <Link to={`/`}>
        <button className="btn-edit" type="button" >
            Back
        </button>
      </Link>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  update: (updateCountry) => dispatch(updateCountries(updateCountry)),
  edit: (isEdit, editCountry) => dispatch(editCountrie(isEdit, editCountry)),
});

const mapStateToProps = (state) => ({
  countryList: state.country.countryList,
});

export default connect(mapStateToProps, mapDispatchToProps)(CardDetails);
