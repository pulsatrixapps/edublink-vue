<template>
    <div id="main-wrapper" class="main-wrapper">
        
        <HeaderOne />

        <BreadCrumbTwo title='Wishlist Page' />
        
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
                                <th scope="col" class="product-status">Stock Status</th>
                                <th scope="col" class="product-add-cart"></th>
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
                                <td class="product-price" data-title="Price"><span class="currency-symbol">$</span>{{ product.price }}</td>
                                <td class="product-status" data-title="Stock"> In Stock</td>
                                <td class="product-add-cart"><n-link to="/shop/cart" class="edu-btn btn-medium">Add to Cart</n-link></td>
                            </tr>
                        </tbody>
                    </table>
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
                title: 'Wishlist Page'
            }
        }
    }
</script>