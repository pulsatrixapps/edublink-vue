<template>
    <div ref="CounterUp1" class="counterup-area-7 section-gap-equal">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-5">
                    <div class="counterup-content">
                        <SectionTitle preTitle='Fun Facts' title='The Learge <span class="color-secondary">Number</span> of Counting' subTitle='Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor incididunt labore dolore magna aliquaenim ad minim.' alignment='section-left' />
                    </div>
                </div>

                <div class="col-lg-7">
                    <div class="counterup-box-wrap">
                        <div class="counterup-box">
                            <div class="edu-counterup counterup-style-2">
                                <h2 class="counter-item count-number primary-color">
                                    <countTo
                                        ref="Ref1"
                                        :startVal="0"
                                        :endVal="19.3"
                                        :duration="3000"
                                        :autoplay=true
                                        :decimals =1
                                    >
                                    </countTo>
                                    <span class="edu-vue-count-suffix">K</span>
                                </h2>
                                <h6 class="title">Student Enrolled</h6>
                            </div>
                            <div class="edu-counterup counterup-style-2">
                                <h2 class="counter-item count-number secondary-color">
                                    <countTo
                                        ref="Ref2"
                                        :startVal="0"
                                        :endVal="12.4"
                                        :duration="3000"
                                        :autoplay=true
                                        :decimals =1
                                    >
                                    </countTo>
                                    <span class="edu-vue-count-suffix">K</span>
                                </h2>
                                <h6 class="title">Class Completed</h6>
                            </div>
                            <div class="edu-counterup counterup-style-2">
                                <h2 class="counter-item count-number extra05-color">
                                    <countTo
                                        ref="Ref4"
                                        :startVal="0"
                                        :endVal="300"
                                        :duration="3000"
                                        :autoplay=true
                                    >
                                    </countTo>
                                    <span class="edu-vue-count-suffix">+</span>
                                </h2>
                                <h6 class="title">Top Instructors</h6>
                            </div>
                            <div class="edu-counterup counterup-style-2">
                                <h2 class="counter-item count-number extra02-color">
                                    <countTo
                                        ref="Ref3"
                                        :startVal="0"
                                        :endVal="100"
                                        :duration="3000"
                                        :autoplay=true
                                    >
                                    </countTo>
                                    <span class="edu-vue-count-suffix">%</span>
                                </h2>
                                <h6 class="title">Satisfaction Rate</h6>
                            </div>
                        </div>
                        <ul class="shape-group">
                            <MouseMove addClassName="shape-1" dataDepth="-1.6" data-aos-delay="100" data-aos="fade" data-aos-duration="100" imgSrc="/images/about/shape-13.png" />
                            <MouseMove addClassName="shape-3" dataDepth="1.6" data-aos-delay="100" data-aos="fade" data-aos-duration="100" imgSrc="/images/counterup/shape-04.png" />
                            <MouseMove addClassName="shape-4" dataDepth="-1.6" data-aos-delay="100" data-aos="fade" data-aos-duration="100" imgSrc="images/counterup/shape-05.png" />
                            <li class="shape-2">
                                <img class="rotateit" src="/images/counterup/shape-02.png" alt="Shape">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import countTo from 'vue-count-to';
    export default {
        components: {
            countTo,
            SectionTitle: () => import('@/components/common/SectionTitle'),
            MouseMove: () => import('@/components/animation/MouseMove')
        },
        data() {
            return { 
                countStart: false 
            }
        },
        methods: {
            startCounter() {
                this.$refs.Ref1.start();
                this.$refs.Ref2.start();
                this.$refs.Ref3.start();
                this.$refs.Ref4.start();
                this.countStart = true;
            }
        },
        mounted() {
            let counterUpTrigger = this.$refs.CounterUp1;
            window.addEventListener( 'scroll', () => {
                if ( counterUpTrigger && ! this.countStart ) {
                    if ( window.pageYOffset > counterUpTrigger.offsetTop - 300 ) {
                        this.startCounter();
                    }
                }
            } )
        }
    }
</script>