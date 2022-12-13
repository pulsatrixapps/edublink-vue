<template>
    <div id="main-wrapper" class="main-wrapper">
        
        <HeaderOne />

        <BreadCrumbTwo pageTitle='Shop Page' title='Shop' />

        <section class="shop-page-area section-gap-equal">
            <div class="container">
                <div class="edu-sorting-area">
                    <div class="sorting-left">
                        <h6 class="showing-text">We found <span>{{ productsData.length }}</span> books available for you</h6>
                    </div>
                    <div class="sorting-right">
                        <div class="edu-sorting">
                            <div class="icon"><i class="icon-55"></i></div>
                            <select class="edu-select">
                                <option>Filters</option>
                                <option>Low To High</option>
                                <option>High Low To</option>
                                <option>Last Viewed</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="row g-5">
                    <div 
                        class="col-lg-3 col-md-4 col-sm-6" 
                        v-for="product in productsData" 
                        :key="product.id"
                    >
                        <ProductOne :product="product" />
                    </div>
                </div>

                <PaginationOne />
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
            ProductOne: () => import('@/components/product/ProductOne'),
            PaginationOne: () => import("@/components/common/PaginationOne"),
            FooterOne: () => import("@/components/footer/FooterOne")
        },
        data () {
            return {
                productsData
            }
        },
        head() {
            return {
                title: 'Shop Page'
            }
        }
    }
</script>