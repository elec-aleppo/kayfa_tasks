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



function handleClick(e){
    btnEl.forEach((btn)=> {
        btn.classList.remove('active');
        
     
        if(e.target.dataset.value === btn.dataset.value){
            btn.classList.add('active');
            tipVal = parseFloat(btn.dataset.value) / 100;
        }
    });
    selectTip.value = "";
    calculate();
}


function validateBill(){
    
    if (inputEl.value.includes(',')){
        inputEl.value = inputEl.value.replace(',', '.');
    }
  
    billVal = parseFloat(inputEl.value) || 0;
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

function inputPeopleVal() {
    peopleVal = parseFloat(peopleEL.value);
    
    if (!peopleVal || peopleVal <= 0) {
        errorEL.innerHTML = "Can't be zero"; 
        peopleVal = 0; 
    } else {
        errorEL.innerHTML = ""; 
    }
    calculate();
}


function calculate(){
   
    let safeBill = isNaN(billVal) || billVal < 0 ? 0 : billVal;
    let safePeople = isNaN(peopleVal) || peopleVal < 1 ? 1 : peopleVal;
    let safeTip = isNaN(tipVal) ? 0 : tipVal;

    if (safePeople >= 1 && safeBill > 0) {
        let tip = (safeBill * safeTip) / safePeople;
        let totalAmount = (safeBill * (safeTip + 1)) / safePeople;

        totalVal[0].innerHTML = '$' + tip.toFixed(2);
        totalVal[1].innerHTML = '$' + totalAmount.toFixed(2);
    } else {
       
        totalVal[0].innerHTML = '$0.00';
        totalVal[1].innerHTML = '$0.00';
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


