<template>
    <section>
        <div class="testimonial-area-6 gap-bottom-equal">
            <div class="container edublink-animated-shape">
                <div class="row row--40">
                    <div class="col-lg-6">
                        <SectionTitle preTitle='Testimonials' title='What Our Students <br> Have To Say' alignment='section-left' />

                        <div class="about-3-testimonial-wrapper">
                            <swiper class="testimonial-activation-5 swiper" :options="swiperOptions">
                                <div class="swiper-slide">
                                    <div class="testimonial-slide testimonial-style-3">
                                        <div class="content">
                                            <div class="rating-icon">
                                                <i class="icon-23"></i>
                                                <i class="icon-23"></i>
                                                <i class="icon-23"></i>
                                                <i class="icon-23"></i>
                                                <i class="icon-23"></i>
                                            </div>
                                            <p>“Lorem ipsum dolor amet consectur elit adicing elit sed do umod tempor ux incididunt enim ad minim veniam quis sit nosrud citation laboris nisiste aliquip comodo perspiatix une omnis iste natus error sit voluptatem accusantium dolore que laudantum”.</p>
                                            <div class="author-info">
                                                <div class="thumb">
                                                    <img src="/images/testimonial/testimonial-01.png" alt="Testimonial">
                                                </div>
                                                <div class="info">
                                                    <h5 class="title">Haley Bennet</h5>
                                                    <span class="subtitle">Designer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="testimonial-slide testimonial-style-3">
                                        <div class="content">
                                            <div class="rating-icon">
                                                <i class="icon-23"></i>
                                                <i class="icon-23"></i>
                                                <i class="icon-23"></i>
                                                <i class="icon-23"></i>
                                                <i class="icon-23"></i>
                                            </div>
                                            <p>“Lorem ipsum dolor amet consectur elit adicing elit sed do umod tempor ux incididunt enim ad minim veniam quis sit nosrud citation laboris nisiste aliquip comodo perspiatix une omnis iste natus error sit voluptatem accusantium dolore que laudantum”.</p>
                                            <div class="author-info">
                                                <div class="thumb">
                                                    <img src="/images/testimonial/testimonial-02.png" alt="Testimonial">
                                                </div>
                                                <div class="info">
                                                    <h5 class="title">Richard Gere</h5>
                                                    <span class="subtitle">Designer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="testimonial-slide testimonial-style-3">
                                        <div class="content">
                                            <div class="rating-icon">
                                                <i class="icon-23"></i>
                                                <i class="icon-23"></i>
                                                <i class="icon-23"></i>
                                                <i class="icon-23"></i>
                                                <i class="icon-23"></i>
                                            </div>
                                            <p>“Lorem ipsum dolor amet consectur elit adicing elit sed do umod tempor ux incididunt enim ad minim veniam quis sit nosrud citation laboris nisiste aliquip comodo perspiatix une omnis iste natus error sit voluptatem accusantium dolore que laudantum”.</p>
                                            <div class="author-info">
                                                <div class="thumb">
                                                    <img src="/images/testimonial/testimonial-03.png" alt="Testimonial">
                                                </div>
                                                <div class="info">
                                                    <h5 class="title">Megan Foxx</h5>
                                                    <span class="subtitle">Designer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </swiper>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                    
                    <div class="col-lg-6">
                        <div class="video-gallery video-gallery-5" data-aos-delay="150" data-aos="fade-left" data-aos-duration="800">
                            <div class="thumbnail">
                                <img src="/images/others/video-03.jpg" alt="Thumb">
                                <span v-for="( _, imageIndex ) in items" :key="imageIndex">
                                    <a @click="index = imageIndex" class="video-play-btn video-popup-activation">
                                        <i class="icon-18"></i>
                                    </a>
                                </span>
                            </div>
                            <div class="content">
                                <h4 class="title">Take a Video Tour to Learn Intro of Campus</h4>
                            </div>
                        </div>
                    </div>
                </div>
                
                <ul class="shape-group">
                    <MouseMove addClassName="shape-2" dataDepth="2" data-aos-delay="200" data-aos="fade" data-aos-duration="1000" imgSrc="/images/about/shape-25.png" />
                    <MouseMove addClassName="shape-3" dataDepth="-1" data-aos-delay="200" data-aos="fade" data-aos-duration="1000" />
                </ul>
            </div>
            <ul class="shape-group">
                <li class="shape-1" data-aos-delay="200" data-aos="fade" data-aos-duration="1000">
                    <img class="rotateit" src="/images/about/shape-13.png" alt="Shape">
                </li>
            </ul>
        </div>
        <CoolLightBox
            :items="items"
            :index="index"
            @close="index = null"
        >
        </CoolLightBox>
    </section>
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
                index: null,
                swiperOptions: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    loop: true,
                    grabCursor: true,
                    speed: 1000,
                    autoplay: {
                        delay: 3000
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
    .testimonial-area-6 {
        .about-3-testimonial-wrapper {
             .swiper-pagination {
                text-align: right;
                margin-top: -45px;
            }
        }
    }
</style>