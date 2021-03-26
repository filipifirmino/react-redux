import { addCountries } from './countries.action';

export const countryAPI = () => async (dispatch) => {
  const endPoint = 'https://restcountries.eu/rest/v2/all';
  const response = await (await (await fetch(endPoint)).json());
  dispatch(addCountries(response));
  return response;
};
