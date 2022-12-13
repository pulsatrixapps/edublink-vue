<template>
    <div class="edu-course course-style-1 hover-button-bg-white" :class="extraClass">
        <div class="inner">
            <div class="thumbnail">
                <n-link to="/course/course-details">
                    <img :src="'/images/course/course-type-01/' + course.image" :alt="course.alt">
                </n-link>
                <div class="time-top">
                    <span class="duration"><i class="icon-61"></i>{{ course.duration }}</span>
                </div>
            </div>
            <div class="content">
                <span class="course-level">{{ course.level }}</span>
                <h6 class="title">
                    <n-link to="/course/course-details">{{ course.title }}</n-link>
                </h6>
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
                <h6 class="title">
                    <n-link to="/course/course-details">{{ course.title }}</n-link>
                </h6>
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
</template>

<script>
    export default {
        props: ['extraClass', 'course']
    }
</script>