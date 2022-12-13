<template>
    <div class="pv-demo-counterup">
        <div class="container">
            <div class="counterup-wrap">
                <div class="row">
                    <div 
                        class="col-sm-4"
                        v-for="(counter, i) in funFacts" 
                        :key="i"
                    >
                        <div class="edu-counterup counterup-style-1" :class="counter.extraClass">
                            <h2 class="counter-item count-number" :class="counter.class">
                                <FunFact :number="counter.number" :decimal="counter.decimal" :suffix="counter.suffix" />
                            </h2>
                            <span class="title">{{ counter.title }}</span>
                        </div>
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
                        number: 7,
                        decimal: null,
                        class: 'primary-color',
                        title: 'Home Pages',
                        suffix: '+',
                        extraClass: 'border-end'
                    },
                    {
                        number: 50,
                        decimal: null,
                        class: 'secondary-color',
                        title: 'Inner Pages',
                        suffix: '+',
                        extraClass: 'border-end'
                    },
                    {
                        number: 260,
                        decimal: null,
                        class: 'extra02-color',
                        title: 'UI Elements',
                        suffix: '+'
                    }
                ]
            }
        }
    }
</script>