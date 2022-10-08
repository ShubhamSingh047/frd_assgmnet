
// api url
const api_url = "https://jsonplaceholder.typicode.com/posts/1";
  

//Method 1
// Defining async function
// async function getapi(url) {
//     let start = new Date().getTime();
//     const response = await fetch(url);
//     var data = await response.json();
//     console.log('total response time ', new Date().getTime()-start);
//     console.log(data);
// }
// // Calling that async function
// getapi(api_url);

//Method 2
async function getapi(url) {
    console.time("timer")
    let start = new Date().getTime();
    const response = await fetch(url);
    var data = await response.json();
    console.timeEnd("timer")
    console.log(data);
}
// Calling that async function
getapi(api_url);