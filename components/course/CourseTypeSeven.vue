<template>
    <div class="edu-course course-style-4 course-style-9" :class="extraClass">
        <div class="inner">
            <div class="thumbnail">
                <n-link to="/course/course-details">
                    <img :src="'/images/course/course-type-06/' + course.image" :alt="course.alt">
                </n-link>
            </div>
            <div class="content">
                <div class="course-price">${{ course.currentPrice }}</div>
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
                <p>{{ course.excerpt2 }}</p>
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
                    <li>{{ course.lessons }} {{ course.lessons > 1 ? 'Lessons' : 'Lesson' }}</li>
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
</template>

<script>
    export default {
        props: ['extraClass', 'course']
    }
</script>