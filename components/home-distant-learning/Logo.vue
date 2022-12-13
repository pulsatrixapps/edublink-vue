<template>
    <div class="edu-brand-area brand-area-2 bg-image">
        <div class="container edublink-animated-shape">
            <div class="brand-grid-wrap brand-style-2">
                <div class="brand-grid">
                    <img src="/images/brand/brand-01.png" alt="Brand Logo">
                </div>
                <div class="brand-grid">
                    <img src="/images/brand/brand-02.png" alt="Brand Logo">
                </div>
                <div class="brand-grid">
                    <img src="/images/brand/brand-03.png" alt="Brand Logo">
                </div>
                <div class="brand-grid">
                    <img src="/images/brand/brand-04.png" alt="Brand Logo">
                </div>
                <div class="brand-grid">
                    <img src="/images/brand/brand-05.png" alt="Brand Logo">
                </div>
                <div class="brand-grid">
                    <img src="/images/brand/brand-06.png" alt="Brand Logo">
                </div>
            </div>
            <ul class="shape-group">
                <MouseMove addClassName="shape-1" dataDepth="-2" imgSrc="/images/about/shape-37.png" data-aos-delay="500" data-aos="fade" data-aos-duration="200" />
            </ul>
        </div>
        <ul class="shape-group">
            <MouseMove addClassName="shape-2 shape-light" dataDepth="-2" imgSrc="/images/about/shape-41.png" data-aos-delay="500" data-aos="fade" data-aos-duration="200" />
            <MouseMove addClassName="shape-2 shape-dark" dataDepth="-2" imgSrc="/images/about/dark-shape-41.png" data-aos-delay="500" data-aos="fade" data-aos-duration="200" />
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