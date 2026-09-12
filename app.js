// ---Goal----------//
const ageInput = "20"; 
const hasTicket = true; 
const isMember = false; 
const ticketType = "vip"; 
const availableSeats = 5; 

console.log(typeof ageInput);
const age = Number(ageInput);

console.log('Age:',age);
console.log('Type Of age:',typeof age);

const isAdult= age >=18;
console.log(typeof isAdult);
console.log('Is Adult:',isAdult);

// -------------Decide ----------------//



if (isAdult && hasTicket && availableSeats > 0) 
    {
  console.log('User canEnter');
  console.log('Access granted');
} else {
  console.log('Access denied');
}

// ----------Ticket Price-----------//

const canEnter= isAdult && hasTicket && availableSeats >0;
let ticketPrice;

if (canEnter) {
    if  (ticketType==='regular')
         {
            ticketPrice=200;
         }
    else if  (ticketType==='vip')
         {
         ticketPrice=500;
         }
    else if  (ticketType==='student')
         {
         ticketPrice=150;
         }
    else {
        console.log('Unknown ticket type'); 
    } 
    console.log('Entry your choose Base ticket price:',ticketPrice);  
}
else{
    console.log('Entry Unkown');  
}

// ---Member Discount--------------//

let finalPrice;

if (isMember){
  finalPrice= Number(ticketPrice)-50;
     
  if (finalPrice<0)
    {
     finalPrice= ticketPrice  
     console.log('Sorry, although you are member but it lowest than range to discount your final price:',ticketPrice);  
     }else 

      console.log('Great , you have discount! your final price:',finalPrice);    
}
else{
     finalPrice= ticketPrice  
     console.log('sorry you are not Member, you have not any discount your final price:',ticketPrice);  
}

// ----------------Print Summary-------------------//

console.log(`
++++++++++++++++++++++++++++++++++++++++++++++++++++
                 TICKET   SUMMARY
++++++++++++++++++++++++++++++++++++++++++++++++++++
AGE:                          ${age}
Is Adult:                     ${isAdult}
Has ticket:                   ${hasTicket}
Available Seats:              ${availableSeats}
Can Enter:                    ${canEnter}
Ticket Type:                  ${ticketType}
Is Member:                    ${isMember}
----------------------------------------------------
Final Price:                  ${finalPrice}
++++++++++++++++++++++++++++++++++++++++++++++++++++
`
);