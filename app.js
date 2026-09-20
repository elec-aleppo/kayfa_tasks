

function analyzeRange(start,end){
 if (start>end){
    
    return "Invalid range";
 }else {
     let evencount=0;
     let oddcount=0;
     ///////////
     let sumeven=0;
     let totatNum=0;
   
for ( let i=start; i<=end; i++){
    totatNum +=i;
    if (i % 2===0){
        evencount ++;
        sumeven += i; 

        } else {
        oddcount ++;
            }
      }  
        return(`
        ++++Function Analyse Range++++
        --------------------------------------
        RangeNum [${start}  To  ${end}] :
        EvenCount ${evencount}  ,SumEven ${sumeven}
        TotalNum ${totatNum}  
        --------------------------------------
        `);
      }
    
}
// analyzeRange(1,11);

// console.log(analyzeRange(1, 3));



////////////function countMultiples//////////////////////
function countMultiples(start,end,divisor){
 if (start>end)return 'Invalid range';
 if (divisor === 0 )return 'divisor cannot by zero';
 
let multiplecount=0 ;
      
for ( let i=start; i<=end; i++){
    if (i % divisor===0){ multiplecount ++;}
   
            }
             return multiplecount; 
 }
// analyzeRange(1,11);

// console.log(analyzeRange(1, 3));

const countM = countMultiples(1,10,3);
console.log(`Multipes of number is : ${countM}`);

const resultanalyze = analyzeRange(1,10);
console.log(resultanalyze);