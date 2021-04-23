import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Convert from './currency-exchanger';

$("button#but").on("click", (event) => {
  event.preventDefault();
  let promise = Convert.convertMoney();
  promise.then(function (response) {
    const body = JSON.parse(response);
    ("#showResult").parseInt(body.converstion_rates.usd);
  });
});