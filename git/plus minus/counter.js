const myButton1 = document.querySelector(".button1");
const myButton2 = document.querySelector(".button2");
const valueDisplay1 = document.querySelector(".valueDisplay");

var counter = 0;

function plusMinus (){

    if(myButton2 === "+"){
        counter++;
    }
else if(myButton1 === "-"){
    counter--;
}   

myButton2.innerHTML = counter;
myButton1.innerHTML = counter;

}
myButton1.addEventListener("click" ,plusMinus)
myButton2.addEventListener("click" ,plusMinus)

