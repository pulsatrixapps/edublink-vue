<template>
    <div class="testimonial-area-2 section-gap-large">
        <div class="container edublink-animated-shape">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <SectionTitle preTitle='Testimonials' title='What Our Students <br> Have To Say' subTitle='Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor incidid unt labore dolore magna aliquaenim minim.' alignment='section-center' />
                </div>
            </div>
            <swiper class="testimonial-activation swiper" :options="swiperOptions">
                <div class="swiper-slide">
                    <div class="testimonial-slide">
                        <div class="content">
                            <div class="logo"><img src="/images/testimonial/logo-01.png" alt="Logo"></div>
                            <p>Lorem ipsum dolor amet consectur elit adicing elit sed do umod tempor ux incididunt enim ad minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix.</p>
                            <div class="rating-icon">
                                <i class="icon-23"></i>
                                <i class="icon-23"></i>
                                <i class="icon-23"></i>
                                <i class="icon-23"></i>
                                <i class="icon-23"></i>
                            </div>
                        </div>
                        <div class="author-info">
                            <div class="thumb">
                                <img src="/images/testimonial/testimonial-01.png" alt="Testimonial">
                            </div>
                            <div class="info">
                                <h5 class="title">Ray Sanchez</h5>
                                <span class="subtitle">Student</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="testimonial-slide">
                        <div class="content">
                            <div class="logo"><img src="/images/testimonial/logo-02.png" alt="Logo"></div>
                            <p>Lorem ipsum dolor amet consectur elit adicing elit sed do umod tempor ux incididunt enim ad minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix.</p>
                            <div class="rating-icon">
                                <i class="icon-23"></i>
                                <i class="icon-23"></i>
                                <i class="icon-23"></i>
                                <i class="icon-23"></i>
                                <i class="icon-23"></i>
                            </div>
                        </div>
                        <div class="author-info">
                            <div class="thumb">
                                <img src="/images/testimonial/testimonial-02.png" alt="Testimonial">
                            </div>
                            <div class="info">
                                <h5 class="title">Thomas Lopez</h5>
                                <span class="subtitle">Designer</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="testimonial-slide">
                        <div class="content">
                            <div class="logo"><img src="/images/testimonial/logo-03.png" alt="Logo"></div>
                            <p>Lorem ipsum dolor amet consectur elit adicing elit sed do umod tempor ux incididunt enim ad minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix.</p>
                            <div class="rating-icon">
                                <i class="icon-23"></i>
                                <i class="icon-23"></i>
                                <i class="icon-23"></i>
                                <i class="icon-23"></i>
                                <i class="icon-23"></i>
                            </div>
                        </div>
                        <div class="author-info">
                            <div class="thumb">
                                <img src="/images/testimonial/testimonial-03.png" alt="Testimonial">
                            </div>
                            <div class="info">
                                <h5 class="title">Amber Page</h5>
                                <span class="subtitle">Developer</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="testimonial-slide">
                        <div class="content">
                            <div class="logo"><img src="/images/testimonial/logo-02.png" alt="Logo"></div>
                            <p>Lorem ipsum dolor amet consectur elit adicing elit sed do umod tempor ux incididunt enim ad minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix.</p>
                            <div class="rating-icon">
                                <i class="icon-23"></i>
                                <i class="icon-23"></i>
                                <i class="icon-23"></i>
                                <i class="icon-23"></i>
                                <i class="icon-23"></i>
                            </div>
                        </div>
                        <div class="author-info">
                            <div class="thumb">
                                <img src="/images/testimonial/testimonial-04.png" alt="Testimonial">
                            </div>
                            <div class="info">
                                <h5 class="title">Robert Tapp</h5>
                                <span class="subtitle">Content Creator</span>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper>
            <div class="swiper-pagination"></div>

            <ul class="shape-group">
                <MouseMove addClassName="shape-1" dataDepth="1.4" imgSrc="/images/about/shape-30.png" data-aos-delay="200" data-aos="fade" data-aos-duration="1000" />
                <MouseMove addClassName="shape-2" dataDepth="-1.4" imgSrc="/images/about/shape-25.png" data-aos-delay="200" data-aos="fade" data-aos-duration="1000" />
            </ul>
        </div>
        <ul class="shape-group">
            <li class="shape-3">
                <img class="d-block-shape-light" data-depth="2" src="/images/others/map-shape-3.png" alt="Shape">
                <img class="d-none-shape-dark" data-depth="2" src="/images/others/dark-map-2-shape-3.png" alt="Shape">
            </li>
        </ul>
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
                swiperOptions: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    loop: true,
                    grabCursor: true,
                    speed: 1000,
                    autoplay: {
                        delay: 3000
                    },
                    breakpoints: {
                        768: {
                            slidesPerView: 2
                        },
                        992: {
                            slidesPerView: 3
                        }
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
    .testimonial-area-2 {
        .swiper-pagination {
            text-align: center;
        }
    }
</style>