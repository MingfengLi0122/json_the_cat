const request = require("request");
const args = process.argv.slice(2);

const input = args.toString().toLowerCase().slice(0,4);

request(`https://api.thecatapi.com/v1/breeds/search?q=${input}`, (error, response, body) => {
  const data = JSON.parse(body);
  //console.log("JSON data: ", data);
  if (data[0] === undefined) {
    console.log("No infomation fetched!");
  } else {
    console.log(data[0]["description"]);
  }
  if (error) {
    console.error(error);
  }
});
