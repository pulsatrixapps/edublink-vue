<template>
    <div class="edu-course course-style-7" :class="course.colorClass">
        <div class="inner">
            <div class="thumbnail">
                <n-link to="/course/course-details">
                    <img :src="'/images/course/course-type-05/' + course.image" :alt="course.alt">
                </n-link>
                <div class="course-price price-round">${{ course.currentPrice }}</div>
            </div>
            <div class="content">
                <span class="course-level">{{ course.category }}</span>
                <h5 class="title">
                    <n-link to="/course/course-details">{{ course.title }}</n-link>
                </h5>
                <ul class="course-meta">
                    <li><i class="icon-24"></i>{{ course.lessons }} {{ course.lessons > 1 ? 'Lessons' : 'Lesson' }}</li>
                    <li><i class="icon-25"></i>{{ course.students }} {{ course.students ? 'Students' : 'Student' }}</li>
                </ul>
                <p>{{ course.excerpt }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['extraClass', 'course']
    }
</script>