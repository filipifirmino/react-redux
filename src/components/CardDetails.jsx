import React, { useState } from "react";
import { connect } from "react-redux";
import { updateCountries } from "../Actions/countries.action";

const CardDetails = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [dataEdit, setDataEdit] = useState({});
  console.log(isEdit);
  const editCountry = (props) => {
    setIsEdit(true);
    setDataEdit({
      name: props.name,
      image: props.image,
      capital: props.capital,
      population: props.population,
      area: props.area,
      topLevelDomain: props.topLevelDomain,
      nativeName: props.nativeName,
    });
  };

  const updateCountry = () => {
    localStorage.setItem(`${dataEdit.name}`, JSON.stringify(dataEdit));
    props.update(dataEdit);
    setIsEdit(false);
  };
  
  console.log(props.image);
  console.log(dataEdit);
  return (
    <div className="container-info">
      <div className="image-card">
          <img src={props.image} alt="flag" />
      </div>
      <div className="card-details-info">
        {isEdit === false ? (
          <ul>
            <li>
              Country name: <i>{props.name}</i>
            </li>
            <li>
              Capital: <i>{props.capital}</i>
            </li>
            <li>
              Population: <i>{props.population}</i>
            </li>
            <li>
              Area: <i>{props.area}</i>
            </li>
            <li>Top Level Domain: {props.topLevelDomain}</li>
          </ul>
        ) : (
          <form className="form-edit">
            <input
              type="text"
              value={dataEdit.name}
              onChange={(event) =>
                setDataEdit({ ...dataEdit, name: event.target.value })
              }
            />
            <input
              type="text"
              value={dataEdit.capital}
              onChange={(event) =>
                setDataEdit({ ...dataEdit, capital: event.target.value })
              }
            />
            <input
              type="text"
              value={dataEdit.population}
              onChange={(event) =>
                setDataEdit({ ...dataEdit, population: event.target.value })
              }
            />
            <input
              type="text"
              value={dataEdit.area}
              onChange={(event) =>
                setDataEdit({ ...dataEdit, area: event.target.value })
              }
            />
            <input
              type="text"
              value={dataEdit.topLevelDomain}
              onChange={(event) =>
                setDataEdit({ ...dataEdit, topLevelDomain: event.target.value })
              }
            />
          </form>
        )}
      </div>
      <button
        type="button"
        className="btn-edit"
        onClick={() =>
          isEdit === false ? editCountry(props) : updateCountry()
        }
      >
        {isEdit === false ? "Edit" : "Save"}
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  update: (updateCountry) => dispatch(updateCountries(updateCountry)),
});

export default connect(null, mapDispatchToProps)(CardDetails);
