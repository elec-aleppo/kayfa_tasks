const products = [
{ id: 1, name: 'Laptop', category: 'electronics', price: 25000,
stock: 4 },
{ id: 2, name: 'Mouse', category: 'electronics', price: 350, stock:
0 },
{ id: 3, name: 'T-Shirt', category: 'clothes', price: 400, stock:
12 },
{ id: 4, name: 'Jacket', category: 'clothes', price: 1800, stock:
2 },
{ id: 5, name: 'Rice 5kg', category: 'food', price: 220, stock:
30 },
{ id: 6, name: 'Coffee', category: 'food', price: 300, stock: 0 },
{ id: 7, name: 'Headphones', category: 'electronics', price: 1500,
stock: 7 },
{ id: 8, name: 'Shoes', category: 'clothes', price: 2200, stock:
5 },
];

    
let data = products.map(p=> ({...p}));


//state data
function setData(newData) {
  data = newData;
  render(data);
}
function render(data){
//elements
const summary = document.getElementById("summary");
const list=document.getElementById("list");
list.innerHTML='';



 //display product data on page
    data.forEach( (product)=> {
    const li = document.createElement("li");
    li.textContent = `${product.id}- ${product.name}- ${product.price} EGP- stock: ${product.stock}`;
     
    if (product.stock=== 0) {
    li.classList.add("fail");
  }
//   add button +1
   const btnPlus1 = document.createElement("button");
   btnPlus1.textContent = "+1";
   btnPlus1.addEventListener('click',() => {
   const newproduct = data.find(p => p.id=== product.id);
   newproduct.stock += 1;
   setData(data);
});

  li.appendChild(btnPlus1);

// sell
   const btnsell = document.createElement("button");
   btnsell.textContent = "Sell";
   btnsell.addEventListener('click',() => {
   const newproduct = data.find(p => p.id=== product.id);
   if (newproduct.stock >0){
   newproduct.stock -= 1;
   setData(data);
   }
});

  li.appendChild(btnsell);

  //remove
   const btnremove = document.createElement("button");
   btnremove.textContent = "Remove";
   btnremove.addEventListener('click',() => {
   if(confirm(`Remove : ${product.name}?`)){
     const newdata = data.filter(p => p.id !== product.id);
     setData(newdata);
   }
    
});
 li.appendChild(btnremove);
    list.append(li);
  });

// summary
const count=data.length;
const totalvalue=data.reduce((sum,product)=> sum+(product.price*product.stock),0);
// State Stock
let status_stock = "";
if (count ===0) {
status_stock= "No products";
} else if (data.every(product => product.stock>0))
{status_stock = "Everything is in stock"}
else { status_stock = "Some products are out of stock"}

let highExpensiveName = "No Products";
if (count > 0) {
  const mostExpensiveProduct = data.reduce((maxProduct, product) => {
    return product.price > maxProduct.price ? product : maxProduct;
  }, data[0]);
  highExpensiveName = mostExpensiveProduct.name;
}

summary.innerHTML=`count: ${count} - total stock value:${totalvalue} EGP - ${status_stock} - Most expensive product: ${highExpensiveName}`;

const btnAll =document.getElementById ("btn-all");
const btnInstock =document.getElementById ("btn-instock");
const btnCheap =document.getElementById ("btn-cheap");
const btnExpensive =document.getElementById ("btn-expensive");
const btnSort =document.getElementById ("btn-sort");
const btnDiscount =document.getElementById ("btn-discount");
const btnReset =document.getElementById ("btn-reset");

// functions
// Max
function maxprice(Nu){
return (product) => product.price <= Nu;
}

// Min
function minprice(Nu){
return (product) => product.price >= Nu;
}

// on click button
btnAll.addEventListener('click', () =>{
    setData(products.map(p => ({...p})));
});

btnInstock.addEventListener('click', () => {
    setData(products.filter(product => product.stock>0));
});

btnCheap.addEventListener('click',()  => {
    setData(products.filter(maxprice( 500)));
});

btnExpensive.addEventListener('click',() => {
    setData(products.filter(minprice(2000)));
});

//sort
btnSort.addEventListener("click", () => {
  setData(data.toSorted((a, b) => a.price - b.price));
});

//discount 10%
btnDiscount.addEventListener('click',() =>{
const newData = data.map(product => {
    const newprice =Math.max(50,product.price * 0.9);
    return{
        ...product,
        price:newprice
    };
});
setData(newData)    ;
});

//reset
btnReset.addEventListener("click", () => {
    setData(products.map(p => ({...p})));   
    
    const categoryfilter = document.getElementById("category-filter");
    if (categoryfilter) {
        categoryfilter.value = "all"; 
    }
    
    const productCategory = document.getElementById("product-category");    
    if (productCategory) {
        productCategory.value = "";   
    }

    const form = document.getElementById("add-product-form");
    if (form) {
        form.reset();
    }
});
}
render(data);

const form= document.getElementById("add-product-form");
const errorMsg= document.getElementById("msg-error");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name= document.getElementById("product-name").value.trim();
    const category =document.getElementById("product-category").value;
    const price = Number(document.getElementById("product-price").value);
    const stock= Number(document.getElementById("product-stock").value);
      let error = "";

       
// validation
 if (name.length<3){
    error= "Name is required and at least 3 characters"
 }
 else if(products.some (p => p.name.toLowerCase() === name.toLowerCase()) ){
  const existing  = products.find(p=>p.name.toLowerCase()=== name.toLowerCase())
 error= `${existing.name} already exists (id ${existing.id})`;
}
 else if (category===""){
     error = "Category must be chosen";

 }else if(isNaN(price) || price <= 0){
    error= "Price must be a number more than 0";
 }else if(isNaN(stock) || stock <0 || stock >1000 ){
    error = "Stock must be a number from 0 to 1000";
 }

  if (error) {
        errorMsg.textContent = error;
        errorMsg.style.color = "red";
        return; 
    }

    //add id
    errorMsg.textContent = "";
    const newId = data.length > 0 ? Math.max(...data.map(p => p.id)) + 1 : 1;
    const newProduct = {
        id: newId,
        name: name,
        category: category,
        price: price,
        stock: stock
    };
    products.push(newProduct);
    setData([...data, newProduct]);
    form.reset();
});

//all categoery
 const categoryfilter = document.getElementById("category-filter");
    if (categoryfilter) {
        categoryfilter.addEventListener("change", (e) => {
        const selectCategory = e.target.value;
        
        if (selectCategory === "all") {
            setData(products.map(p => ({ ...p })));
        }else {
            setData(products.filter(product => product.category === selectCategory));
        }
    }); 
} 
