<template>
    <div class="edu-about-area about-style-6">
        <div class="container">
            <div class="row g-5 align-items-center">
                <div class="col-lg-6">
                    <div class="about-image-gallery">
                        <div class="main-img-1">
                            <img src="/images/about/about-09.png" alt="About Image">
                        </div>
                        <div class="main-img-2 bounce-slide">
                            <img src="/images/about/about-10.png" alt="About Image">
                        </div>
                        <ul class="shape-group">
                            <li class="shape-1">
                                <img src="/images/about/shape-11.png" alt="Shape">
                            </li>
                            <li class="shape-2">
                                <img src="/images/about/shape-12.png" alt="Shape">
                            </li>
                            <MouseMove addClassName="shape-3" dataDepth="1" imgSrc="/images/about/shape-13.png" />
                        </ul>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="about-content">
                        <div class="section-title section-left" data-aos-delay="150" data-aos="fade-up" data-aos-duration="800">
                            <span class="pre-title pre-textsecondary">Welcome to the EduBlink</span>
                            <h2 class="title">Welcome To Best Preschool Class Center</h2>
                            <span class="shape-line"><i class="icon-19"></i></span>
                            <p>Magna aliquaenim minim veniam quis nostrud exercitation ullamco laborisLorem ipsum dolor sit amet consectetur adipisicing elit sed do eius tempor incididunt labore.</p>
                        </div>

                        <div class="about-mission" data-aos-delay="150" data-aos="fade-up" data-aos-duration="800">
                            <div class="row g-5 row--20">
                                <div class="col-lg-6">
                                    <h5 class="title">Our Vision</h5>
                                    <p>Magna aliquaenim minim veniamquis nostrud exercitation ulamco laboris Lorem ipsum dolor sit amet.</p>
                                    <ul class="features-list">
                                        <li>Transportation</li>
                                        <li>Outdoor Games</li>
                                    </ul>
                                </div>
                                <div class="col-lg-6">
                                    <h5 class="title">Our Mission</h5>
                                    <p>Consectetur do eius adipisicing elit sed do eius tempor incididunt labore.</p>
                                    <p>dolore magna aliqua. Ut enim ad minim veniam quis nosud exercitation ulamco.</p>
                                </div>
                            </div>
                        </div>
                        <div data-aos-delay="150" data-aos="fade-up" data-aos-duration="800">
                            <n-link to="/course/course-one" class="edu-btn btn-curved">Get Start Today <i class="icon-4"></i></n-link>
                        </div>
                    </div>
                </div>
            </div>
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