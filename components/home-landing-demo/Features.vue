<template>
    <div class="pv-features-area" id="features">
        <div class="container">
            <div class="section-title section-center splash-title">
                <span class="pre-title" data-aos="fade-up" data-aos-duration="1000">TEMPLATE FEATURES</span>
                <h2 class="title" data-aos-delay="100" data-aos="fade-up" data-aos-duration="1000">Get Access to Exclusive <br> Features</h2>
            </div>
            <div class="row row--20 row-cols-1 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2">
                <div 
                    class="col"
                    v-for="(feature, i) in features" 
                    :key="i"
                >
                    <div class="demo-feature">
                        <div class="inner">
                            <div class="icon">
                                <img :src="'/images/preview/' + feature.imageSrc" alt="Feature Thumb" />
                            </div>
                            <h6 class="title" v-html="feature.title"></h6>
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
            SectionTitle: () => import('@/components/common/SectionTitle')
        },
        data () {
            return {
                features: [
                    {
                        imageSrc: 'icon-14.png',
                        title: 'Bootstrap 5 <br> Framework'
                    },
                    {
                        imageSrc: 'icon-15.png',
                        title: 'W3C <br> Validation'
                    },
                    {
                        imageSrc: 'icon-16.png',
                        title: 'Swiper <br> Touch Slider'
                    },
                    {
                        imageSrc: 'icon-20.png',
                        title: 'Speed <br> Performance'
                    },
                    {
                        imageSrc: 'icon-17.png',
                        title: 'Mouse-Move <br> Effect'
                    },
                    {
                        imageSrc: 'icon-18.png',
                        title: 'Google Web <br> Fonts'
                    },
                    {
                        imageSrc: 'icon-19.png',
                        title: 'Fully Responsive <br> Layouts'
                    },
                    {
                        imageSrc: 'icon-21.png',
                        title: 'Well <br> Documented'
                    },
                    {
                        imageSrc: 'icon-22.png',
                        title: 'Magnific <br> Popup'
                    },
                    {
                        imageSrc: 'icon-23.png',
                        title: 'Translation <br> Ready'
                    },
                    {
                        imageSrc: 'icon-24.png',
                        title: 'Fast 5 Star <br> Support'
                    },
                    {
                        imageSrc: 'icon-26.png',
                        title: 'Lifetime <br> Update'
                    },
                    {
                        imageSrc: 'icon-27.png',
                        title: 'Browser <br> Compatibility'
                    },
                    {
                        imageSrc: 'icon-28.png',
                        title: 'Parallax <br> Effect'
                    },
                    {
                        imageSrc: 'icon-29.png',
                        title: 'Developer <br> Friendly'
                    }
                ]
            }
        }
    }
</script>