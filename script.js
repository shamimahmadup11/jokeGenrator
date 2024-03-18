// document.addEventListener('DOMContentLoaded', function() {
//     let para = document.getElementById("jokes");
//     let btn = document.querySelector("#btn");
//     console.log(para, btn);

//     // Your other code goes here
// });


let para = document.getElementById("jokes");
let btn = document.querySelector("#btn");

const apiKey = "pMt8FL6tFhj4Se1e1tWPew==wXzO3ofCQkD60c3C";

const options = {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey,
    },
  };

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";


async function printjokes(){
    try{
        para.innerText ="Updating...";
        btn.disabled =true;
        btn.innerText ="Loading...";
        const response = await fetch(apiURL,options);
        const data = await response.json();

        btn.disabled = false;
        btn.innerText ="Tell me a joke";
        console.log(data);

        para.innerText=data[0].joke;
    }
    catch (error){
        para.innerText = "An error happened, try again later";
    btn.disabled = false;
    btn.innerText = "Tell me a joke";
    console.log(error);
    }
}

   
btn.addEventListener('click',printjokes)