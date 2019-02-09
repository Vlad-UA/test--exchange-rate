// Core
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Instruments
import './AdditionalCurrency.scss';

export default class AdditionalCurrency extends PureComponent {
  handleAddCurrency = (event) => {
    const { addCurrency } = this.props;

    addCurrency(event.target.value);
  };

  render() {
    const { currencies } = this.props;
    return (
      <div className="additional-currency">
        <h2 className="additional-currency__header">Add currency</h2>
        {currencies
          .filter(({ visible }) => !visible)
          .map(({ name }) => (
            <button
              type="button"
              className="additional-currency__button-add"
              key={name}
              value={name}
              onClick={this.handleAddCurrency}
            >
              {name.toUpperCase()}
            </button>
          ))}
      </div>
    );
  }
}

AdditionalCurrency.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  addCurrency: PropTypes.func.isRequired,
};
