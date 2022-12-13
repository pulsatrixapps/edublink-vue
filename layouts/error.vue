<template>
    <div id="main-wrapper" class="main-wrapper">
        
        <HeaderOne />

        <BreadCrumbTwo title="Error-404" />

        <section class="section-gap-equal error-page-area">
            <div class="container">
                <div class="edu-error">
                    <div class="thumbnail">
                        <img src="/images/others/404.png" alt="404 Error">
                        <ul class="shape-group">
                            <MouseMove addClassName="shape-1" dataDepth="2" imgSrc="/images/about/shape-25.png" />
                            <MouseMove addClassName="shape-2" dataDepth="-2" imgSrc="/images/about/shape-15.png" />
                            <MouseMove addClassName="shape-3" dataDepth="2" imgSrc="/images/about/shape-13.png" />
                            <MouseMove addClassName="shape-4" dataDepth="-2" imgSrc="/images/counterup/shape-02.png" />
                        </ul>
                    </div>
                    <div class="content">
                        <h2 class="title">404 - Page Not Found</h2>
                        <h4 class="subtitle">The page you are looking for does not exist.</h4>
                        <n-link to="/" class="edu-btn"><i class="icon-west"></i>Back to Homepage</n-link>
                    </div>
                </div>
            </div>
            <ul class="shape-group">
                <li class="shape-1">
                    <img src="/images/others/map-shape-2.png" alt="Shape">
                </li>
            </ul>
        </section>

        <FooterOne />
        
        <ScrollToTop />
    </div>
</template>

<script>
    export default {
        components: {
            BreadCrumbTwo: () => import("@/components/common/BreadCrumbTwo"),
            FooterOne: () => import("@/components/footer/FooterOne"),
            ScrollToTop: () => import('@/components/footer/ScrollToTop'),
            MouseMove: () => import('@/components/animation/MouseMove')
        },
        head() {
            return {
                title: '404 Not Found'
            }
        }
    }
</script>