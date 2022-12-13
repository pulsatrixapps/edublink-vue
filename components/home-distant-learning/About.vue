<template>
    <div class="gap-bottom-equal edu-about-area about-style-2">
        <div class="container edublink-animated-shape">
            <div class="row g-5 align-items-center">
                <div class="col-lg-7">
                    <div class="about-image-gallery">
                        <img class="main-img-1" src="/images/about/about-03.jpg" alt="About Image">
                        <div 
                            class="author-box rellax"
                            data-rellax-speed="0.8" 
                            data-rellax-xs-speed="0.8" 
                            data-rellax-mobile-speed="0.5" 
                            data-rellax-tablet-speed="0.5"
                        >
                            <div class="inner">
                                <div class="thumb">
                                    <img src="/images/about/shape-03.png" alt="Shape Image">
                                </div>
                                <div class="content">
                                    <h4 class="title">Ray Sanchez</h4>
                                    <p>Minim veniam nostrud exer citation.</p>
                                </div>
                            </div>
                        </div>
                        <div class="award-status bounce-slide">
                            <div class="inner">
                                <div class="icon">
                                    <i class="icon-30"></i>
                                </div>
                                <div class="content">
                                    <h6 class="title">20K+</h6>
                                    <span class="subtitle">Enrolled Learners</span>
                                </div>
                            </div>
                        </div>
                        <ul class="shape-group">
                            <MouseMove addClassName="shape-1" dataDepth="2" imgSrc="/images/about/shape-38.png" data-aos-delay="500" data-aos="fade" data-aos-duration="200" />
                            <MouseMove addClassName="shape-2" dataDepth="-2" imgSrc="/images/about/shape-37.png" data-aos-delay="500" data-aos="fade" data-aos-duration="200" />
                            <MouseMove addClassName="shape-3" dataDepth="1.8" imgSrc="/images/about/shape-04.png" data-aos-delay="500" data-aos="fade" data-aos-duration="200" />
                        </ul>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="about-content">
                        <SectionTitle preTitle='About Us' title='Over 10 Years in <span class="color-secondary">Distant learning</span> for Skill Development' alignment='section-left' subTitle='Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna aliquaenim ad minim.' />
                        
                        <ul class="features-list" data-aos-delay="150" data-aos="fade-up" data-aos-duration="800">
                            <li>Expert Trainers</li>
                            <li>Online Remote Learning</li>
                            <li>Lifetime Access</li>
                        </ul>
                    </div>
                </div>
            </div>
            <ul class="shape-group">
                <MouseMove addClassName="shape-1 circle" dataDepth="-2.3" data-aos-delay="500" data-aos="fade" data-aos-duration="200" />
            </ul>
        </div>
    </div>
</template>

<script>
    import parallaxAnimation from '../../common/parallaxAnimation';
    export default {
        components: {
            SectionTitle: () => import('@/components/common/SectionTitle'),
            MouseMove: () => import('@/components/animation/MouseMove')
        },
        mounted () {
            parallaxAnimation();
        }
    }
</script>