<template>
    <div class="edu-course-area course-area-5 gap-tb-text">
        <div class="container">
            <SectionTitle preTitle='Popular Courses' title='Pick A Course To Get Started' alignment='section-center' />
            <div class="row g-5">
                <div 
                    class="col-12 col-xl-4 col-lg-6 col-md-6" 
                    v-for="(course, key) in courseData.kitchenCourses.slice(0, 3)" 
                    :key="key"
                    :class="[
                        ( ( key+1 ) % 3 === 0 && key !== 0 ? 'course-style-3-third-item' : undefined ), 
                        ( ( key+1 ) % 2 === 0 && key !== 0 ? 'course-style-3-even' : 'course-style-3-odd' )
                    ]"
                >
                    <div class="edu-course course-style-5">
                        <div class="inner">
                            <div class="thumbnail">
                                <n-link to="/course/course-details">
                                    <img :src="'/images/course/course-type-03/' + course.image" :alt="course.alt">
                                </n-link>
                            </div>
                            <div class="content">
                                <div class="course-price price-round">${{ Math.trunc( course.currentPrice ) }}</div>
                                <span class="course-level">{{ course.category }}</span>
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
                                    <span class="rating-count">({{ course.ratingAvarage }})</span>
                                </div>
                                <p>{{ course.excerpt3 }}</p>
                                <ul class="course-meta">
                                    <li><i class="icon-24"></i>{{ course.lessons }} {{ course.lessons > 1 ? 'Lessons' : 'Lesson' }}</li>
                                    <li><i class="icon-25"></i>{{ course.students }} {{ course.students ? 'Students' : 'Student' }}</li>
                                </ul>
                            </div>
                        </div>

                        <div class="hover-content-aside">
                            <div class="content">
                                <span class="course-level">{{ course.category }}</span>
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
                                    <span class="rating-count">({{ course.ratingAvarage }})</span>
                                </div>
                                <ul class="course-meta">
                                    <li>{{ course.lessons }} {{ course.lessons + course.lessons > 1 ? 'Lessons' : 'Lesson' }}</li>
                                    <li>{{ course.duration }}</li>
                                    <li>{{ course.level }}</li>
                                </ul>
                                <div class="course-feature">
                                    <h6 class="title">What You’ll Learn?</h6>
                                    <ul>
                                        <li v-for="(feature, key) in course.features.slice(0, 3)" :key="key">{{ feature }}</li>
                                    </ul>
                                </div>
                                <div class="button-group">
                                    <a href="#" class="edu-btn btn-medium">Add to Cart</a>
                                    <a href="#" class="wishlist-btn btn-outline-dark"><i class="icon-22"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="course-view-all" data-aos-delay="150" data-aos="fade-up" data-aos-duration="1200">
                <h5 class="view-text">Get the Most Dedicated Kitchen Course from EduBlink. <n-link to="/course/course-one" class="btn-transparent">All Courses <i class="icon-4"></i></n-link></h5>
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