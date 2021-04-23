export default class Convert {
  static convertMoney() {
    return new Promise (function (resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/647b44663ab379005ab33e25/latest/USD/EUR`;
      request.onload = function () {
        if(this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}