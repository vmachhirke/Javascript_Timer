const start = document.querySelector("#start");

let hours = document.querySelector("#hours");
let minut = document.querySelector("#minut");
let second = document.querySelector("#second");
let runtime;
let timeCalculation = ()=>{
    start.addEventListener('click' , (event)=>{
    
     runtime=setInterval(()=>{
            let d = new Date();
            let currentHours = d.getHours();
            let currentMinut = d.getMinutes();
            let currentSecond = d.getSeconds();
            console.log(currentSecond);
            hours.innerHTML=currentHours;
            minut.innerHTML=currentMinut;
            second.innerHTML=currentSecond;

        },1000) 
        const stop = document.querySelector("#stop").addEventListener('click' ,(event)=>{
            clearInterval(runtime)
        });
    });

}
timeCalculation();

const clear = document.querySelector("#clear").addEventListener("click" , (event)=>{
    clearInterval(runtime)
    hours.innerHTML="00";
    minut.innerHTML="00";
    second.innerHTML="00";
})

