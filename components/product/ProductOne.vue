<template>
    <div class="edu-product" :class="product.colorClass">
        <div class="inner">
            <div class="thumbnail">
                <n-link to="/shop/product-details">
                    <img :src="'/images/shop/' + product.imgSrc" :alt="(product.title) + ' Thumbnail'" />
                </n-link>
                <div class="product-hover-info">
                    <ul>
                        <li><n-link to="/shop/product-details" role="button"><i class="icon-2"></i></n-link></li>
                        <li><n-link to="/shop/wishlist"><i class="icon-22"></i></n-link></li>
                        <li><n-link to="/shop/cart"><i class="icon-3"></i></n-link></li>
                    </ul>
                </div>
            </div>
            <div class="content">
                <h6 class="title">
                    <n-link to="/shop/product-details">{{ product.title }}</n-link>
                </h6>
                <div class="product-rating">
                    <div class="rating">
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                    </div>
                    <span class="rating-count">({{ product.rating }})</span>
                </div>
                <div class="price">${{ product.price }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['extraClass', 'product']
    }
</script>