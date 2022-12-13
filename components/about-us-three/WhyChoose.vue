<template>
    <section class="why-choose-area-4 edu-section-gap">
        <div class="container edublink-animated-shape">
            <SectionTitle preTitle='Why choose edublink' title='The Best <span class="color-secondary">Beneficial</span> Side <br> of EduBlink' alignment='section-center' />
            
            <div class="row g-5">
                <div 
                    class="col-lg-4" 
                    data-aos-delay="150" 
                    data-aos="fade-up" 
                    data-aos-duration="800"
                    v-for="(feature, index) in features" :key="index"
                >
                    <div class="why-choose-box-3 features-box" :class="feature.colorClass">
                        <div class="thumbnail">
                            <img :src="'/images/others/' + feature.imgSrc" :alt="(feature.title) + ' Thumbnail'" />
                        </div>
                        <div class="content">
                            <div class="icon">
                                <i :class="feature.iconClass"></i>
                            </div>
                            <h4 class="title">{{ feature.title }}</h4>
                            <p>{{ feature.details }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="shape-group">
                <li class="shape-1" data-aos-delay="500" data-aos="fade" data-aos-duration="200">
                    <img class="rotateit" src="/images/about/shape-13.png" alt="shape">
                </li>
                <MouseMove addClassName="shape-2" dataDepth="0.85" data-aos-delay="500" data-aos="fade" data-aos-duration="200" />
            </ul>
        </div>
    </section>
</template>

<script>
    export default {
        components: {
            SectionTitle: () => import('@/components/common/SectionTitle'),
            MouseMove: () => import('@/components/animation/MouseMove')
        },
        data() {
            return {
                features: [
                    {
                        title: "High Quality Courses",
                        details: "Lorem ipsum dolor sit amet conset ur elit sed eiusmod ex tempor inc labore dolore magna.",
                        iconClass: "icon-45",
                        imgSrc: "why-choose-03.jpg",
                        colorClass: "color-primary-style"
                    },
                    {
                        title: "Life Time Access",
                        details: "Lorem ipsum dolor sit amet conset ur elit sed eiusmod ex tempor inc labore dolore magna.",
                        iconClass: "icon-46",
                        imgSrc: "why-choose-04.jpg",
                        colorClass: "color-secondary-style"
                    },
                    {
                        title: "Expert Instructors",
                        details: "Lorem ipsum dolor sit amet conset ur elit sed eiusmod ex tempor inc labore dolore magna.",
                        iconClass: "icon-47",
                        imgSrc: "why-choose-05.jpg",
                        colorClass: "color-extra08-style"
                    }
                ]
            }
        }
    }
</script>