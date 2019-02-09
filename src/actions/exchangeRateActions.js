import { ADD_CURRENCY, UPDATE_EXCHANGE_RATE } from '../constants/exchangeRateConstants';

export function addCurrency(currencyName) {
  return (dispatch) => {
    dispatch({
      type: ADD_CURRENCY,
      payload: { currencyName },
    });
  };
}

const CURRENCY_ALL = 'CURRENCY_ALL';
export function fetchData(updateCurrencyName = CURRENCY_ALL) {
  return async (dispatch) => {
    try {
      const response = await fetch('http://www.floatrates.com/daily/rub.json');
      let exchangeRates = await response.json();
      const currentDate = new Date();
      const updateTime = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

      if (updateCurrencyName !== CURRENCY_ALL) {
        exchangeRates = { [updateCurrencyName]: exchangeRates[updateCurrencyName] };
      }

      dispatch({
        type: UPDATE_EXCHANGE_RATE,
        payload: { updateTime, exchangeRates },
      });
    } catch (ex) {
      console.error(
        'Hi Dude!, out star engineers working on this problem, see you soon :) ',
        ex.message,
      );
    }
  };
}
