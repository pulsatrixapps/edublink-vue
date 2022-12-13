<template>
    <div>
        <div class="gap-bottom-equal edu-about-area about-style-1">
            <div class="container edublink-animated-shape">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6">
                        <div class="about-image-gallery">
                            <img class="main-img-1" src="/images/about/about-01.jpg" alt="About Image">
                            <div class="video-box">
                                <div class="inner">
                                    <div class="thumb">
                                        <img src="/images/about/about-02.jpg" alt="About Image">
                                        <span v-for="( _, imageIndex ) in items" :key="imageIndex">
                                            <a @click="index = imageIndex" class="popup-icon video-popup-activation">
                                                <i class="icon-18"></i>
                                            </a>
                                        </span>
                                    </div>
                                    <div class="loading-bar">
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                            <div class="award-status bounce-slide">
                                <div class="inner">
                                    <div class="icon">
                                        <i class="icon-21"></i>
                                    </div>
                                    <div class="content">
                                        <h6 class="title">29+</h6>
                                        <span class="subtitle">Wonderful Awards</span>
                                    </div>
                                </div>
                            </div>
                            
                            <ul class="shape-group">
                                <MouseMove addClassName="shape-1" dataDepth="1" data-aos-delay="500" data-aos="fade" data-aos-duration="200" imgSrc="/images/about/shape-36.png" />
                                <MouseMove addClassName="shape-2" dataDepth="-1" data-aos-delay="500" data-aos="fade" data-aos-duration="200" imgSrc="/images/about/shape-37.png" />
                                <MouseMove addClassName="shape-3" dataDepth="1" data-aos-delay="500" data-aos="fade" data-aos-duration="200" imgSrc="/images/about/shape-02.png" />
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-content">
                            <SectionTitle preTitle="About Us" title='Learn and Grow Your Skills From <span class="color-secondary">Anywhere</span>' subTitle='Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna aliquaenim minim veniam quis nostrud exercitation ullamco laboris.' alignment='section-left' />

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
        <CoolLightBox
            :items="items"
            :index="index"
            @close="index = null"
        >
        </CoolLightBox>
    </div>
</template>

<script>
    export default {
        components: {
            SectionTitle: () => import('@/components/common/SectionTitle'),
            MouseMove: () => import('@/components/animation/MouseMove')
        },
        data () {
            return {
                items: [
                    {
                        src: "https://www.youtube.com/watch?v=PICj5tr9hcc"
                    }
                ],
                index: null
            }
        }
    }
</script>