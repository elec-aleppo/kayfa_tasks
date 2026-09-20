///products////
const products=[
   {
    id:1,
    name:'hard ssd pc',
    category:'Electronics',
    price:200,
    inStock: true
   },

   {
    id:2,
    name: 'Pouder',
    category:'Beauty',
    price:700,
    inStock: true
   },

   {
    id:3,
    name: 'JavaScript',
    category:'Books',
    price:150,
    inStock: false
   },

   {
     id:4,
    name :'Mobile',
    category:'Electronics',
    price:950,
    inStock:true
   },

   {
    id:5,
    name: 'Orange',
    category:'Fruits',
    price:127,
    inStock:false
   },

];

console.log(products);
///////////////product list//////////
const firstname= products[0].name;
const lastname = products[products.length-1].name;
const numberProducts=products.length;

console.log(`FirstNameProduct is: ${firstname}`);
console.log(`LastNameProduct is: ${lastname}`);
console.log(`NumbderOfProduct is: ${numberProducts}`);

for (let i=0; i<products.length;i++){
    const product =products[i];
     console.log(`
      ${product.id}- ${product.name}:${product.price}$-(${product.category})  
        `) ;
}

//////selected filters///////
const selectedCategories = new Set();

selectedCategories.add('Electronics');
selectedCategories.add('Books');
selectedCategories.add('Beauty');

//add//
selectedCategories.add('Beauty');
//print//

console.log('The Set :', selectedCategories);
// print size//

console.log('The Size of  Set :', selectedCategories.size);

// const checkCat='Electronics';
console.log(`Is 'Electronics' selected ?`, selectedCategories.has('Electronics'));
console.log(`Is 'Fruits' selected ?`, selectedCategories.has('Fruits'));


//////create user//////
const currentUser = {
    id:100 ,
    name:'Ranam Maktabi',
    email:'Ranam.maktabi@gmail.com',
    address:{
        city:'Aleppo',
        code:'00963',
        country:'Syria'
    }
}

const usercity=currentUser.address.city;
console.log(`Username : ${currentUser.name} , City : ${usercity}`);

////shopping  cart///////
const cartQuantity = new Map();

cartQuantity.set('1',2);
cartQuantity.set('2',4);
cartQuantity.set('3',3);
console.log('quantity of 1 :', cartQuantity.get('1'));
console.log('Is a3 exits?',cartQuantity.has('3'));
console.log('cart Quantity_size:',cartQuantity.size);



///// cart Total/////


function calculateCartTotal(products,cartQuantity){
let total=0;
for (const product of products){
    const quantity =cartQuantity.get(String(product.id)) ?? 0;
    total += product.price * quantity;
}
    return total;
}
const gtotal= calculateCartTotal(products,cartQuantity);
console.log('Cart_Total:', gtotal);