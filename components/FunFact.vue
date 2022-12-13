<template>
    <span v-observe-visibility="{callback: visibilityChanged, once: true}">
        <countTo
            :startVal="startVal ? startVal : 0"
            :endVal=number
            :duration="duration ? duration : 3000"
            :autoplay="true"
            :decimals ="decimal ? decimal : null"
            v-if="isVisible"
        >
        </countTo>
        <span class="edu-vue-count-suffix" v-if="suffix">{{ suffix }}</span>
    </span>
</template>

<script>
    import countTo from 'vue-count-to';
    export default {
        props: ['number', 'decimal', 'suffix', 'duration', 'startVal'],
        components: {
            countTo
        },
        data() {
            return {
                isVisible: false
            }
        },
        methods: {
            visibilityChanged ( isVisible ) {
                this.isVisible = isVisible;
            }
        }
    }
</script>