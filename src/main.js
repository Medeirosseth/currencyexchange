import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Convert from './currency-exchanger';

$("button#convert").on("click", (event) => {
  event.preventDefault();
  const usdAmount = $("#inputOne").val();
  const TO = $("select#currencyFrom").val()
  const FROM = $("select#currencyTO").val()
  let promise = Convert.convertMoney();
  promise.then(function (response) {
    const body = JSON.parse(response);
    const currencyEuro = body.conversion_rate;
    const money = (currencyEuro * usdAmount);
   
    $("#showResult").text(money);

  }, function (error) {
    $("showErrors").text(`There was an error processing your request: ${error}`);
  });
});