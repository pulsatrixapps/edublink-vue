<template>
    <div class="pv-shop-area bg-image">
        <div class="wrapper">
            <div class="container-custom-1520">
                <div class="row align-items-center">
                    <div class="col-lg-5 order-lg-2">
                        <div class="shop-content">
                            <div class="section-title section-left splash-title">
                                <span class="pre-title" data-aos="fade-up" data-aos-duration="1000">Online Store</span>
                                <h2 class="title" data-aos-delay="100" data-aos="fade-up" data-aos-duration="1000">Sell Like a Pro with <br> E-commerce</h2>
                                <p data-aos-delay="100" data-aos="fade-up" data-aos-duration="1000">E-commerce. EduBlink provides all the tools you need to start selling online. Let your customers to experience E-commerce at its absolute-best.</p>
                                <div data-aos-delay="400" data-aos="fade-up" data-aos-duration="1000">
                                    <n-link to="/shop" class="edu-btn" target="_blank">View Shop <i class="icon-4"></i></n-link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-7 order-lg-1">
                        <div class="shop-thumbnail">
                            <div class="shop-thumbnail-images">
                                <img class="shop-demo-main" src="/images/preview/shop-demo-main.png" data-aos-delay="200" data-aos="fade" data-aos-duration="800" alt="Shop Images">
                                <img class="shop-demo-left" src="/images/preview/shop-demo-left.png" data-aos-delay="500" data-aos="fade-right" data-aos-duration="1000" alt="Shop Images">
                                <img class="shop-demo-right" src="/images/preview/shop-demo-right.png" data-aos-delay="500" data-aos="fade-left" data-aos-duration="1000" alt="Shop Images">

                                <ul class="shape-group">
                                    <MouseMove addClassName="shape-1" dataDepth="2" imgSrc="/images/about/shape-13.png" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" />
                                    <MouseMove addClassName="shape-2" dataDepth="2" imgSrc="/images/about/shape-25.png" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" />
                                    <MouseMove addClassName="shape-3" dataDepth="-3" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            MouseMove: () => import('@/components/animation/MouseMove')
        }
    }
</script>