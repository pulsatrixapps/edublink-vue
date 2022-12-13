<template>
    <div class="hero-banner hero-style-2 bg-image">
        <div class="container">
            <div class="row row--45 align-items-center">
                <div class="col-lg-6">
                    <div class="banner-content">
                        <h1 class="title">The Best <br> Program to <span class="color-secondary">Enroll</span> for Exchange</h1>
                        <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.</p>
                        <div class="banner-btn">
                            <n-link to="/course/course-one" class="edu-btn">Find courses <i class="icon-4"></i></n-link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="banner-gallery">
                        <div class="thumbnail thumbnail-1" data-aos-delay="500" data-aos="fade-up" data-aos-duration="1000">
                            <img src="/images/banner/girl-2.jpg" alt="Girl Image">
                        </div>
                        <div class="thumbnail thumbnail-2" data-aos-delay="500" data-aos="fade-down" data-aos-duration="1000">
                            <img src="/images/banner/man-1.jpg" alt="Girl Image">
                        </div>
                        <div class="online-support" data-aos-delay="600" data-aos="fade-right" data-aos-duration="1000">
                            <div class="inner">
                                <div class="icon">
                                    <i class="icon-29"></i>
                                </div>
                                <div class="content">
                                    <span class="subtitle">Online Support </span>
                                    <h4 class="title"><a href="tel:+0123456789">+012 (345) 6789</a></h4>
                                </div>
                            </div>
                        </div>
                        <ul class="shape-group">
                            <MouseMove addClassName="shape-1 shape-light" dataDepth="2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/images/faq/shape-13.png" />
                            <MouseMove addClassName="shape-1 shape-dark" dataDepth="2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/images/faq/dark-shape-13.png" />

                            <MouseMove addClassName="shape-2" dataDepth="-2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/images/faq/shape-12.png" />
                                
                            <MouseMove addClassName="shape-3 shape-light" dataDepth="2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/images/faq/shape-09.png" />
                            <MouseMove addClassName="shape-3 shape-dark" dataDepth="2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/images/faq/dark-shape-09.png" />

                            <MouseMove addClassName="shape-4" dataDepth="-2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/images/cta/shape-04.png" />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            MouseMove: () => import('@/components/animation/MouseMove'),
            ColorMode: () => import("@/components/common/ColorMode")
        }
    }
</script>

<style>
    .hero-banner.hero-style-2 .banner-gallery .shape-group li.shape-1-for-dark {
        top: -58px;
        right: 125px;
        visibility: hidden;
    }
    .dark-mode .hero-banner.hero-style-2 .banner-gallery .shape-group li.shape-1-for-dark {
        visibility: visible;
    }
    .dark-mode .hero-banner.hero-style-2 .banner-gallery .shape-group li.shape-1.for-light {
        visibility: hidden;
    }
</style>