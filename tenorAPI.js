const axios = require('axios');
var GphApiClient = require('giphy-js-sdk-core')
client = GphApiClient("hx9IYRwYQqNuPDaw1mNx8xh7M58z22Qs")

// function grab_data() {
//   let apikey = "IGUWRWFHQ1MM";
//   let lmt = 50;
//   let search_term = "cats";

//   // using default locale of en_US

//   let search_url = axios.get("https://api.tenor.com/v1/search?tag=" + search_term + "&key=" +
//     apikey + "&limit=" + lmt)
//     .then(resp => console.log(resp.data.results))


//   let random = Math.floor(Math.random() * 1000);

//   // data will be loaded by each call's callback
//   return search_url;
// }

// grab_data()

// module.exports = grab_data

client.random('gifs', {})
  .then((response) => {
    console.log(response.data.url)
  })
  
/// Random Sticker
client.random('stickers', {})
  .then((response) => {

  })
  .catch((err) => {

  })
