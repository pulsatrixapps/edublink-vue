<template>
    <div class="pv-courses-demo">
        <div class="container">
            <div class="section-title section-center splash-title">
                <span class="number">7+</span>
                <span class="shape-line"><i class="icon-19"></i></span>
                <h2 class="title" data-aos-delay="100" data-aos="fade-up" data-aos-duration="1000">Responsive Course Layouts</h2>
                <p class="title" data-aos-delay="100" data-aos="fade-up" data-aos-duration="1000">Multiple choices for getting learners impressed with course grids & layouts</p>
            </div>
        </div>
        
        <div class="pv-gallery-wrapper">
            <div class="background-marque margque-courses"></div>
        </div>

        <ul class="shape-group">
            <MouseMove addClassName="shape-1" dataDepth="2" imgSrc="/images/about/shape-13.png" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" />
            <MouseMove addClassName="shape-2" dataDepth="1.8" imgSrc="/images/about/shape-36.png" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" />
            <MouseMove addClassName="shape-3" dataDepth="-1.4" imgSrc="/images/counterup/shape-02.png" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" />
            <li class="shape-4" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000">
                <img src="/images/about/shape-15.png" alt="Shape">
            </li>
            <MouseMove addClassName="shape-5" dataDepth="-1" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" />
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