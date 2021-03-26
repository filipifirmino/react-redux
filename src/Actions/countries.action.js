export const ADD_COUNTRIES = 'ADD_COUNTRIES';
export const EDIT_COUNTRIES = 'EDIT_COUNTRIES';
export const UPDATE_COUNTRIES = 'UPDATE_COUNTRIES';
export const EDITING_COUNTRIES = 'UPDATE_COUNTRIES';

export const addCountries  = (countryList) => (
    { type: ADD_COUNTRIES, countryList }
);

export const editCountrie = (isEdit ,editCountry) => (
    { type: EDIT_COUNTRIES, editCountry, isEdit }
);

export const updateCountries =  (updateCountry) => (
    { type: UPDATE_COUNTRIES,  updateCountry }
);