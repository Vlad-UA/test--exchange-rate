// Core
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import { addCurrency } from '../actions/exchangeRateActions';

// Components
import AdditionalCurrency from '../components/AdditionalCurrency/AdditionalCurrency';

const mapStateToProps = state => ({
  currencies: state.currencies,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    addCurrency,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdditionalCurrency);
