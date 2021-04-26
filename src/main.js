import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
// import Convert from './currency-exchanger';

function getElements(response) {
  if (response.result === "success") {
    const convertedCurrency =
      $("#currencyFrom").val() / response.conversion_rate;

    $("#currencyTo").val(convertedCurrency);
  } else {
    $("#currencyTo").text("Sorry we do not support that currency");
  }
}

$("button#convert").on("click", (event) => {
  event.preventDefault();
  const TO = $("select#to").val();
  const FROM = $("select#from").val();
  let request = new XMLHttpRequest();
  const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${FROM}/${TO}`;

  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      getElements(response);
    }
  };

  request.open("GET", url, true);
  request.send();
});
