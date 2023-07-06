<script>
import '../main.js';
</script>
<template>
    <h1>Homepage</h1>

    <div class="product-item">
        <div class="product-image">
            <img src="Images/producs-images/Laptops/laptop-1.png" alt="popular labtops and computers" />
            <div class="product-over">
                <button class="btn btn-small addToCart" data-product-id="1">
                    <i class="fas fa-cart-plus"></i>Add
                    to cart
                </button>
            </div>
        </div>
        <div class="product-summary">
            <h4 class="productName">Product 1</h4>
            <span class="stars"></span>
            <p>
                luctus quis et est. Integer pretium
                purus
            </p>
            <h6 class="price">
                $<span class="priceValue">999</span>
            </h6>
        </div>
    </div>

    <div id="join_us">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia optio, numquam consequatur recusandae officiis
            dolorem fugit, vitae aperiam in veniam soluta minus id esse tenetur maiores. Dignissimos praesentium facilis
            totam.
        </p>
    </div>
</template>


<style>
.space {

    height: 100vh;
}
</style>