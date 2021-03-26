import React from "react";
import CardDetails from "../components/CardDetails";
import EditData from '../components/EditData';
import "../App.css";
import { connect } from "react-redux";

const Details = (props) => {
  const { city } = props.match.params;
  const { countryList, isEdit } = props;

  const getDataCountry = (country) => {
    const data = countryList.filter(
      (actual) => actual.nativeName.indexOf(country) !== -1
    );
    return data;
  };
  return (
    <div className="container-body">
      <div className="header">
        <h1>Countries of the world</h1>
      </div>
      <div className="container-details">

        {isEdit === false ?
        getDataCountry(city).map((actual) => (
          <CardDetails
            country={actual}
            key={actual.name}
          />
        ))
      :
        <EditData />
      }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  countryList: state.country.countryList,
  isEdit: state.country.isEdit,
});



export default connect(mapStateToProps)(Details);
