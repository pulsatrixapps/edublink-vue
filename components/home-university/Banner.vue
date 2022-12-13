<template>
    <div class="hero-banner hero-style-3 bg-image bg-image--17">
        <div class="container edublink-animated-shape">
            <div class="row">
                <div class="col-xl-6 col-lg-7">
                    <div class="banner-content">
                        <span class="subtitle">Welcome to EduBlink</span>
                        <h1 class="title">World Best Program Best University</h1>
                        <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.</p>
                        <div class="banner-btn">
                            <n-link to="/course/course-one" class="edu-btn btn-secondary">Find courses <i class="icon-4"></i></n-link>
                        </div>
                    </div>
                </div>
            </div>

            <ul class="shape-group">
                <MouseMove addClassName="shape-1" dataDepth="2" data-aos-delay="200" data-aos="fade" data-aos-duration="200" imgSrc="/images/others/shape-10.png" />
                <MouseMove addClassName="shape-2" dataDepth="-3" data-aos-delay="200" data-aos="fade" data-aos-duration="200" imgSrc="/images/others/shape-11.png" />
                <li class="shape-3">
                    <img src="/images/others/shape-25.png" alt="Shape">
                </li>
            </ul>
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