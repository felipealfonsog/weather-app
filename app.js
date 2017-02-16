const request = require("request");
const yargs = require("yargs");

const argv = yargs

.options({
a : {
  demand:true,
  alias: 'address',
  describe: 'Address to fetch weather for',
  string: true
}
})

.help()
.alias('help', 'h')
.argv;

console.log("argv");

request({
  url: "http://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20steet%20philadelphia",
  json: true
}, (error, response, body) => {
//  console.log(JSON.stringify(error, undefined, 2));
console.log(`address: ${body.results[0].formatted_address}`);
console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});
