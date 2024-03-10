const addProduct = ()=>{
            const productField = document.getElementById('product_name');
            const quantityField = document.getElementById('product_quantity');
            const product = productField.value;
            const quantity = quantityField.value;

            productField.value='';
            quantityField.value='';
            console.log(product, quantity);
            displayProduct(product, quantity);

}

const displayProduct = (product, quantity) => {
const ul = document.getElementById('product-container');
const li = document.createElement('li');
li.innerText = `${product}: ${quantity}`
ul.appendChild(li);
}