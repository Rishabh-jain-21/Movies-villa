import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import App from './components/App';
import movies from './reducer';

const store = createStore(movies);
console.log(store);
// console.log(store.getState());

// store.dispatch({
//   type: "ADD_MOVIES",
//   movies: [{ name: "superman" }],
// });
// console.log(store.getState());
ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);
