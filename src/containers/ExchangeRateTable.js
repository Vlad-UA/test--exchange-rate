// Core
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import { fetchData } from '../actions/exchangeRateActions';

// Components
import ExchangeRateTable from '../components/ExchangeRateTable/ExchangeRateTable';

const mapStateToProps = state => ({
  currencies: state.currencies,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchData,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExchangeRateTable);
