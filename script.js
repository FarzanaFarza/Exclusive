const categoryData = [
    {
        id: 1,
        name: "Product 1",
        image: "Images/Category-CellPhone.svg",
        category: "Phones"
    },
    {
        id: 2,
        name: "Product 2",
        image: "Images/Category-Computer.png",
        category: "Computers"
    },
    {
        id: 3,
        name: "Product 3",
        image: "Images/Category-SmartWatch.svg",
        category: "Smartwatch"
    },
    {
        id: 4,
        name: "Product 4",
        image: "Images/Category-Headphone.png.svg",
        category: "HeadPhones"
    },
    {
        id: 5,
        name: "Product 5",
        image: "Images/Category-Gamepad.svg",
        category: "Gaming"
    },
    {
        id: 6,
        name: "Product 6",
        image: "Images/Category-Camera.png",
        category: "Camera"
    },
];

const productContainer = document.querySelector(".category-section");

//display all dynamic data
window.addEventListener("DOMContentLoaded", () => {
    let displayData = categoryData.map(function (cat_items) {
        return `<div class="category-section">
                    <ul>
                    <a href="#">
                        <li>
                            <div class="img">
                                <img src="${cat_items.image}" alt="" />
                            </div>
                            <h5><a href="#">${cat_items.category}</a></h5>
                        </li>
                    </a>
                    </ul>
                </div>`;
    });
    displayData = displayData.join("");
    productContainer.innerHTML = displayData;

    console.log(displayData);
});





const productData = [
    {
        id : 1,
        image : "Images/Cart.png",
        name : "Breed Dry Dog Food",
        price : "$100",
        rating : "Images/Frame 566 (3).png"
    },
    {
        id : 2,
        image : "Images/Dslr.png",
        name : "CANON EOS DSLR Camera",
        price : "$360",
        rating : "Images/Frame 566 (4).png"
    },
    {
        id : 3,
        image : "Images/Cart (2).png",
        name : "ASUS FHD Gaming Laptop",
        price : "$700",
        rating : "Images/Frame 566 (4).png"
    },
    {
        id : 4,
        image : "Images/Cart(4).png",
        name : "Curology Product Set",
        price : "$500",
        rating : "Images/Frame 566 (5).png"
    },
    {
        id : 5,
        image : "Images/car.png",
        name : "Kids Electric Car",
        price : "$960",
        rating : "Images/Frame 566 (1).png",
        color : "Images/Colour Chnage.png"
    },
    {
        id : 6,
        image : "Images/Cart (3).png",
        name : "Jr.Zoom Soccer Cleats",
        price : "$1160",
        rating : "Images/Frame 566 (6).png",
        color : "Images/Colour Chnage (1).png"
    },
    {
        id : 7,
        image : "Images/Cart (4).png",
        name : "JGP11 Shooter USB GamePad",
        price : "$660",
        rating : "Images/Frame 566 (2).png",
        color : "Images/Colour Chnage (2).png"
    },
    {
        id : 8,
        image : "Images/Cart (5).png",
        name : "Quilted Satin Jacket",
        price : "$660",
        rating : "Images/Frame 566 (6).png",
        color : "Images/Colour Chnage (3).png"
    },
];

const Container = document.querySelector('.container-products');

//display all dynamic data
window.addEventListener('DOMContentLoaded', () => {
    let displayData = productData.map(function(product_items){
        return `<a href="#" class="product-link">
                    <div class="container-products">
                        <div class="products">
                            <div class="pr-img">
                                <img src="${product_items.image}" alt="Product Image" />
                                <div class="hover-button">
                                    <button class="add-to-cart">Add to Cart</button>
                                </div>
                            </div>
                            <div class="content">
                                <h3 class="title">${product_items.name}</h3>
                                <p class="price">${product_items.price}</p>
                                <img src="${product_items.rating}" alt="" />
                            </div>
                        </div>
                    </div>
                </a>`;
    });
    displayData = displayData.join("");
    Container.innerHTML = displayData;

    console.log(displayData);
})