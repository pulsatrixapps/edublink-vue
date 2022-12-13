<template>
    <div class="edu-about-area about-style-3">
        <div class="container">
            <div class="row g-5 align-items-center">
                <div class="col-lg-6" data-aos-delay="50" data-aos="fade-up" data-aos-duration="800">
                    <div class="about-content">
                        <div class="section-title section-left">
                            <span class="pre-title">About Us</span>
                            <h2 class="title">We Provide Best <span class="color-primary">Education</span> Services For You</h2>
                            <span class="shape-line"><i class="icon-19"></i></span>
                        </div>
                        <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#about-edu" type="button" role="tab" aria-selected="true">About EduBlink</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#about-mission" type="button" role="tab" aria-selected="false">Our Mission</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#about-vision" type="button" role="tab" aria-selected="false">Our Vision</button>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane fade show active" id="about-edu" role="tabpanel">
                                <p>Magna aliquaenim minim veniam quis nostrud exercitation ullamco laborisLorem ipsum dolor sit amet consectetur adipisicing elit sed do eius tempor incididunt labore.</p>
                                <ul class="features-list">
                                    <li>Education award achived</li>
                                    <li>Available online courses</li>
                                </ul>
                            </div>
                            <div class="tab-pane fade" id="about-mission" role="tabpanel">
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
                                <ul class="features-list">
                                    <li>Industry Expert Instructor</li>
                                    <li>Up-to-Date Course Content</li>
                                </ul>
                            </div>
                            <div class="tab-pane fade" id="about-vision" role="tabpanel">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer.</p>
                                <ul class="features-list">
                                    <li>Online Remote Learning</li>
                                    <li>Lifetime Access For Learning</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="about-image-gallery">
                        <img class="main-img-1" data-aos-delay="100" data-aos="fade-up" data-aos-duration="800" src="/images/about/about-04.jpg" alt="About Image">
                        <img class="main-img-2" data-aos-delay="100" data-aos="fade-left" data-aos-duration="800" src="/images/about/about-05.jpg" alt="About Image">
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
            </div>
        </div>

        <ul class="shape-group">
            <li class="shape-1">
                <img class="rotateit" src="/images/about/shape-13.png" alt="Shape">
            </li>
            <li class="shape-2 scene">
                <span></span>
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