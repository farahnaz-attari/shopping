
// Load/render cart on page refresh/load
if(localStorage.getItem('carts')){
    // console.log('inside if')
    let loadCart = localStorage.getItem('carts');
    carts=JSON.parse(loadCart);
    renderCart();

}
// Render products page
render();
const total_Cost = document.querySelector('#total-Cost');
let total =0;



//Adding card to table
const btnAdd = (event) => {
    if(event.target.classList.contains('add-btn')){
        //Create table row
        const buttonClicked = event.target;
        const paretnt = buttonClicked.parentElement.parentElement.parentElement;
        const cardId = Number(paretnt.dataset.productCode);
         // Get target quantity from 
         const inputQuantity = event.target.parentElement.querySelector("input");
         const targetProductQuantity = inputQuantity.value;
         
        products.forEach(item => {
            if(item.id == cardId){
                let needToAddProduct = true;
                // If product is in cart, add quantity and update total price
                carts.forEach((cartItem) => {
                    if(cardId == cartItem.id) {
                        cartItem.productQuantity += Number(targetProductQuantity);
                        cartItem.productPrice = Number((cartItem.productPrice*cartItem.productQuantity)).toFixed(2);
                        needToAddProduct = false;
                    }
                });
                if(needToAddProduct){
                addCart(item.id, item.productImg, item.productTitle, item.ProductName,targetProductQuantity, item.prodctPrice);
                }
                renderCart();
            }
            
        }); 
    }
   
}


 const row = document.getElementById("row");
 row.addEventListener('click',btnAdd);

 
// Remove Cart Button
document.getElementById("tbody").addEventListener("click", (event) => {
    // Check when Remove Button is pressed
    if(event.target.classList.contains("btn-danger")){
        // Get product code from clicked product
        const buttonClicked = event.target;
        console.log(buttonClicked)
        const paretnt = buttonClicked.parentElement.parentElement.parentElement;
        console.log(paretnt)
        const cardId = Number(paretnt.dataset.productCode);
        console.log(cardId)
        // Loop through cart to find the product to remove
        carts.forEach((cartItem, index) => {
            console.log(cartItem.id)
            // Remove product from cart array
            if(cartItem.id == cardId) {
                carts.splice(index, 1);

            };
        });
        
        // Re-render to update cart
        renderCart();
       
    };
});

 