const products = [
    { name: "Smartphone", price: "$699" },
    { name: "Laptop", price: "$999" },
    { name: "Headphones", price: "$199" }
];

function showProducts() {
    const productSection = document.getElementById("products");
    productSection.innerHTML = "";
    products.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `<h3>${product.name}</h3><p>Price: ${product.price}</p>`;
        productSection.appendChild(div);
    });
}
