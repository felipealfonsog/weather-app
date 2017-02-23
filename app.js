// const request = require("request");
// const yargs = require("yargs");
// const geocode = require('./geocode/geocode');
// const weather = require('./weather/weather');
// const argv = yargs
//
// .options({
// a : {
//   demand:true,
//   alias: 'address',
//   describe: 'Address to fetch weather for',
//   string: true
// }
// })
//
// .help()
// .alias('help', 'h')
// .argv;
//
//
// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(results.address);
//     weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
//       if (errorMessage) {
//         console.log(errorMessage);
//       } else {
//         console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
//       }
//     });
//   }
// });


// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//
// if (errorMessage) {
//   console.log(errorMessage);
// } else {
// //   console.log(JSON.stringify(results, undefined, 2));
// console.log(results.address);
// weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
//   if (errorMessage) {
//          console.log(errorMessage);
//        } else {
//          console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
//        }
// });
// }
//
// });


//
// https://api.darksky.net/forecast/APIKEY/LATITUDE,LONGITUDE,TIME.
//
// my key api : ecd099679a492007358d1ba36b664ebe
//





// code as it seems from Andrew - working properly, only with the issue that is not showing C° cause it's showing F° in my debian linux machine
//

const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(results.address);
    weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
      if (errorMessage) {
        console.log(errorMessage);
      } else {
        console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
      }
    });
  }
});

//

// end code as it seems from andrew
