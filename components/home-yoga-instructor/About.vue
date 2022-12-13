<template>
    <div class="edu-section-gap edu-about-area about-style-5">
        <div class="container">
            <SectionTitle preTitle='About' preTitleClass='pre-textsecondary' title='Hi! I am <span class="color-primary">Simon Baker</span> <br> and I Offer to Develope Your Skill <br> Through Yoga' alignment='section-center' />

            <div class="row g-5 align-items-center">
                <div class="col-lg-6">
                    <div class="about-image-gallery">
                        <img class="main-img-1" src="/images/about/about-08.jpg" data-aos-delay="150" data-aos="fade" data-aos-duration="800" alt="About Image">
                        <ul class="shape-group">
                            <li class="shape-1" data-aos-delay="500" data-aos="fade" data-aos-duration="200">
                                <img class="rotateit" src="/images/about/shape-09.png" alt="Shape">
                            </li>
                            <li class="shape-2" data-aos-delay="500" data-aos="fade" data-aos-duration="200">
                                <img class="rotateit" src="/images/about/shape-10.png" alt="Shape">
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="about-content" data-aos-delay="150" data-aos="fade-up" data-aos-duration="800">
                        <p>Magna aliquaenim minim veniam quis nostrud exercitation ullamco laborisLorem ipsum dolor sit amet consectetur adipisicing elit sed do eius tempor incididunt labore citation</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <ul class="features-list">
                            <li>Cooking award achived</li>
                            <li>Available online courses</li>
                            <li>Online Certification</li>
                        </ul>
                        <n-link to="/course/course-one" class="edu-btn">Get Start Today <i class="icon-4"></i></n-link>
                    </div>
                </div>
            </div>
        </div>
        
        <ul class="shape-group">
            <li class="shape-1" data-aos-delay="500" data-aos="fade" data-aos-duration="200">
                <img class="d-block-shape-light" src="/images/about/shape-20.png" alt="Shape">
                <img class="d-none-shape-dark" src="/images/about/dark-shape-20.png" alt="Shape">
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        components: {
            SectionTitle: () => import('@/components/common/SectionTitle')
        }
    }
</script>

<style lang="scss">
    .about-style-5 {
        .map-shape-dark {
            display: none;
        }
    }

</style>