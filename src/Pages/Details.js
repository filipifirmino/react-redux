import React from "react";
import CardDetails from "../components/CardDetails";
import "../App.css";
import { connect } from "react-redux";

const Details = (props) => {
  const { city } = props.match.params;
  const { countryList } = props;

  const getDataCountry = (country) => {
    const data = countryList.filter(
      (actual) => actual.name.indexOf(country) !== -1
    );
    return data;
  };

  return (
    <div className="container-body">
      <div className="header">
        <h1>Countries of the world</h1>
      </div>
      <div className="container-details">
        {getDataCountry(city).map((actual) => (
          <CardDetails
            name={actual.name}
            image={actual.flag}
            capital={actual.capital}
            area={actual.area}
            population={actual.population}
            topLevelDomain={actual.topLevelDomain}
            nativeName={actual.nativeName}
            key={actual.name}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  countryList: state.country.countryList,
});



export default connect(mapStateToProps)(Details);
