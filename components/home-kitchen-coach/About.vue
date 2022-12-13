<template>
    <div class="edu-section-gap edu-about-area about-style-4">
        <div class="container">
            <div class="row g-5 align-items-center">
                <div class="col-lg-6">
                    <div class="about-image-gallery">
                        <div class="main-img-1" data-aos-delay="50" data-aos="fade-right" data-aos-duration="800">
                            <img src="/images/about/about-06.jpg" alt="About Image">
                        </div>
                        <img class="main-img-2" src="/images/about/about-07.jpg" alt="About Image" data-aos-delay="60" data-aos="fade-up" data-aos-duration="900">
                        <ul class="shape-group">
                            <MouseMove addClassName="shape-1" dataDepth="2" data-aos-delay="500" data-aos="fade" data-aos-duration="200" imgSrc="/images/about/shape-13.png" />
                            <MouseMove addClassName="shape-2" dataDepth="-2" data-aos-delay="500" data-aos="fade" data-aos-duration="200" imgSrc="/images/about/shape-39.png" />
                            <MouseMove addClassName="shape-3" dataDepth="2" data-aos-delay="500" data-aos="fade" data-aos-duration="200" imgSrc="/images/about/shape-07.png" />
                            <li class="shape-4" data-aos-delay="500" data-aos="fade" data-aos-duration="200">
                                <span></span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-6" data-aos-delay="50" data-aos="fade-up" data-aos-duration="800">
                    <div class="about-content">
                        <div class="section-title section-left">
                            <span class="pre-title">About Us</span>
                            <h2 class="title">Welcome To Professional Kitchen Coach Courses</h2>
                            <span class="shape-line"><i class="icon-19"></i></span>
                            <p>Magna aliquaenim minim veniam quis nostrud exercitation ullamco laborisLorem ipsum dolor sit amet consectetur adipisicing elit sed do eius tempor incididunt labore.</p>
                        </div>
                        <ul class="features-list">
                            <li>Cooking award achived</li>
                            <li>Available online courses</li>
                            <li>Online Certification</li>
                        </ul>
                        <n-link to="/contact-us" class="edu-btn">Get Start Today <i class="icon-4"></i></n-link>
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