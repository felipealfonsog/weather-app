// const request = require('request');
//
//   var geocodeAddress = (address, callback) => {
//
//   var encodedAddress = encodeURIComponent(address);
//
//   request({
//     url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
//     json: true
//   }, (error, response, body) => {
//   //  console.log(JSON.stringify(error, undefined, 2));
//       if (error) {
//         callback('Unable to connect to Google Servers');
//         console.log("Unable to connect to Google Servers.");
//       } else if (body.status == "ZERO_RESULTS") {
//
//         console.log("Unable to find the address.");
//       } else if (body.status == "OK"){
//         callback(undefined, {
//           address: body.results[0].formatted_address,
//           Latitude: body.results[0].geometry.location.lat,
//           Longitude: body.results[0].geometry.location.lng
//         })
//         console.log(`Address: ${body.results[0].formatted_address}`);
//         console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
//         console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
//       }
//
//   });
//
// };
//
// module.exports.geocodeAddress = geocodeAddress;


// code from Andrew

const request = require('request');

var geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Google servers.');
      callback();
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Unable to find that address.');
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    }
  });
};

module.exports.geocodeAddress = geocodeAddress;


// end code from andrew
