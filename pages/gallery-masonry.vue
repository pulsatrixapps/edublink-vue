<template>
    <div id="main-wrapper" class="main-wrapper">
        
        <HeaderOne />

        <BreadCrumbTwo pageTitle='Gallery Masonry' title='Gallery' />
        
        <div class="edu-gallery-area edu-section-gap">
            <div class="container">
                <div id="masonry-gallery" class="edublink-vue-gallery-masonry gallery-grid-wrap">
                    <masonry
                        :cols=breakPoints
                    >
                        <a
                            class="edu-gallery-grid masonry-item items"
                            v-for="( item, key ) in items"
                            :key="key"
                            @click="index = key"
                        >
                            <div class="thumbnail">
                                <img :src="item.thumb" alt="Gallery Image" />
                            </div>
                            <div class="zoom-icon">
                                <i class="icon-69"></i>
                            </div>
                        </a>
                    </masonry>
                </div>
            </div>
        </div>

        <CTAOneAlter />

        <FooterOne />
        
        <CoolLightBox
            :items="items"
            :index="index"
            :fullScreen="true"
            :effect="'fade'"
            @close="index = null"
        >
        </CoolLightBox>
    </div>
</template>

<script>
    export default {
        components: {
            HeaderOne: () => import("@/components/header/HeaderOne"),
            BreadCrumbTwo: () => import('@/components/common/BreadCrumbTwo'),
            CTAOneAlter: () => import("@/components/cta/CTAOneAlter"),
            FooterOne: () => import("@/components/footer/FooterOne")
        },
        data() {
            return {
                index: null,
                breakPoints: {
                    default: 3,
                    991: 2,
                    767: 1
                },
                items: [
                    {
                        thumb: '/images/gallery/gallery-10.jpg',
                        src: '/images/gallery/gallery-10.jpg'
                    },
                    {
                        thumb: '/images/gallery/gallery-01.jpg',
                        src: '/images/gallery/gallery-01.jpg'
                    },
                    {
                        thumb: '/images/gallery/gallery-06.jpg',
                        src: '/images/gallery/gallery-06.jpg'
                    },
                    {
                        thumb: '/images/gallery/gallery-04.jpg',
                        src: '/images/gallery/gallery-04.jpg'
                    },
                    {
                        thumb: '/images/gallery/gallery-05.jpg',
                        src: '/images/gallery/gallery-05.jpg'
                    },
                    {
                        thumb: '/images/gallery/gallery-08.jpg',
                        src: '/images/gallery/gallery-08.jpg'
                    },
                    {
                        thumb: '/images/gallery/gallery-07.jpg',
                        src: '/images/gallery/gallery-07.jpg'
                    },
                    {
                        thumb: '/images/gallery/gallery-11.jpg',
                        src: '/images/gallery/gallery-11.jpg'
                    },
                    {
                        thumb: '/images/gallery/gallery-09.jpg',
                        src: '/images/gallery/gallery-09.jpg'
                    }
                ]
            }
        },
        head() {
            return {
                title: 'Gallery Masonry'
            }
        }
    }
</script>