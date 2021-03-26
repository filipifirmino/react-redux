import React, {useState} from "react";
import { connect } from "react-redux";
import { updateCountries, editCountrie} from "../Actions/countries.action";

const EditData = (props) => {
  
  const { dataEdit, edit, update } = props;
  const [newData, setNewData] = useState(dataEdit)


  const updateCountry = () => {
    localStorage.setItem(`${newData.name}`, JSON.stringify(newData));
    edit(false, newData);
    update(newData);
  };

  return (
    <form className="form-edit container-info">
      <input
        type="text"
        value={newData.name}
        onChange={(event) =>
          setNewData({ ...newData, name:event.target.value})
        }
      />
      <input
        type="text"
        value={newData.capital}
        onChange={(event) =>
            setNewData({ ...newData, capital:event.target.value})
        }
      />
      <input
        type="text"
        value={newData.population}
        onChange={(event) =>
            setNewData({ ...newData, population:event.target.value})
        }
      />
      <input
        type="text"
        value={newData.area}
        onChange={(event) =>
            setNewData({ ...newData, area:event.target.value})
        }
      />
      <input
        type="text"
        value={newData.topLevelDomain}
        onChange={(event) =>
            setNewData({ ...newData, topLevelDomain:event.target.value})
        }
      />
      <button className="btn-edit" type="button" onClick={() => updateCountry()}>
          Save
      </button>
    </form>
    
    
  );
};

const mapDispatchToProps = (dispatch) => ({
  update: (updateCountry) => dispatch(updateCountries(updateCountry)),
  edit: (isEdit, editCountry) => dispatch(editCountrie(isEdit, editCountry)),
});

const mapStateToProps = (state) => ({
  countryList: state.country.countryList,
  isEdit: state.country.isEdit,
  dataEdit: state.country.editCountry,
});

export default connect(mapStateToProps, mapDispatchToProps)(EditData);
