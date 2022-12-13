<template>
    <div class="section-title" :class="alignment" data-aos-delay="150" data-aos="fade-up" data-aos-duration="800">
        <span class="pre-title" :class="preTitleClass" v-html="preTitle" v-if="preTitle"></span>
        <h2 class="title" v-html="title"></h2>
        <span class="shape-line" v-if="!disableMark"><i class="icon-19"></i></span>
        <p v-html="subTitle" v-if="subTitle"></p>
    </div>
</template>

<script>
    export default {
        props: {
            preTitle: {
                type: String
            },
            preTitleClass: {
                type: String
            },
            title: {
                type: String,
                required: true
            },
            subTitle: {
                type: String
            },
            alignment: {
                type: String
            },
            disableMark: {
                type: Boolean
            }
        }
    }
</script>