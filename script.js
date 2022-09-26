const bill = document.querySelector('#billTotal');
const tips = document.querySelectorAll('.tipAmount');
const customTip = document.querySelector('#customTip');
const otherTip = document.querySelector('#otherTip');
const tax = document.querySelector('#tax');
const people = document.querySelector('#people');
const billTotal = document.querySelector('#displayMoney1');
const personalBillTotal = document.querySelector('#displayMoney2');

bill.addEventListener('input', setBillTotal);
tips.forEach(select=>{
    select.addEventListener('click', setTip);
})
customTip.addEventListener('click',setTip);
otherTip.addEventListener('input', setCustom);
otherTip.addEventListener('click', setCustom);
tax.addEventListener('input', setTax);
people.addEventListener('input', setPeople);

let billValue = 0;
let tipAmount = 0;
let taxAmount = 0;
let peopleAmount = 1;
let total = 0;
let perPerson = 0;
function setBillTotal(){
    billValue= parseFloat(bill.value);
    calculateSplit();
}

function setTip() {
    tipAmount=this.value;
    calculateSplit()
}
function setCustom(){
    customTip.value=otherTip.value;
    tipAmount=customTip.value;
    calculateSplit()
}
function setTax(){
    taxAmount = tax.value;
    calculateSplit()
}
function setPeople(){
    peopleAmount = people.value;
    calculateSplit()
}


function calculateSplit(){
    total = billValue*(1+tipAmount*.01)*(1+taxAmount*.01);
    billTotal.innerHTML = `$ ${(Math.round(total * 100) / 100).toFixed(2)}`;
    perPerson= total/peopleAmount;
    personalBillTotal.innerHTML = `$ ${(Math.round(perPerson * 100) / 100).toFixed(2)}`;
    // test();
}
function test(){
    console.log(billValue);
    console.log(tipAmount);
    console.log(taxAmount);
    console.log(peopleAmount);
    console.log(total);
    console.log(perPerson);
}

selectRadio = () => {
    var radio = document.getElementById("customTip");
    radio.checked = true;
}