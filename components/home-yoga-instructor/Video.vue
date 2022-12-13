<template>
    <div>
        <div class="video-area-3">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-9">
                        <div class="video-gallery">
                            <div class="thumbnail">
                                <img src="/images/others/video-02.jpg" alt="Thumb">
                                <span v-for="( _, imageIndex ) in items" :key="imageIndex">
                                    <a @click="index = imageIndex" class="video-play-btn video-popup-activation">
                                        <i class="icon-18"></i>
                                    </a>
                                </span>
                            </div>
                            <ul class="shape-group">
                                <li class="shape-1">
                                    <img class="rotateit" src="/images/about/shape-10.png" alt="Shape">
                                </li>
                                <li class="shape-2">
                                    <img src="/images/about/shape-29.png" alt="Shape">
                                </li>
                                <li class="shape-3">
                                    <img class="rotateit" src="/images/about/shape-31.png" alt="Shape">
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <CoolLightBox
            :items="items"
            :index="index"
            @close="index = null"
        >
        </CoolLightBox>
    </div>
</template>

<script>
    export default {
        components: {
            MouseMove: () => import('@/components/animation/MouseMove')
        },
        data () {
            return {
                items: [
                    {
                        src: "https://www.youtube.com/watch?v=PICj5tr9hcc"
                    }
                ],
                index: null
            }
        }
    }
</script>