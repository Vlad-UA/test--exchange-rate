// Core
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Components
import ExchangeRateRecord from './ExchangeRateRecord/ExchangeRateRecord';

// Instruments
import './ExchangeRateTable.scss';

export default class ExchangeRateTable extends PureComponent {
  componentDidMount() {
    const { fetchData } = this.props;

    fetchData();

    this.fetchDataTimer = setInterval(fetchData, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.fetchDataTimer);
  }

  handleRefreshExchangeRateRecord = (event) => {
    const { fetchData } = this.props;

    fetchData(event.target.value);
  };

  render() {
    const { currencies } = this.props;

    return (
      <div className="exchange-rate-table">
        <span className="exchange-rate-table__header-cell">Currency</span>
        <span className="exchange-rate-table__header-cell">RUB</span>
        <span className="exchange-rate-table__header-cell">Action</span>
        {currencies
          .filter(currency => currency.visible)
          .map(({ name, exchangeRate, updateTime }) => (
            <ExchangeRateRecord
              key={name}
              name={name}
              exchangeRate={exchangeRate}
              handleRefresh={this.handleRefreshExchangeRateRecord}
              updateTime={updateTime}
            />
          ))}
      </div>
    );
  }
}

ExchangeRateTable.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchData: PropTypes.func.isRequired,
};
