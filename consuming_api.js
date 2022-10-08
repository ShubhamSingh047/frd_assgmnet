
// api url
console.time("timer");
const api_url1 = fetch("https://api.publicapis.org/entries");
const api_url2 = fetch("https://catfact.ninja/fact");

const allData = Promise.all([api_url1,api_url2]);
console.timeEnd("timer")
allData.then((res)=>console.log(res));