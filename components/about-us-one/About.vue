<template>
    <div class="section-gap-large edu-about-area about-style-7">
        <div class="container">
            <div class="row g-5 align-items-center">
                <div class="col-lg-5">
                    <div class="about-content">
                        <SectionTitle preTitle='About Us' title='We Providing The <span class="color-secondary">Best Quality</span> Online Courses.' subTitle='Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna aliquaenim ad minim.' alignment='section-left' />
                        
                        <ul class="features-list" data-aos-delay="150" data-aos="fade-up" data-aos-duration="800">
                            <li>Flexible Classes</li>
                            <li>Offline Classe Mode</li>
                            <li>Educator Support</li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="about-image-gallery">
                        <img class="main-img-1" src="/images/about/about-11.jpg" alt="About Image">
                        <img class="main-img-2" src="/images/about/about-12.jpg" data-aos-delay="150" data-aos="fade-down" data-aos-duration="800" alt="About Image">
                        <ul class="shape-group">
                            <MouseMove addClassName="shape-1" dataDepth="2" imgSrc="/images/about/shape-38.png" data-aos-delay="500" data-aos="fade" data-aos-duration="200" />
                            <MouseMove addClassName="shape-2" dataDepth="-2" imgSrc="/images/about/shape-37.png" data-aos-delay="500" data-aos="fade" data-aos-duration="200" />
                            <MouseMove addClassName="shape-3" dataDepth="-1.8" imgSrc="/images/about/shape-04.png" data-aos-delay="500" data-aos="fade" data-aos-duration="200" />
                            <li class="shape-4 scene" data-aos-delay="500" data-aos="fade" data-aos-duration="200">
                                <img src="/images/counterup/shape-02.png" alt="Shape">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <ul class="shape-group">
            <li class="shape-1" data-aos-delay="500" data-aos="fade" data-aos-duration="200"></li>
        </ul>
    </div>
</template>

<script>
    export default {
        components: {
            SectionTitle: () => import('@/components/common/SectionTitle'),
            MouseMove: () => import('@/components/animation/MouseMove')
        }
    }
</script>