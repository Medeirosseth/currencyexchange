import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Convert from './currency-exchanger';

$("button#convert").on("click", (event) => {
  event.preventDefault();
  const usdAmount = $("#inputOne").val();
  let promise = Convert.convertMoney();
  promise.then(function (response) {
    const body = JSON.parse(response);
    const USD = body.conversion_rates.usd;
    console.log(successfull);
    
    $("#showResult").text(usdAmount);

  }, function (error) {
     $("showErrors").text(`There was an error processing your request: ${error}`):
  });
});