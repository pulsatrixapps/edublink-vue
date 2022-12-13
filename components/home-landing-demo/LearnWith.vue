<template>
    <div class="pv-course-details-area bg-image">
        <div class="wrapper">
            <div class="container-custom">
                <div class="row align-items-center">
                    <div class="col-xl-5 col-lg-6">
                        <div class="course-content">
                            <div class="section-title section-left splash-title">
                                <span class="pre-title" data-aos="fade-up" data-aos-duration="1000">Online Course</span>
                                <h2 class="title" data-aos-delay="100" data-aos="fade-up" data-aos-duration="1000">Learn Your Online Course Easily With EduBlink</h2>
                                <p data-aos-delay="100" data-aos="fade-up" data-aos-duration="1000">Users can check up their active courses, update their bio, completed courses, track their progress easily and many more.</p>
                                <div data-aos-delay="400" data-aos="fade-up" data-aos-duration="1000">
                                    <n-link to="/course/course-details" class="edu-btn" target="_blank">Course Details <i class="icon-4"></i></n-link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-7 col-lg-6">
                        <div class="course-thumbnail">
                            <img src="/images/preview/course-details.png" class="course-details-main" data-aos-delay="200" data-aos="fade" data-aos-duration="800" alt="Course Details">
                            <img src="/images/preview/instructor.png" class="course-instructor" data-aos-delay="500" data-aos="fade-right" data-aos-duration="1000" alt="Course Instructor">

                            <ul class="shape-group">
                                <MouseMove addClassName="shape-1" dataDepth="-2" imgSrc="/images/about/shape-13.png" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" />
                                <li class="shape-2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000">
                                    <img class="rotateit" src="/images/counterup/shape-02.png" alt="Shape">
                                </li>
                                <MouseMove addClassName="shape-3" dataDepth="1.5" imgSrc="/images/counterup/shape-04.png" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" />
                                <MouseMove addClassName="shape-4" dataDepth="-1.5" imgSrc="/images/counterup/shape-05.png" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" />
                            </ul>
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
            MouseMove: () => import('@/components/animation/MouseMove')
        }
    }
</script>