<template>
    <div class="edu-course-area course-area-7 svg-image--6">
        <div class="container edublink-animated-shape">
            <SectionTitle preTitle='Popular Courses' preTitleClass='pre-textsecondary' title='Pick A Course To Get Started' alignment='section-center' />
            
            <div class="row g-5">
                <div 
                    class="col-12 col-lg-4 col-md-6" 
                    data-aos-delay="150" 
                    data-aos="fade-up" 
                    data-aos-duration="800" 
                    v-for="course in courseData.kindergartenCourses.slice(0, 3)" :key="course.id"
                >
                    <CourseTypeFive :course="course" />
                </div>
            </div>

            <ul class="shape-group">
                <MouseMove addClassName="shape-1" dataDepth="2" imgSrc="/images/banner/icon-3.png" />
                <MouseMove addClassName="shape-2" dataDepth="-2" imgSrc="/images/banner/icon-2.png" />
            </ul>
        </div>
        <ul class="shape-group">
            <MouseMove addClassName="shape-3" dataDepth="2" imgSrc="/images/banner/icon-4.png" />
        </ul>
    </div>
</template>

<script>
    import courseData from '~/data/course';
    export default {
        components: {
            SectionTitle: () => import('@/components/common/SectionTitle'),
            CourseTypeFive: () => import('@/components/course/CourseTypeFive'),
            MouseMove: () => import('@/components/animation/MouseMove')
        },
        data () {
            return {
                courseData
            }
        }
    }
</script>