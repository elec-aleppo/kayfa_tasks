
const customername=' Sara ';
const cleanName = customername.trim();

const Booktitle='JavaSgript Basics';
const Bookprice = 150;
const quantityIn = '3';
let quantity = Number(quantityIn);
const shippingcost=30;
console.log('customername:', customername);
console.log('Cleancustomername:', cleanName);
console.log('Booktitle:',Booktitle);
console.log('Bookprice:',Bookprice);
console.log( 'quantityIn:',quantityIn,'+ type:', typeof quantityIn);
console.log( 'quantity:',quantity,'+ type:', typeof quantity);

let subtotal=Bookprice*quantity;
//--cost book before shipping--//
console.log('subtotal:',subtotal);
//--cost book after shipping--//
let total=subtotal+shippingcost;
console.log('total:',total.toFixed(2));
// -----Backtick--------//

const receipt = `
*********************************
             Book Order
*********************************          
Customer Name : ${cleanName}
Book Title : ${Booktitle}
Unit Price : $${Bookprice.toFixed(2)}
Quantity : ${quantity}
---------------------------------
Subtotal : $${subtotal.toFixed(2)}
Shipping : $${shippingcost.toFixed(2)}
---------------------------------
Total : $${total.toFixed(2)}
*********************************
`;
console.log(receipt);

