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
    {
        id : 9,
        image : "Images/Frame 570.png",
        name : "HAVIT HV-G92 Gamepad",
        price : "$120",
        rating : "Images/Frame 566 (7).png"
    },
    {
        id : 10,
        image : "Images/Frame 570 (1).png",
        name : "AK-900 Wired Keyboard",
        price : "$960",
        rating : "Images/Frame 566 (4).png"
    },
    {
        id : 11,
        image : "Images/Frame 570 (2).png",
        name : "IPS LCD Gaming Monitor",
        price : "$370",
        rating : "Images/Frame 566 (1).png"
    },
    {
        id : 12,
        image : "Images/speaker.png",
        name : "RGB liguid CPU Cooler",
        price : "$160",
        rating : "Images/Frame 566 (2).png"
    },
    {
        id : 13,
        image : "Images/Cart.png",
        name : "Breed Dry Dog Food",
        price : "$100",
        rating : "Images/Frame 566 (3).png"
    },
    {
        id : 14,
        image : "Images/Dslr.png",
        name : "CANON EOS DSLR Camera",
        price : "$360",
        rating : "Images/Frame 566 (4).png"
    },
    {
        id : 15,
        image : "Images/Cart (2).png",
        name : "ASUS FHD Gaming Laptop",
        price : "$700",
        rating : "Images/Frame 566 (4).png"
    },
    {
        id : 16,
        image : "Images/Cart(4).png",
        name : "Curology Product Set",
        price : "$500",
        rating : "Images/Frame 566 (5).png"
    },
    {
        id : 17,
        image : "Images/car.png",
        name : "Kids Electric Car",
        price : "$960",
        rating : "Images/Frame 566 (1).png",
        color : "Images/Colour Chnage.png"
    },
    {
        id : 18,
        image : "Images/Cart (3).png",
        name : "Jr.Zoom Soccer Cleats",
        price : "$1160",
        rating : "Images/Frame 566 (6).png",
        color : "Images/Colour Chnage (1).png"
    },
    {
        id : 19,
        image : "Images/Cart (4).png",
        name : "JGP11 Shooter USB GamePad",
        price : "$660",
        rating : "Images/Frame 566 (2).png",
        color : "Images/Colour Chnage (2).png"
    },
    {
        id : 20,
        image : "Images/Cart (5).png",
        name : "Quilted Satin Jacket",
        price : "$660",
        rating : "Images/Frame 566 (6).png",
        color : "Images/Colour Chnage (3).png"
    },
];

const productContainer = document.querySelector('.productlist');
const btnEl = document.querySelector('.btn_search');
const inputEl = document.querySelector('.form_control');


//display all dynamic data
window.addEventListener("DOMContentLoaded" , () => { 
    let displayData = productData.map(function (cat_items) {
        return ` <div class="product-card">
                <a href="#">
                    <div class="hover-image">
                         <img src="${cat_items.image}" alt="${cat_items.name}" />
                    <div class="hover-overlay">
                        <button class="add-to-cart-btn">Add to Cart</button>
                     </div>
                    </div>
                    <div class="content">
                        <h3 class="title">${cat_items.name}</h3>
                        <p class="price">${cat_items.price}</p>
                        <img src="${cat_items.rating}" alt="Rating" />
                    </div>
                </a>
                </div>`;
    });
    displayData = displayData.join("");
    productContainer.innerHTML = displayData;
});



// search
btnEl.addEventListener ("click", (e) => {
    let searchValue = inputEl.value;
    
    if (searchValue !== "") {
        let searchCategory = productData.filter(function (data) {
            if (data.name.includes(searchValue)) {
                return data;
            } else if (data.productData.includes(searchValue)){
                return data;
            }
        });

        if (searchCategory) {
            displayproductData(searchCategory);
        }

        inputEl.value = "";
    } else {
        alert("please search the item or name !");
    }
});

