<template>
     <div class="pv-inner-page-area bg-image">
        <div class="container">
            <div class="section-title section-center splash-title">
                <span class="number">45+</span>
                <span class="shape-line"><i class="icon-19"></i></span>
                <h2 class="title" data-aos-delay="100" data-aos="fade-up" data-aos-duration="1000">Pre-build Inner Pages</h2>
                <p data-aos-delay="100" data-aos="fade-up" data-aos-duration="1000">Start with a page template, your site can be built in less than you can expect!!.</p>
            </div>
        </div>
        <div class="pv-gallery-wrapper">
            <div class="background-marque margque-inner-page"></div>
        </div>
        <ul class="shape-group">
            <MouseMove addClassName="shape-1" dataDepth="1.2" imgSrc="/images/counterup/shape-03.png" data-aos="fade-right" data-aos-duration="1000" />
            <MouseMove addClassName="shape-2" dataDepth="-2" imgSrc="/images/counterup/shape-02.png" data-aos="fade-right" data-aos-duration="1000" />
            <MouseMove addClassName="shape-3" dataDepth="3" data-aos="fade-right" data-aos-duration="1000" />
        </ul>
    </div>
</template>

<script>
    export default {
        components: {
            MouseMove: () => import('@/components/animation/MouseMove')
        }
    }
</script>