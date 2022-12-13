<template>
    <div class="edu-faq-area faq-style-4">
        <div class="container">
            <div class="row g-5 row--45 align-items-end">
                <div class="col-lg-6">
                    <div class="edu-faq-content">
                        <SectionTitle preTitle='Education For Everyone' preTitleClass='pre-textsecondary' title='Ages We Meet Kids Where They Are' alignment='section-left' />

                        <div class="faq-accordion" id="faq-accordion" data-aos-delay="150" data-aos="fade-up" data-aos-duration="800">
                            <div class="accordion">
                                <div class="accordion-item">
                                    <h5 class="accordion-header">
                                        <button class="accordion-button style-extra02" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true">
                                            First School (1 - 2 Years)
                                        </button>
                                    </h5>
                                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#faq-accordion">
                                        <div class="accordion-body">
                                            <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eius mod ex tempor incididunt labore dolore magna aliquaenim ad minim eniam.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h5 class="accordion-header">
                                        <button class="accordion-button collapsed style-extra05" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false">
                                            Preschool (2 – 3 years)
                                        </button>
                                    </h5>
                                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                                        <div class="accordion-body">
                                            <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eius mod ex tempor incididunt labore dolore magna aliquaenim ad minim eniam.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h5 class="accordion-header">
                                        <button class="accordion-button collapsed style-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false">
                                            Kindergarten (3 – 5 years)
                                        </button>
                                    </h5>
                                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                                        <div class="accordion-body">
                                            <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eius mod ex tempor incididunt labore dolore magna aliquaenim ad minim eniam.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="faq-thumbnail">
                        <div class="thumbnail">
                            <img src="/images/faq/faq-08.jpg" alt="Faq Images">
                        </div>
                        <ul class="shape-group">
                            <MouseMove addClassName="shape-1" dataDepth="1" imgSrc="/images/about/shape-12.png" />
                            <MouseMove addClassName="shape-2" dataDepth="-1" imgSrc="/images/about/shape-13.png" />
                            <MouseMove addClassName="shape-3" dataDepth="1" imgSrc="/images/faq/shape-15.png" />
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
            MouseMove: () => import('@/components/animation/MouseMove')
        }
    }
</script>