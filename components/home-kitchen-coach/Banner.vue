<template>
    <div class="hero-banner hero-style-5">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="banner-content">
                        <h1 class="title">Take Your Cooking Skill To The Next Level</h1>
                        <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.</p>
                        <div class="banner-btn">
                            <n-link to="/course/course-one" class="edu-btn">
                                Find courses <i class="icon-4"></i>
                            </n-link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="banner-thumbnail">
                        <div class="thumbnail" data-aos-delay="500" data-aos="fade-left" data-aos-duration="1000">
                            <img src="/images/banner/couple-cooking.jpg" alt="Couple Image">
                        </div>
                        <ul class="shape-group">
                            <li class="shape-1" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000">
                                <img src="/images/about/shape-26.png" alt="Shape">
                            </li>
                            <li class="shape-2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000">
                                <img src="/images/about/shape-15.png" alt="Shape">
                            </li>
                            <li class="shape-3" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000">
                                <img src="/images/about/shape-13.png" alt="Shape">
                            </li>
                            <li class="shape-4" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000">
                                <img src="/images/counterup/shape-02.png" alt="Shape">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        <ul class="shape-group">
            <MouseMove addClassName="shape-1" dataDepth="2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/images/others/shape-05.png" />
            <MouseMove addClassName="shape-2" dataDepth="-2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/images/others/shape-04.png" />
            <MouseMove addClassName="shape-3" dataDepth="2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/images/others/shape-03.png" />
            <MouseMove addClassName="shape-4" dataDepth="-2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/images/others/shape-02.png" />
            <MouseMove addClassName="shape-5" dataDepth="2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/images/others/shape-01.png" />
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