const myText1 = document.querySelector(".billTypeText");

const myButton1 = document.querySelector(".addToBillBtn");

const SmallTotalElem = document.querySelector(".SmallTotalOne");

const MediumTotalElem = document.querySelector(".MediumTotalOne");

const LargeTotalElem = document.querySelector(".LargeTotalOne");

const totalCostElem = document.querySelector(".totalOne");

var SmallTotal = 0;
var MediumTotal = 0;
var LargeTotal = 0;

function textBillTotal() {

    var billTypeEntered = myText1.value.trim();

    if (billTypeEntered.toLowerCase() === "small") {
        SmallTotal += 99;
    }

    else if (billTypeEntered.toLowerCase() === "medium"){
        MediumTotal += 120;
    } 
   else if (billTypeEntered.toLowerCase() === "large") {
        LargeTotal += 179;
    }

    SmallTotalElem.innerHTML = SmallTotal.toFixed(2);
    MediumTotalElem.innerHTML = MediumTotal.toFixed(2);
    LargeTotalElem.innerHTML = LargeTotal.toFixed(2);
    var totalCost = SmallTotal + MediumTotal + LargeTotal;

    totalCostElem.innerHTML = totalCost.toFixed(2);

    if (totalCost >= 500) {
        totalCostElem.classList.add("danger");
    }
    else if (totalCost >= 1000) {
        totalCostElem.classList.add("warning");
    }

}


myButton1.addEventListener("click",textBillTotal);

