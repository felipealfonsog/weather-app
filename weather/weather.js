// const request = require('request');
//
//
//
//
// var getWeather = (lat, lng, callback) => {
// request({
//   url: `https://api.darksky.net/forecast/ecd099679a492007358d1ba36b664ebe/${lat},${lng}`,
//   json: true
// }, (error, response, body) => {
//   if (error) {
//     callback("Unable to coneect to server");
//   }  else if (response.statusCode === 400) {
//     callback("Unable to fetch data from Servers");
//   } else if (response.statusCode == 200) {
//     callback(undefined, {
//       temperature: body.currently.temperature,
//       apparentTemperature: body.currently.apparentTemperature
//     });
//     //     console.log(body.currently.temperature);
//   }
//
// });
//
// };
//
// console.log(`it's currently.${weatherResults.temperature}. it feels like ${weatherResults.apparentTemperature}`);
// }
//
//
// module.exports.getWeather = getWeather;


// code as it seems from Andrew

const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.forecast.io/forecast/4a04d1c42fd9d32c97a2c291a32d5e2d/${lat},${lng}?units=si`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Forecast.io server.');
    } else if (response.statusCode === 400) {
      callback('Unable to fetch weather.');
    } else if (response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  });
};

module.exports.getWeather = getWeather;



// end code as it seems form andrew
