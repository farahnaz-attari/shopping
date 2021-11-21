//List shoping card
const bagSpin =  document.getElementById("bagSpin");
bagSpin.addEventListener('mouseover',event => {
    bagSpin.classList.add('fa-spin');
    
});
bagSpin.addEventListener('mouseout',event => {
    bagSpin.classList.remove('fa-spin');
    
})
let carts= [];

const addCart = (id, productImg, productTitle, ProductName,productQuantity, prodctPrice) => {
    const cart = {
        id,
        productImg,
        productTitle,
        ProductName,
        productQuantity: Number(productQuantity),
        prodctPrice
    }
    carts.push(cart);
};
//Function for html card
const createCardCartHtml = (id, productImg, productTitle, ProductName,productQuantity, prodctPrice) => {
    let price = parseFloat( prodctPrice.replace('$', ''));
    const html =  `
    <tr data-product-code=${id}>
    <th scope="row">${productTitle}</th>
    <td><img class="rounded" src="${productImg}" width="50" height="50"/>
    ${ProductName}</td>
    <td>$${price*productQuantity}</td>
    <td>
    <div class="cart-quantity cart-column">
    <input class="cart-quantity-input border-0 bg-white" type="text" min="1" value=${productQuantity} readonly>
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>
    </td>
  </tr>`;
  return html;
};


// Display Cart Items on screen
const renderCart = () => {  
    // Generate HTML for each cart item and join
    let cartToRender = "";
    carts.forEach((item) => {
        const cart = createCardCartHtml(item.id, item.productImg, item.productTitle, item.ProductName, item.productQuantity, item.prodctPrice);
        cartToRender += cart;
    });
    // Use created HTML to render products using DOM
    document.getElementById("tbody").innerHTML = cartToRender;

    // Calculate and show total cart price
    let totalPrice = 0;
    let totalQuantity = 0;
    carts.forEach((item) => {
        let price = parseFloat( item.prodctPrice.replace('$', ''));
      let productTotal = Number(price*item.productQuantity);
        totalPrice += productTotal;
        totalQuantity += item.productQuantity;
    });
    document.getElementById("cart-total-price").innerHTML = `Total Price: $${totalPrice}`;
    document.getElementById('totalQuantity').innerText = totalQuantity;


    // Save cart to local storage
   
    const cartJson = JSON.stringify(carts);
    localStorage.setItem("carts",cartJson);


    };

  
