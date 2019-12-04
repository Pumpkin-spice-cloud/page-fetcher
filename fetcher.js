const fs = require('fs');

const request = require('request');

function argvCleanUp(argv) {
  argv.splice(0, 2);
  return argv;
}
const argv = argvCleanUp(process.argv);




request(argv[0], (error, response, body) => {
  fs.appendFile(argv[1], body, err => {
    // console.log(body);
    if (err) throw err
    console.log('html has been saved!')
  })


  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.

});

