const apikey='8tHkAXgQEFtKA99SFytaiw==RHmiahdooLEFOYIW'
const option={
    method:'GET',
    headers:{
        "X-Api-Key":apikey,
    },
}
let joke=document.getElementById('jokes');
let btn=document.getElementById('btn');
const apiURL='https://api.api-ninjas.com/v1/dadjokes?limit=1'
btn.addEventListener('click',async ()=>{
    try{
        joke.innerText="Updating..."
    btn.disabled=true;
    btn.innerText="Loading..."
    const response=await fetch(apiURL,option)
    const data=await response.json();
    const dataJoke=data[0].joke
    btn.disabled=false;
    btn.innerText="Tell me a jokes"
    joke.innerHTML=dataJoke;
    }catch{
        console.log("error")
    }
})