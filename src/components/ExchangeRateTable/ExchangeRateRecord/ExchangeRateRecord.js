// Core
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Instruments
import './ExchangeRateRecord.scss';

export default class ExchangeRateRecord extends PureComponent {
  render() {
    const {
      name, exchangeRate, handleRefresh, updateTime,
    } = this.props;

    return (
      <>
        <span className="exchange-rate-record__currency-name">
          {name.toUpperCase()}
        </span>
        <span>{exchangeRate}</span>
        <span>
          <button type="button" onClick={handleRefresh} value={name} className="exchange-rate-record__button-refresh">
            refresh
          </button>
          <span className="exchange-rate-record__refresh-info">{`last refresh: ${updateTime}`}</span>
        </span>
      </>
    );
  }
}

ExchangeRateRecord.propTypes = {
  name: PropTypes.string.isRequired,
  exchangeRate: PropTypes.number.isRequired,
  handleRefresh: PropTypes.func.isRequired,
  updateTime: PropTypes.string.isRequired,
};
