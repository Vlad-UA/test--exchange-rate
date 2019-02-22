// Core
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';

// Components
import App from './components/App';

const rootEl = document.getElementById('root');
const store = configureStore();

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootEl,
  );
};

render();

// Hot Module Replacement
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render();
  });
}
