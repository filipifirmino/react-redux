const INITIAL_STATE = {
    countryList: [],
    isEdit: false,
};

const countryReducer = (state = INITIAL_STATE, action) => {
    const {type, countryList, updateCountry, isEdit, editCountry} = action;
    switch(type) {
      case 'ADD_COUNTRIES' :
        return {...state, countryList}
      case 'EDIT_COUNTRIES':
        return {...state, isEdit, editCountry}
      case 'UPDATE_COUNTRIES': 
        return {...state, countryList: [...state.countryList].map((actual) => {
          if(actual.nativeName === updateCountry.nativeName) {
            return updateCountry
          }
          return actual
        }) }
      default:
       return state;
    }
}

export default countryReducer;