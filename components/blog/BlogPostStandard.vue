<template>
    <div class="edu-blog blog-style-4">
        <div class="inner">
            <div class="thumbnail">
                <div class="blog-gallery-activation" v-if="blogInfo.slider">
                    <swiper class="swiper" :options="swiperOptions">
                        <div 
                            class="swiper-slide"
                            v-for="(sliderThumb, i) in blogInfo.slider"
                            :key="i"
                        >
                            <n-link to="/blog/blog-details">
                                <img :src="'/images/blog/blog-standard/' + sliderThumb" :alt="blogInfo.alt">
                            </n-link>
                        </div>
                    </swiper>

                    <div class="swiper-navigation">
                        <div class="swiper-btn-nxt">
                            <i class="icon-west"></i>
                        </div>
                        <div class="swiper-btn-prv">
                            <i class="icon-east"></i>
                        </div>
                    </div>
                </div>

                <n-link to="/blog/blog-details" v-else>
                    <img :src="'/images/blog/blog-standard/' + blogInfo.imgSrc" :alt="blogInfo.alt">
                </n-link>
                <span v-for="( _, imageIndex ) in blogInfo.video" :key="imageIndex">
                    <a @click="index = imageIndex" class="video-play-btn video-popup-activation">
                        <i class="icon-18"></i>
                    </a>
                </span>
            </div>
            <div class="content">
                <div class="category-wrap">
                    <n-link to="/blog/blog-masonry" class="blog-category">{{ blogInfo.category }}</n-link>
                </div>
                <h3 class="title">
                    <n-link to="/blog/blog-details">{{ blogInfo.title }}</n-link>
                </h3>
                <ul class="blog-meta">
                    <li><i class="icon-27"></i>{{ blogInfo.date }}</li>
                    <li><i class="icon-28"></i>{{ blogInfo.comment }}</li>
                </ul>
                <p>{{ blogInfo.excerpt3 }}</p>
                <div class="read-more-btn">
                    <n-link to="/blog/blog-details" class="edu-btn btn-border btn-medium">
                        Learn More <i class="icon-4"></i>
                    </n-link>
                </div>
            </div>
        </div>
        <CoolLightBox
            :items="blogInfo.video !== undefined ? blogInfo.video : []"
            :index="index"
            @close="index = null"
        >
        </CoolLightBox>
    </div>
</template>

<script>
    export default {
        props: ['blogInfo'],
        data() {
            return {
                index: null,
                swiperOptions: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    loop: true,
                    pagination: false,
                    grabCursor: true,
                    speed: 1000,
                    autoplay: {
                        delay: 3000
                    },
                    navigation: {
                        nextEl: ".swiper-btn-nxt",
                        prevEl: ".swiper-btn-prv"
                    }
                }
            }
        }
    }
</script>

<style>
    .blog-gallery-activation {
        position: relative;
    }
</style>