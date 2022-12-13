<template>
    <div class="counterup-area-8 gap-lg-bottom-equal">
        <div class="container">
            <div class="row g-5">
                <div 
                    class="col-lg-3 col-sm-6" 
                    v-for="(counter, i) in funFacts" 
                    :key="i"
                >
                    <div class="edu-counterup counterup-style-4">
                        <div class="icon" :class="counter.class">
                            <i :class="counter.iconClass"></i>
                        </div>
                        <h2 class="counter-item count-number">
                            <FunFact :number="counter.number" :decimal="counter.decimal" :suffix="counter.suffix" />
                        </h2>
                        <h6 class="title">{{ counter.title }}</h6>
                    </div>
                </div>
            </div>
        </div>
        <ul class="shape-group">
            <li class="shape-1" data-aos-delay="500" data-aos="fade" data-aos-duration="200">
                <img src="/images/others/map-shape-3.png" alt="Shape">
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        components: { 
            FunFact: () => import('@/components/FunFact')
        },
        data () {
            return {
                funFacts: [
                    {
                        number: 29.3,
                        decimal: 1,
                        iconClass: 'icon-48',
                        class: 'primary-color',
                        title: 'STUDENT ENROLLED',
                        suffix: 'K'
                    },
                    {
                        number: 32.4,
                        decimal: 1,
                        iconClass: 'icon-47',
                        class: 'secondary-color',
                        title: 'CLASS COMPLETED',
                        suffix: 'K'
                    },
                    {
                        number: 100,
                        decimal: null,
                        iconClass: 'icon-49',
                        class: 'extra08-color',
                        title: 'SATISFACTION RATE',
                        suffix: '%'
                    },
                    {
                        number: 354,
                        decimal: null,
                        iconClass: 'icon-50',
                        class: 'extra05-color',
                        title: 'TOP INSTRUCTORS',
                        suffix: '+'
                    }
                ]
            }
        }
    }
</script>