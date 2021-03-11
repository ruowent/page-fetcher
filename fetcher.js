const url = process.argv[2];
const file = process.argv[3];
const request = require('request');
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const getData = (callback) => {
  
  request(url, (error, response, data) => {
    callback(data);
  });
};

const download = (a) => fs.writeFile(file, a, (error) => {
  if(!error) {
      fs.stat(file, (err, stat) => {
    
      console.log(`Downloaded and saved ${stat.size} bytes to ${file}`)
     });
  }
});

getData(download);
