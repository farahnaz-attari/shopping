

const products = [];


//Factory funtion for adding products
const addProduct = (id, productImg, productTitle, ProductName, prodctPrice) => {
    const product = {
        id,
        productImg,
        productTitle,
        ProductName,
        prodctPrice
    }
    products.push(product);
};


//Add Products
addProduct("1","./Js/img/1.jpg","DESIGN organic cotton","Mini shirt dress in white","$40.00");
addProduct("2","./Js/img/2.jpg","DESIGN organic cotton","Mini shirt dress in white","$50.00");
addProduct("3","./Js/img/3.jpg","DESIGN organic cotton","Mini shirt dress in white","$60.00");
addProduct("4","./Js/img/4.jpg","DESIGN organic cotton","Mini shirt dress in white","$70.00");
addProduct("5","./Js/img/5.jpg","DESIGN organic cotton","Mini shirt dress in white","$80.00");
addProduct("6","./Js/img/6.jpg","DESIGN organic cotton","Mini shirt dress in white","$90.00");

//fuction for generate product html

const createHtml = (id, productImg, productTitle, ProductName, prodctPrice) => {
    const html = `<div class="col" data-product-code=${id}>
    <div class="card h-100">
      <img src="${productImg}" alt="...">
      <div class="card-body">
        <h5 class="card-title">${productTitle}</h5>
        <p class="card-text">${ProductName}</p>
        <p class="card-text firstPrice">${prodctPrice}</p>
        <input class="cart-quantity-input" type="number" value="1" id="quantity">
         <a href="#tbody" class="btn btn-success add-btn" id=${id}>Add To Bag</a>
      </div>
    </div>
  </div>`;
  return html;

};

//Function for display products on screem
const render = () => {
     // Generate HTML for each product and join
     let productsToRender = "";
     products.forEach((item) => {
         const Newproduct = createHtml(item.id, item.productImg, item.productTitle, item.ProductName, item.prodctPrice);
        productsToRender += Newproduct;
    });
     // Set HTML to render products
     document.getElementById("row").innerHTML = productsToRender;

}

