const fetch = require('node-fetch');

const telNo = document.getElementById('telNo').value;
const searchBtn = document.getElementsByClassName('search-btn');
const requestUrl = "https://script.google.com/macros/s/AKfycbx9oiaso0c1NEXy4q6wO8rIxz-m3Ot2MkPze9m-7oO8bhmFlTNIfLiB801kxUJQcDI/exec";
requestUrl.search = new URLSearchParams({
  status: "select",
  phone: telNo
})

// console.log('telNo', telNo);
function onSearch() {
  console.log('telNo');
  fetch(requestUrl)
    .then(data => data)
    .catch(error => console.log('error', error))
}
