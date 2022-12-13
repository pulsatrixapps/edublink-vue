<template>
    <div id="main-wrapper" class="main-wrapper">
        
        <HeaderOne />

        <BreadCrumbTwo pageTitle='Instructor Profile' title='Instructor Profile' />

        <div class="edu-team-details-area section-gap-equal">
            <div class="container">
                <div class="row row--40">
                    <div class="col-lg-4">
                        <div class="team-details-thumb">
                            <div class="thumbnail">
                                <img src="/images/team/team-02/team-07.jpg" alt="team">
                            </div>
                            <ul class="social-share">
                                <li><a href="#"><i class="icon-share-alt"></i></a></li>
                                <li><a href="#"><i class="icon-facebook"></i></a></li>
                                <li><a href="#"><i class="icon-twitter"></i></a></li>
                                <li><a href="#"><i class="icon-linkedin2"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="team-details-content">
                            <div class="main-info">
                                <span class="subtitle">Instructor</span>
                                <h3 class="title">Edward Narton</h3>
                                <span class="designation">Developer and Teacher</span>
                                <ul class="team-meta">
                                    <li><i class="icon-25"></i>20 Students</li>
                                    <li>
                                        <div class="rating">
                                            <i class="icon-23"></i>
                                            <i class="icon-23"></i>
                                            <i class="icon-23"></i>
                                            <i class="icon-23"></i>
                                            <i class="icon-23"></i>
                                        </div>
                                        <span class="rating-count">(720 Rating)</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="bio-describe">
                                <h4 class="title">About Me</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur elit sed do eius mod tempor incidid labore dolore magna aliqua. enim ad minim eniam quis nostrud exercitation ullamco laboris nisi aliquip ex commodo consequat. duis aute irure dolor in repreed ut perspiciatis unde omnis iste natus error sit voluptat em acus antium.</p>
                                <p>doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi arch itecto beatae vitae dicta sunt explicabo.</p>
                            </div>
                            <div class="contact-info">
                                <h4 class="title">Contact Me</h4>
                                <ul>
                                    <li><span>Address:</span>North Helenavile, FV77 8WS</li>
                                    <li><span>Email:</span><a href="mailto:edublink@example.com" target="_blank">edublink@example.com</a></li>
                                    <li><span>Phone:</span><a href="tel:+37(417)683-4409">+37 (417) 683-4409</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="edu-course-area course-area-1 edu-section-gap bg-lighten01">
            <div class="container">
                <SectionTitle title='My Popular Courses' alignment='section-center' />

                <div class="row g-5">
                    <div 
                        class="col-md-6 col-lg-4 col-xl-3" 
                        data-aos-delay="100" 
                        data-aos="fade-up" 
                        data-aos-duration="800" 
                        v-for="course in courseData.courses.slice(0, 8)" 
                        :key="course.id"
                    >
                        <CourseTypeOne :course="course" />
                    </div>
                </div>
            </div>
        </div>

        <FooterOne />
    </div>
</template>

<script>
    import courseData from '~/data/course';
    export default {
        components: {
            HeaderOne: () => import("@/components/header/HeaderOne"),
            BreadCrumbTwo: () => import('@/components/common/BreadCrumbTwo'),
            SectionTitle: () => import('@/components/common/SectionTitle'),
            CourseTypeOne: () => import('@/components/course/CourseTypeOne'),
            FooterOne: () => import("@/components/footer/FooterOne")
        },
        data () {
            return {
                courseData
            }
        },
        head() {
            return {
                title: 'Instructor Profile'
            }
        }
    }
</script>