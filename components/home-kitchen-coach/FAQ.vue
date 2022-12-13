<template>
    <div class="edu-faq-area faq-style-3 gap-bottom-equal">
        <div class="container">
            <div class="row g-5 row--45">
                <div class="col-lg-6" data-aos-delay="150" data-aos="fade-up" data-aos-duration="800">
                    <div class="edu-faq-content">
                        <div class="section-title section-left">
                            <span class="pre-title">FAq’s</span>
                            <h2 class="title">Frequently Asked Questions.</h2>
                            <span class="shape-line"><i class="icon-19"></i></span>
                        </div>
                        
                        <AccordionOne />
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="edu-faq-gallery">
                        <div class="faq-thumbnail thumbnail-1" data-aos-delay="50" data-aos="fade-left" data-aos-duration="800">
                            <img src="/images/faq/faq-07.jpg" alt="Faq Images">
                        </div>
                        <ul class="shape-group">
                            <MouseMove addClassName="shape-1" dataDepth="1.85" imgSrc="/images/faq/shape-12.png" data-aos-delay="500" data-aos="fade" data-aos-duration="200" />
                            <MouseMove addClassName="shape-2" dataDepth="-1.85" imgSrc="/images/faq/shape-04.png" data-aos-delay="500" data-aos="fade" data-aos-duration="200" />
                            <MouseMove addClassName="shape-3" dataDepth="1.5" imgSrc="/images/faq/shape-10.png" data-aos-delay="500" data-aos="fade" data-aos-duration="200" />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            AccordionOne: () => import('@/components/AccordionOne'),
            MouseMove: () => import('@/components/animation/MouseMove')
        }
    }
</script>