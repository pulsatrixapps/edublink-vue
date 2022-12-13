<template>
    <div class="edu-course course-style-3" :class="extraClass">
        <div class="inner">
            <div class="thumbnail">
                <n-link to="/course/course-details">
                    <img :src="'/images/course/course-type-02/' + course.image" :alt="course.alt">
                </n-link>
                <div class="time-top">
                    <span class="duration"><i class="icon-61"></i>{{ course.type }}</span>
                </div>
            </div>
            <div class="content">
                <span class="course-level">{{ course.category }}</span>
                <h5 class="title">
                    <n-link to="/course/course-details">{{ course.title }}</n-link>
                </h5>
                <p>{{ course.excerpt }}</p>
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
                <div class="read-more-btn">
                    <n-link to="/course/course-details" class="edu-btn btn-small btn-secondary">Learn More <i class="icon-4"></i></n-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['extraClass', 'course']
    }
</script>