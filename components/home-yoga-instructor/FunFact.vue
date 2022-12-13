<template>
    <div class="counterup-area-6">
        <div class="container">
            <div class="row g-5">
                <div class="col-12 col-lg-3 col-md-6 col-sm-6" v-for="(counter, i) in funFacts" :key="i">
                    <div class="edu-counterup counterup-style-6">
                        <div class="icon">
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
                        title: 'STUDENT ENROLLED',
                        suffix: 'K'
                    },
                    {
                        number: 32.4,
                        decimal: 1,
                        iconClass: 'icon-47',
                        title: 'CLASS COMPLETED',
                        suffix: 'K'
                    },
                    {
                        number: 100,
                        decimal: null,
                        iconClass: 'icon-49',
                        title: 'SATISFACTION RATE',
                        suffix: '%'
                    },
                    {
                        number: 354,
                        decimal: null,
                        iconClass: 'icon-50',
                        title: 'TOP INSTRUCTORS',
                        suffix: '+'
                    }
                ]
            }
        }
    }
</script>