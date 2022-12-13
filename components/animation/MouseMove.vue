<template>
    <li class="scene" :class='addClassName'>
        <span
            :data-depth="dataDepth" 
            v-if="imgSrc" 
        >
            <img 
                :src='imgSrc' 
                :data-depth="dataDepth" 
                alt="Mouse Move Image" 
            />
        </span>
        <span :data-depth="dataDepth" v-else></span>
    </li>
</template>

<script>
    import mouseMove from '../../common/mouseMoveAnimation';
    export default {
        props: {
            addClassName: String, 
            imgSrc: String, 
            dataDepth: String
        },
        mounted () {
            mouseMove();
        }
    }
</script>