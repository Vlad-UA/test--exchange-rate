// Constants
import { ADD_CURRENCY, UPDATE_EXCHANGE_RATE } from '../constants/exchangeRateConstants';

const initialState = [
  {
    name: 'usd',
    exchangeRate: 0,
    visible: true,
    updateTime: '',
  },
  {
    name: 'eur',
    exchangeRate: 0,
    visible: true,
    updateTime: '',
  },
  {
    name: 'cad',
    exchangeRate: 0,
    visible: false,
    updateTime: '',
  },
  {
    name: 'jpy',
    exchangeRate: 0,
    visible: false,
    updateTime: '',
  },
];

export default (state = initialState, action) => {
  let newExchangeRates;

  switch (action.type) {
    case ADD_CURRENCY:
      return state.map(currency => (currency.name === action.payload.currencyName
        ? { ...currency, visible: true }
        : currency));

    case UPDATE_EXCHANGE_RATE:
      newExchangeRates = action.payload.exchangeRates;
      return state.map(currency => ((newExchangeRates[currency.name]) ? {
        ...currency,
        exchangeRate: newExchangeRates[currency.name].inverseRate,
        updateTime: action.payload.updateTime,
      } : currency));

    default:
      return state;
  }
};
