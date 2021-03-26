const INITIAL_STATE = {
    countryList: [],
};

const countryReducer = (state = INITIAL_STATE, action) => {
    const {type, countryList, updateCountry} = action;
    switch(type) {
      case 'ADD_COUNTRIES' :
        return {...state, countryList}
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