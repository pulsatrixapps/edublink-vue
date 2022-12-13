<template>
    <section class="why-choose-area-3 edu-section-gap">
        <div class="container">
            <div class="row row--45">
                <div class="section-title-flex section-title" data-aos-delay="150" data-aos="fade-up" data-aos-duration="800">
                    <div class="left-content">
                        <h2 class="title">We Providing The <br> Best <span class="color-secondary">Quality Online </span> Courses</h2>
                        <span class="shape-line"><i class="icon-19"></i></span>
                    </div>
                    <div class="right-content">
                        <p>Lorem ipsum dolor sit amet cons etur adipisicing elit sed do eiusm aut tempor incididunt labore dolore magna aliqua quis nostrud ex ertation lamcolab oris aliquip.</p>
                    </div>
                </div>
            </div>

            <div class="row g-5">
                <div 
                    class="col-lg-4" 
                    data-aos-delay="150" 
                    data-aos="fade-up" 
                    data-aos-duration="800"
                    v-for="(feature, index) in features" :key="index"
                >
                    <div class="why-choose-box-2 features-box" :class="feature.colorClass">
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
        </div>
        <ul class="shape-group">
            <MouseMove addClassName="shape-1" dataDepth=".8" />
            <MouseMove addClassName="shape-2" dataDepth="-2" imgSrc="/images/about/shape-13.png" />
            <li class="shape-3">
                <img class="rellax"
                    data-rellax-speed="-1.3" 
                    data-rellax-xs-speed="-1.3" 
                    data-rellax-mobile-speed="-0.5" 
                    data-rellax-tablet-speed="-0.5"
                    src="/images/faq/shape-12.png" 
                    alt="shape"
                />
            </li>
        </ul>
    </section>
</template>

<script>
    import parallaxAnimation from '../../common/parallaxAnimation';
    export default {
        components: {
            MouseMove: () => import('@/components/animation/MouseMove')
        },
        mounted () {
            parallaxAnimation();
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