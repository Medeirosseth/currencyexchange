import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
// import Convert from './currency-exchanger';

function getElements(response) {
  if (response.main) {
  }
}

$("button#convert").on("click", (event) => {
  event.preventDefault();
  const TO = $("select#to").val();
  const FROM = $("select#from").val();
  console.log(FROM, TO);
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

/////////////////////////////////
// export default class Convert {
//   static convertMoney() {
//     return new Promise (function (resolve, reject) {
//       let request = new XMLHttpRequest();
//       const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${FROM}/${TO}`;
//       request.onload = function () {
//         if(this.status === 200) {
//           resolve(request.response);
//         } else {
//           reject(request.response);
//         }
//       };
//       request.open("GET", url, true);
//       request.send();
//     });
//   }
// }

//////////////////////
///////////////////////
// $("button#convert").on("click", (event) => {
//   event.preventDefault();
//   const TO = $("select#to").val();
//   const FROM = $("select#from").val();

//   let promise = Convert.convertMoney();
//   promise.then(function (response) {
//     const body = JSON.parse(response);
//     alert(body);
//     const currencyEuro = body.conversion_rate;
//     const money = (currencyEuro * usdAmount);

//     $("#showResult").text(money);

//   }, function (error) {
//     $("showErrors").text(`There was an error processing your request: ${error}`);
//   });
// });
