export const ADD_COUNTRIES = 'ADD_COUNTRIES';
export const EDIT_COUNTRIES = 'EDIT_COUNTRIES';
export const UPDATE_COUNTRIES = 'UPDATE_COUNTRIES';

export const addCountries  = (countryList) => (
    { type: ADD_COUNTRIES, countryList }
);

export const editCountrie = (editCountry) => (
    { type: EDIT_COUNTRIES, editCountry }
);

export const updateCountries =  (updateCountry) => (
    { type: UPDATE_COUNTRIES,  updateCountry }
);