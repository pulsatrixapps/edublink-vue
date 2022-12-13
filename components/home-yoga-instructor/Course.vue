<template>
    <div class="edu-course-area course-area-6 edu-section-gap bg-lighten01">
        <div class="container">
            <SectionTitle preTitle='Popular Courses' preTitleClass='pre-textsecondary' title='Pick A Course To Get Started' alignment='section-center' />
            
            <swiper class="course-activation swiper" :options="swiperOptions">
                <div 
                    class="swiper-slide"
                    v-for="course in courseData.yogaCourses.slice(0, 4)" 
                    :key="course.id"
                >
                    <CourseTypeEight :course="course" />
                </div>
            </swiper>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
    import courseData from '~/data/course';
    export default {
        components: {
            SectionTitle: () => import('@/components/common/SectionTitle'),
            CourseTypeEight: () => import('@/components/course/CourseTypeEight')
        },
        data () {
            return {
                courseData,
                swiperOptions: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    loop: true,
                    grabCursor: true,
                    speed: 1000,
                    autoplay: {
                        delay: 3000
                    },
                    breakpoints: {
                        768: {
                            slidesPerView: 2
                        },
                        992: {
                            slidesPerView: 3
                        }
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
    .course-area-6 {
        .swiper-pagination {
            position: absolute;
            width: 100%;
            text-align: center;
            left: 0;
            bottom: 120px;
        }
    }
</style>