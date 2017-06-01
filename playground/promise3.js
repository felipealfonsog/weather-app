

// Promises
// file for learning and testing 

var somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
  resolve('Hey. It worked!');

   resolve();
   reject('Unable to fulfill promise');
  }, 2500);
});




somePromise.then((message) => {
  console.log('Success: ', message);
}, (errorMessage) => {
  console.log('Error: ', errorMessage);
});
