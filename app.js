const inputEl=document.querySelector('#input');
const btnEl=document.querySelectorAll('.btn');
const selectTip=document.querySelector('#selectTip');
const errorEL=document.querySelector('#error');
const peopleEL=document.querySelector('#people');
const totalVal=document.querySelectorAll('.TipAmount');
const resetEL=document.querySelector('.reset');

let billVal=0;
let peopleVal=1;
let tipVal = 0.15;

inputEl.addEventListener("input",validateBill);
selectTip.addEventListener("input",tipCustom);
peopleEL.addEventListener('input',inputPeopleVal);
resetEL.addEventListener('click',handleReset);
// btn //
btnEl.forEach((btn)=> {
    btn.addEventListener('click',handleClick);
})

function handleClick (e){
btnEl.forEach((btn)=> {
    btn.classList.remove('active');


    if(e.target.innerHTML == btn.innerHTML){
     btn.classList.add('active');
     tipVal = parseFloat(btn.innerHTML) / 100;
     console.log(tipVal);
    }
});
     selectTip.value = "";
     calculate();
}
//validate
function validateBill(){
    if (inputEl.value.includes(',')){
        inputEl.value.replace(',','.');
    }
    billVal=parseFloat(inputEl.value);
     calculate();
}
// selectTip//
function tipCustom(){
    tipVal=parseFloat(selectTip.value/ 100);
    btnEl.forEach((btn) => {
btn.classList.remove('active');
    });
    if (selectTip.value !== 0){
        calculate();
    }
}
//set people val//
function inputPeopleVal()
{
    peopleVal = parseFloat(peopleEL.value);
    if(peopleVal <= 0) {
        errorEL.innerHTML = "number must be greater than zero";
       }
    calculate();
    }

// calc//
function calculate(){
    if (peopleVal >=1){
        let tip=(billVal * tipVal)/peopleVal;
        let totalAmount = (billVal*(tipVal+1)/peopleVal);

        totalVal[0].innerHTML = '$'+ tip.toFixed(2);
       console.log(totalVal[0]);
        totalVal[1].innerHTML = '$'+ totalAmount.toFixed(2);
         console.log(totalVal[1]);
    }
}
//reset///
function handleReset(){
    inputEl.value=0.0;
    validateBill();
    btnEl[2].click();
    peopleEL.value=1;
    inputPeopleVal();
     errorEL.textContent = ''; 

}


