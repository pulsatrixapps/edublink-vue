<template>
    <div class="edu-cta-banner-area cta-banner-2">
        <div class="container">
            <div class="edu-cta-banner">
                <div class="row justify-content-center">
                    <div class="col-lg-9">
                        <div class="section-title section-center" data-aos-delay="150" data-aos="fade-up" data-aos-duration="800">
                            <h2 class="title">Register To Get Quality Kitchen <span class="color-primary">Courses</span> Through EduBlink</h2>
                            <n-link to="/contact-us" class="edu-btn">Get started now <i class="icon-4"></i></n-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ul class="shape-group">
            <MouseMove addClassName="shape-1" dataDepth="-2" imgSrc="/images/others/shape-05.png" />
            <MouseMove addClassName="shape-2" dataDepth="2" imgSrc="/images/others/shape-04.png" />
            <MouseMove addClassName="shape-3" dataDepth="-2" imgSrc="/images/others/shape-02.png" />
            <MouseMove addClassName="shape-4" dataDepth="2" imgSrc="/images/others/shape-01.png" />
            <li class="shape-5 shape-light" data-aos-delay="100" data-aos="fade" data-aos-duration="1000">
                    <img src="/images/others/map-shape-3.png" alt="shape">
                </li>
            <li class="shape-5 shape-dark" data-aos-delay="100" data-aos="fade" data-aos-duration="1000">
                <img src="/images/others/dark-map-shape.png" alt="shape">
            </li>
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