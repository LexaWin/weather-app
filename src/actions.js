export const actLoading = () => ({ type: 'LOADING' });
export const actWeather = (value) => ({ type: 'WEATHER', payload: value });
export const actInput = () => ({ type: 'INPUT' });
export const actOnCityClick = () => ({ type: 'ON_CITY_CLICK' });
export const actInputOff = () => ({ type: 'INPUT_OFF' });
export const actSetValue = (value) => ({ type: 'SET_VALUE', payload: value });
