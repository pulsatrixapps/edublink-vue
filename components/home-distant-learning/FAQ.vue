<template>
    <div class="edu-faq-area faq-style-1">
        <div class="container">
            <div class="row g-5 row--45">
                <div class="col-lg-6">
                    <div class="edu-faq-gallery">
                        <div class="row g-5">
                            <div class="col-6" data-aos-delay="50" data-aos="fade-right" data-aos-duration="800">
                                <div class="faq-thumbnail thumbnail-1">
                                    <img src="/images/faq/faq-01.jpg" alt="Faq Images">
                                </div>
                            </div>
                            <div class="col-6" data-aos-delay="100" data-aos="fade-left" data-aos-duration="800">
                                <div class="faq-thumbnail thumbnail-2">
                                    <img src="/images/faq/faq-02.jpg" alt="Faq Images">
                                </div>
                            </div>
                            <div class="col-6" data-aos-delay="50" data-aos="fade-right" data-aos-duration="800">
                                <div class="faq-thumbnail thumbnail-3">
                                    <img src="/images/faq/faq-03.jpg" alt="Faq Images">
                                </div>
                            </div>
                            <div class="col-6" data-aos-delay="100" data-aos="fade-left" data-aos-duration="800">
                                <div class="faq-thumbnail thumbnail-4">
                                    <img src="/images/faq/faq-04.jpg" alt="Faq Images">
                                </div>
                            </div>
                        </div>
                        <ul class="shape-group">
                            <MouseMove addClassName="shape-1 shape-light" dataDepth="2" imgSrc="/images/faq/shape-02.png" data-aos-delay="500" data-aos="fade" data-aos-duration="200" />
                            <MouseMove addClassName="shape-1 shape-dark" dataDepth="2" imgSrc="/images/faq/dark-shape-02.png" data-aos-delay="500" data-aos="fade" data-aos-duration="200" />
                            <MouseMove addClassName="shape-2" dataDepth="-2" imgSrc="/images/faq/shape-03.png" data-aos-delay="500" data-aos="fade" data-aos-duration="200" />
                            <MouseMove addClassName="shape-3" dataDepth="2" imgSrc="/images/faq/shape-04.png" data-aos-delay="500" data-aos="fade" data-aos-duration="200" />
                            <MouseMove addClassName="shape-4" dataDepth="-2" imgSrc="/images/faq/shape-05.png" data-aos-delay="500" data-aos="fade" data-aos-duration="200" />
                        </ul>
                    </div>
                </div>
                <div class="col-lg-6" data-aos-delay="100" data-aos="fade-up" data-aos-duration="800">
                    <div class="edu-faq-content">

                        <SectionTitle preTitle="FAQ’s" title='Over 10 Years in <span class="color-secondary">Distant <br> Skill</span> Development' />

                        <AccordionOne />

                        <ul class="shape-group">
                            <MouseMove addClassName="shape-1" dataDepth="1.5" imgSrc="/images/about/shape-02.png" data-aos-delay="500" data-aos="fade" data-aos-duration="200" />
                            <MouseMove addClassName="shape-2" dataDepth="-2.2" data-aos-delay="500" data-aos="fade" data-aos-duration="200" />
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
            SectionTitle: () => import('@/components/common/SectionTitle'),
            AccordionOne: () => import('@/components/AccordionOne'),
            MouseMove: () => import('@/components/animation/MouseMove')
        }
    }
</script>