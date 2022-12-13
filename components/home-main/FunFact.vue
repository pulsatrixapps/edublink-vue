<template>
    <div class="counterup-area-2">
        <div class="container">
            <div class="row g-5 justify-content-center">
                <div class="col-lg-8">
                    <div class="counterup-box-wrap">
                        <div class="counterup-box">
                            <div 
                                class="edu-counterup counterup-style-2"
                                v-for="(counter, i) in funFacts" 
                                :key="i"
                            >
                                <h2 class="counter-item count-number" :class="counter.class">
                                    <FunFact :number="counter.number" :decimal="counter.decimal" :suffix="counter.suffix" />
                                </h2>
                                <h6 class="title">{{ counter.title }}</h6>
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
    export default {
        components: { 
            FunFact: () => import('@/components/FunFact'),
            MouseMove: () => import('@/components/animation/MouseMove')
        },
        data () {
            return {
                funFacts: [
                    {
                        number: 19.3,
                        decimal: 1,
                        class: 'primary-color',
                        title: 'STUDENT ENROLLED',
                        suffix: 'K'
                    },
                    {
                        number: 12.4,
                        decimal: 1,
                        class: 'secondary-color',
                        title: 'CLASS COMPLETED',
                        suffix: 'K'
                    },
                    {
                        number: 300,
                        decimal: null,
                        class: 'extra05-color',
                        title: 'TOP INSTRUCTORS',
                        suffix: '+'
                    },
                    {
                        number: 100,
                        decimal: null,
                        class: 'extra02-color',
                        title: 'SATISFACTION RATE',
                        suffix: '%'
                    }
                ]
            }
        }
    }
</script>