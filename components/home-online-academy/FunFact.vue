<template>
    <div class="counterup-area-3 gap-bottom-equal">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-3 col-sm-6" v-for="(counter, i) in funFacts" :key="i">
                    <div class="edu-counterup counterup-style-3" :class=" i % 3 === 0 && i !== 0 ? 'border-none' : undefined">
                        <h2 class="counter-item count-number" :class="counter.class">
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
                        class: 'primary-color',
                        title: 'STUDENT ENROLLED',
                        suffix: 'K'
                    },
                    {
                        number: 32.4,
                        decimal: 1,
                        class: 'secondary-color',
                        title: 'CLASS COMPLETED',
                        suffix: 'K'
                    },
                    {
                        number: 100,
                        decimal: null,
                        class: 'extra02-color',
                        title: 'SATISFACTION RATE',
                        suffix: '%'
                    },
                    {
                        number: 354,
                        decimal: null,
                        class: 'extra05-color',
                        title: 'TOP INSTRUCTORS',
                        suffix: '+'
                    }
                ]
            }
        }
    }
</script>