<template>
    <div class="why-choose-area-1 gap-top-text">
        <div class="container">
            <div class="row g-5 row--45">
                <div class="col-lg-6">
                    <div class="why-choose-content">
                        <SectionTitle preTitle="Why Choose" preTitleClass="pre-textsecondary" title="Why Choose My Yoga Courses?" subTitle="Magna aliquaenim minim veniam quis nostrud exercitation ullamco laborisLorem ipsum dolor sit amet consectetur." alignment="section-left" />
                        
                        <div class="features-list" data-aos-delay="150" data-aos="fade-up" data-aos-duration="800">
                            <div class="features-box" :class="feature.class" v-for="(feature, i) in features" :key="i">
                                <div class="icon">
                                    <i :class="feature.iconClass"></i>
                                </div>
                                <div class="content">
                                    <h5 class="title">{{ feature.title }}</h5>
                                    <p>{{ feature.details }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="why-choose-gallery">
                        <div class="gallery-thumbnail">
                            <div class="thumbnail thumbnail-1">
                                <img src="/images/others/why-choose-01.jpg" alt="Why Choose">
                            </div>
                            <div 
                                class="thumbnail thumbnail-2 rellax"
                                data-rellax-speed="0.7" 
                                data-rellax-xs-speed="0.7" 
                                data-rellax-mobile-speed="0.5" 
                                data-rellax-tablet-speed="0.5"
                            >
                                <img src="/images/others/why-choose-02.jpg" alt="Why Choose">
                            </div>
                        </div>
                        <ul class="shape-group">
                            <li class="shape-1" data-aos-delay="500" data-aos="fade" data-aos-duration="200">
                                <img src="/images/about/shape-14.png" alt="Shape Images">
                            </li>
                            <li class="shape-2" data-aos-delay="500" data-aos="fade" data-aos-duration="200">
                                <img src="/images/about/shape-10.png" alt="Shape Images">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import parallaxAnimation from '../../common/parallaxAnimation';
    export default {
        components: {
            SectionTitle: () => import('@/components/common/SectionTitle')
        },
        mounted () {
            parallaxAnimation();
        },
        data () {
            return {
                features: [
                    {
                        class: 'color-secondary-style',
                        iconClass: 'icon-81',
                        title: 'Exclusive Program',
                        details: 'Magna aliquaenim minim veniam nostrud exercit ation ullamco laboris.'
                    },
                    {
                        class: 'color-primary-style',
                        iconClass: 'icon-82',
                        title: 'Online Training',
                        details: 'Consectetur adipisicing elit, sed do eiusmod tempor ux incididunt ut labore et dolore.'
                    },
                    {
                        class: 'color-extra05-style',
                        iconClass: 'icon-83',
                        title: 'Individual Care',
                        details: 'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim.'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
    .why-choose-gallery {
        @media #{$sm-layout} {
            padding-bottom: 75px;
        }
        .thumbnail.thumbnail-2 {
            margin-top: -85px;
        }
        .shape-group li.shape-2 {
            bottom: 85px;
            right: 65px;
        }
    }
</style>