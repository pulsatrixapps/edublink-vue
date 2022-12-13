<template>
    <div class="hero-banner hero-style-1 bg-image bg-image--11">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="banner-content">
                        <h1 class="title">Get <span class="color-secondary">2500+</span> <br>Best Online Courses From EduBlink</h1>
                        <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.</p>
                        <div class="banner-btn">
                            <n-link to="/course/course-one" class="edu-btn">
                                Find courses <i class="icon-4"></i>
                            </n-link>
                        </div>
                        <ul class="shape-group">
                            <MouseMove addClassName="shape-1" dataDepth="2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/images/about/shape-13.png" />
                        </ul>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="banner-thumbnail">
                        <div class="thumbnail" data-aos-delay="500" data-aos="fade-left" data-aos-duration="1000">
                            <img src="/images/banner/girl-1.png" alt="Girl Image">
                        </div>
                        <div class="instructor-info" data-aos-delay="200" data-aos="fade-up" data-aos-duration="500">
                            <div class="inner">
                                <h5 class="title">Instrunctor</h5>
                                <div class="media">
                                    <div class="thumb">
                                        <img src="/images/banner/author-1.png" alt="Images">
                                    </div>
                                    <div class="content">
                                        <span>200+</span> Instactors
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul class="shape-group">
                            <li class="shape-1" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000">
                                <img src="/images/about/shape-15.png" alt="Shape">
                            </li>

                            <li class="shape-4" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000">
                                <img src="/images/counterup/shape-02.png" alt="Shape">
                            </li>

                            <MouseMove addClassName="shape-2" dataDepth="-1.5" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/images/about/shape-16.png" />
                            
                            <MouseMove addClassName="shape-3 circle-shape" dataDepth="3" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" />

                            <MouseMove addClassName="shape-5" dataDepth="1.5" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/images/about/shape-13.png" />

                            <MouseMove addClassName="shape-6" dataDepth="-2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/images/about/shape-18.png" />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
         <div class="shape-7">
            <img src="/images/about/h-1-shape-01.png" alt="Shape">
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

<style>
    .hero-style-1 .banner-thumbnail .shape-group li.shape-3.circle-shape {
        width: 41px;
        height: 41px;
        background: var(--color-tertiary);
        border-radius: 100%;
    }
</style>