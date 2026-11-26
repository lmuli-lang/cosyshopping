let cartCount = 0;


// ADD TO CART

function addToCart(productName) {

    cartCount++;

    document.getElementById("cartCount").textContent = cartCount;

    alert(productName + " has been added to your cart!");
}


// SEARCH

function searchProducts() {

    const search =
        document.getElementById("searchInput").value.toLowerCase();

    const products =
        document.querySelectorAll(".product");

    let found = false;

    products.forEach(function(product) {

        const name =
            product.querySelector("h3").textContent.toLowerCase();

        if (name.includes(search) || search === "") {

            product.style.display = "block";

            found = true;

        } else {

            product.style.display = "none";

        }

    });

    if (!found) {
        alert("No products found.");
    }
}


// SCROLL TO PRODUCTS

function scrollToProducts() {

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// NEWSLETTER

function subscribe() {

    const email =
        document.getElementById("email").value;

    if (email === "") {

        alert("Please enter your email.");

    } else {

        alert(
            "Thank you for subscribing!"
        );

        document.getElementById("email").value = "";
    }
}


// NAVIGATION BUTTON

function toggleMenu() {

    alert(
        "Categories menu opened!"
    );
}