<template>
    <div class="hero-banner hero-style-6">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="banner-content">
                        <h1 class="title">Yoga A Way of Feeling Relaxed & Calm!</h1>
                        <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.</p>
                        <div class="banner-btn">
                            <n-link to="/course/course-one" class="edu-btn">Find courses <i class="icon-4"></i></n-link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="banner-thumbnail">
                        <div class="thumbnail" data-aos-delay="500" data-aos="fade-up" data-aos-duration="1000">
                            <img src="/images/banner/girl-3.png" alt="Yoga Image">
                        </div>
                        <ul class="shape-group">
                            <li class="shape-1" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000">
                                <img src="/images/about/shape-27.png" alt="Shape">
                            </li>
                            <li class="shape-2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000">
                                <img class="rotateit" src="/images/about/shape-28.png" alt="Shape">
                            </li>
                            <li class="shape-3" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000">
                                <img class="rotateit" src="/images/about/shape-10.png" alt="Shape">
                            </li>
                            <li class="shape-4" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000">
                                <img src="/images/about/shape-29.png" alt="Shape">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <ul class="shape-group">
            <MouseMove addClassName="shape-1" dataDepth="2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/images/others/shape-12.png" />
            <MouseMove addClassName="shape-2" dataDepth="-2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/images/others/shape-13.png" />
            <MouseMove addClassName="shape-3" dataDepth="1" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/images/others/shape-14.png" />
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