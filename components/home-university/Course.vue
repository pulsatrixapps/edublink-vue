<template>
    <div class="edu-course-area course-area-3 section-gap-large bg-lighten04">
        <div class="container">
            <SectionTitle preTitle="Popular Courses" title='Academic Programs' alignment='section-center' />
            
            <div class="isotope-wrapper">
                <div class="isotop-button isotop-filter nav">
                        <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#undergraduate" role="tab">Undergraduate Program</button>
                        <button class="nav-link" data-bs-toggle="pill" data-bs-target="#graduate" role="tab">Graduate Program</button>
                        <button class="nav-link" data-bs-toggle="pill" data-bs-target="#online" role="tab">Online Program</button>
                </div>
                <div class="tab-content">
                    <div class="tab-pane fade show active" id="undergraduate" role="tabpanel">
                        <div class="row g-5">
                            <div class="col-md-6 col-lg-4" v-for="(course) in courseData.universityCourses.slice(0, 3)" :key="course.id">
                                <CourseTypeTwo :course="course" />
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="graduate" role="tabpanel">
                        <div class="row g-5">
                            <div class="col-md-6 col-lg-4" v-for="(course) in courseData.universityCourses.slice(0, 2)" :key="course.id">
                                <CourseTypeTwo :course="course" />
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="online" role="tabpanel">
                        <div class="row g-5">
                            <div class="col-md-6 col-lg-4" v-for="(course) in courseData.universityCourses.slice(2, 3)" :key="course.id">
                                <CourseTypeTwo :course="course" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ul class="shape-group">
            <li class="shape-1">
                <img src="/images/others/map-shape-3.png" alt="Shape">
            </li>
            <li class="shape-2">
                <img src="/images/others/map-shape-3.png" alt="Shape">
            </li>
        </ul>
    </div>
</template>

<script>
    import courseData from '~/data/course';
    export default {
        components: {
            SectionTitle: () => import('@/components/common/SectionTitle'),
            CourseTypeTwo: () => import('@/components/course/CourseTypeTwo')
        },
        data () {
            return {
                courseData
            }
        }
    }
</script>

<style lang="scss">
    .course-area-3 {
        .isotop-button {
            button {
                &:hover,
                &.active {
                    background-color: var(--color-secondary);
                    color: var(--color-white);
                }
                &.active:after {
                    bottom: -10px;
                    visibility: visible;
                    opacity: 1;
                }
            }
        }
    }

    .dark-mode {
        .course-area-3 { 
            .isotop-button {
                button {
                    &:hover,
                    &.active {
                        background-color: var(--color-secondary);
                        color: var(--color-white);
                    }
                }
            }
        }
    }
</style>