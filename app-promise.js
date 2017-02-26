

const yargs = require('yargs');
const axios = require('axios');

//const geocode = require('./geocode/geocode');
//const weather = require('./weather/weather');

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


// fixed all the problems

  var encodedAddress = encodeURIComponent(argv.address);
  var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`



  axios.get(geocodeUrl).then((response) => {
    if response.data.status === 'ZERO_RESULTS') {
      throw new Error('Unable to fid tha address.');
    }

    var lat = response.data.results[0].geometry.localtion.lat;
    var lng = response.data.results[0].geometry.localtion.lng;
    var weatherURL= `https://api.forecast.io/forecast/4a04d1c42fd9d32c97a2c291a32d5e2d/${lat},${lng}?units=si`;
    console.log(response.data.results[0].formatted_address);
    return  axios.get(weatherURL);
  }).then ((response) => {
    var temperature = response.data.currently.temperature;
    var temperature = response.data.currently.apparentTemperature;

    console.log('it's currently ${temperature}. It feels like ${apparentTemperature}
   }).catch((e) => {
     if (e.code === 'ENOTFOUND') {
       console.log('Unable to connect to API servers.');
     } else {
       console.log('e.message');
     }
  });
