import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';

ReactDOM.render(
  <React.StrictMode>
    <App
      offersList = {offers} //передаем моки
      reviewsList = {reviews}
    />
  </React.StrictMode>,
  document.getElementById('root'));
