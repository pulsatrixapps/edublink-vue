<template>
    <div id="main-wrapper" class="main-wrapper">
        
        <HeaderOne />

        <BreadCrumbTwo title='Cart Page' />
        
        <section class="cart-page-area edu-section-gap">
            <div class="container">
                <div class="table-responsive">
                    <table class="table cart-table">
                        <thead>
                            <tr>
                                <th scope="col" class="product-remove"></th>
                                <th scope="col" class="product-thumbnail"></th>
                                <th scope="col" class="product-title">Product Name</th>
                                <th scope="col" class="product-price">Price</th>
                                <th scope="col" class="product-quantity">Quantity</th>
                                <th scope="col" class="product-subtotal">Subtotal</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr
                                v-for="product in productsData.slice(0, 3)" 
                                :key="product.id"
                            >
                                <td class="product-remove">
                                    <a href="#" class="remove-wishlist"><i class="icon-73"></i></a>
                                </td>
                                <td class="product-thumbnail">
                                    <n-link to="/shop/product-details">
                                        <img :src="'/images/shop/' + product.imgSrc" :alt="(product.title) + ' Thumbnail'" />
                                    </n-link>
                                </td>
                                <td class="product-title">
                                    <n-link to="/shop/product-details">{{ product.title }}</n-link>
                                </td>
                                <td class="product-price" data-title="Price"><span class="currency-symbol">$</span>70.30</td>
                                <td class="product-quantity" data-title="Qty">
                                   <div class="edu-quantity-btn edublink-vue-product-btn">
                                    <div class="pro-qty">
                                            <button class="dec qtybtn">-</button>
                                            <input type="text" :value="1">
                                            <button class="inc qtybtn">+</button>
                                        </div>
                                    </div>
                                </td>
                                <td class="product-subtotal" data-title="Subtotal"><span class="currency-symbol">$</span>{{ product.price }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="cart-update-btn-area">
                    <div class="input-group product-cupon">
                        <input placeholder="Coupon code..." type="text">
                        <button type="submit" class="submit-btn"><i class="icon-4"></i></button>
                    </div>
                    <div class="update-btn">
                        <a href="#" class="edu-btn btn-border btn-medium disabled">Update Cart <i class="icon-4"></i></a>
                    </div>
                </div>

                <div class="row">
                    <div class="col-xl-5 col-lg-7 offset-xl-7 offset-lg-5">
                        <div class="order-summery">
                            <h4 class="title">Cart Totals</h4>
                            <table class="table summery-table">
                                <tbody>
                                    <tr class="order-subtotal">
                                        <td>Subtotal</td>
                                        <td>$210.90</td>
                                    </tr>
                                    <tr class="order-total">
                                        <td>Order Total</td>
                                        <td>$210.90</td>
                                    </tr>
                                </tbody>
                            </table>
                            <a href="checkout.html" class="edu-btn btn-medium checkout-btn">Process to Checkout <i class="icon-4"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <FooterOne />
    </div>
</template>

<script>
    import productsData from '~/data/products';
    export default {
        components: {
            HeaderOne: () => import("@/components/header/HeaderOne"),
            BreadCrumbTwo: () => import("@/components/common/BreadCrumbTwo"),
            FooterOne: () => import("@/components/footer/FooterOne")
        },
        data () {
            return {
                productsData
            }
        },
        head() {
            return {
                title: 'Cart Page'
            }
        }
    }
</script>