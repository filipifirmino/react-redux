import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import "../App.css";
import { connect } from "react-redux";
import { countryAPI } from "../Actions/requestApi";

const Home = (props) => {
  const getCountry = async () => {
    const { countryAPI } = props;
    await countryAPI();
  };

  useEffect(() => {
    getCountry();
  }, []);

  const { countryList } = props;
 

  const [input, setInput] = useState("");
  const [searchContry, setSearchCountry] = useState([]);
  const [feedBack, setFeedBack] = useState("");

  const filterCountry = (input) => {
    const countryFilteredList = countryList.filter(
      (actual) => actual.name.indexOf(input) !== -1
    );
    countryFilteredList.length === 0
      ? setFeedBack("Country not found")
      : setSearchCountry(countryFilteredList);
    setTimeout(setSearchCountry(countryFilteredList), 1000);
  };

  const chooseSource = () => {
    if (searchContry.length !== 0) {
      return searchContry;
    } else {
      return countryList;
    }
  };

  return (
    <div className="container-body">
      <div className="header">
        <h1>Countries of the world</h1>
      </div>
      <div className="search-bar">
        <label htmlFor="search">
          <input
            type="text"
            placeholder="Search your country"
            id="serch"
            className="search-input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button
            type="button"
            className="btn-search"
            onClick={() => filterCountry(input)}
          >
            Search
          </button>
        </label>
      </div>
      <span className="feedBack">{feedBack}</span>
      <div className="container-cards">
        {countryList.length === 0
          ? "Carregando ..."
          : chooseSource().map((actual) => (
              <Card
                nativeName={actual.nativeName}
                name={actual.name}
                image={actual.flag}
                key={actual.name}
                capital={actual.capital}
              />
            ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  countryList: state.country.countryList,
});

const mapDispatchToProps = (dispatch) => ({
  countryAPI: () => dispatch(countryAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
