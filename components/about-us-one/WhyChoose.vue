<template>
    <section class="why-choose-area-2 section-gap-large">
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
                    <div class="why-choose-box features-box" :class="feature.colorClass">
                        <div class="icon">
                            <i :class="feature.iconClass"></i>
                        </div>
                        <div class="content">
                            <h4 class="title">{{ feature.title }}</h4>
                            <p>{{ feature.details }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="shape-group">
                <li class="shape-5" data-aos-delay="500" data-aos="fade" data-aos-duration="200">
                    <span></span>
                </li>
            </ul>
        </div>
        <ul class="shape-group">
            <MouseMove addClassName="shape-1" dataDepth="1" data-aos-delay="500" data-aos="fade" data-aos-duration="200" />
            <MouseMove addClassName="shape-2" dataDepth="-2" imgSrc="/images/about/shape-13.png" data-aos-delay="500" data-aos="fade" data-aos-duration="200" />
            <MouseMove addClassName="shape-3" dataDepth="-1" data-aos-delay="500" data-aos="fade" data-aos-duration="200" />
            <MouseMove addClassName="shape-4" dataDepth="2" imgSrc="/images/about/shape-40.png" data-aos-delay="500" data-aos="fade" data-aos-duration="200" />
        </ul>
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
                        colorClass: "color-primary-style"
                    },
                    {
                        title: "Life Time Access",
                        details: "Lorem ipsum dolor sit amet conset ur elit sed eiusmod ex tempor inc labore dolore magna.",
                        iconClass: "icon-46",
                        colorClass: "color-secondary-style"
                    },
                    {
                        title: "Expert Instructors",
                        details: "Lorem ipsum dolor sit amet conset ur elit sed eiusmod ex tempor inc labore dolore magna.",
                        iconClass: "icon-47",
                        colorClass: "color-extra08-style"
                    }
                ]
            }
        }
    }
</script>