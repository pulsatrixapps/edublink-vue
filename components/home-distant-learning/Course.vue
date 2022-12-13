<template>
    <div class="edu-course-area course-area-2 gap-tb-text bg-lighten03">
        <div class="container">
            <SectionTitle preTitle='Popular Courses' title='Pick A Course To Get Started' alignment='section-center' />
            <div class="row g-5">
                <div 
                    class="col-md-6 col-lg-4" 
                    data-aos-delay="150" 
                    data-aos="fade-up" 
                    data-aos-duration="800" 
                    v-for="course in courseData.courses.slice(0, 3)" 
                    :key="course.id"
                >
                    <div class="edu-course course-style-1 hover-button-bg-white">
                        <div class="inner">
                            <div class="thumbnail">
                                <n-link to="/course/course-details">
                                    <img :src="'/images/course/course-type-01-02/' + course.image" :alt="course.alt">
                                </n-link>
                                <div class="time-top">
                                    <span class="duration"><i class="icon-61"></i>{{ course.duration }}</span>
                                </div>
                            </div>
                            <div class="content">
                                <span class="course-level">{{ course.level }}</span>
                                <h5 class="title">
                                    <n-link to="/course/course-details">{{ course.title }}</n-link>
                                </h5>
                                <div class="course-rating">
                                    <div class="rating">
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                    </div>
                                    <span class="rating-count">({{ course.ratingAvarage }} /{{ course.ratingTotal }} {{ course.ratingTotal > 1 ? 'Ratings' : 'Rating' }})</span>
                                </div>
                                <div class="course-price">${{ course.currentPrice }}</div>
                                <ul class="course-meta">
                                    <li><i class="icon-24"></i>{{ course.lessons }} {{ course.lessons > 1 ? 'Lessons' : 'Lesson' }}</li>
                                    <li><i class="icon-25"></i>{{ course.students }} {{ course.students ? 'Students' : 'Student' }}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="course-hover-content-wrapper">
                            <button class="wishlist-btn"><i class="icon-22"></i></button>
                        </div>
                        <div class="course-hover-content">
                            <div class="content">
                                <button class="wishlist-btn"><i class="icon-22"></i></button>
                                <span class="course-level">{{ course.level }}</span>
                                <h5 class="title">
                                    <n-link to="/course/course-details">{{ course.title }}</n-link>
                                </h5>
                                <div class="course-rating">
                                    <div class="rating">
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                    </div>
                                    <span class="rating-count">({{ course.ratingAvarage }} /{{ course.ratingTotal + course.ratingTotal > 1 ? 'Ratings' : 'Rating' }})</span>
                                </div>
                                <div class="course-price">${{ course.currentPrice }}</div>
                                <p>{{ course.excerpt }}</p>
                                <ul class="course-meta">
                                    <li><i class="icon-24"></i>{{ course.lessons + course.lessons > 1 ? 'Lessons' : 'Lesson' }}</li>
                                    <li><i class="icon-25"></i>{{ course.students + course.students ? 'Students' : 'Student' }}</li>
                                </ul>
                                <n-link to="/course/course-details" class="edu-btn btn-secondary btn-small">Enrolled <i class="icon-4"></i></n-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="course-view-all" data-aos-delay="150" data-aos="fade-up" data-aos-duration="1200">
                <n-link to="/course/course-one" class="edu-btn">Browse more courses <i class="icon-4"></i></n-link>
            </div>
        </div>
    </div>
</template>

<script>
    import courseData from '~/data/course';
    export default {
        components: {
            SectionTitle: () => import('@/components/common/SectionTitle')
        },
        data () {
            return {
                courseData
            }
        }
    }
</script>