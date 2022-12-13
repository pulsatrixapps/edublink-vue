<template>
    <div id="main-wrapper" class="main-wrapper">

        <HeaderOne />

        <BreadCrumbTwo title='Course Style 3' />
        
        <div class="edu-course-area course-area-1 gap-tb-text">
            <div class="container">
                <div class="edu-sorting-area">
                    <div class="sorting-left">
                        <h6 class="showing-text">We found <span>{{ courses.length }}</span> courses available for you</h6>
                    </div>
                    <div class="sorting-right">
                        <div class="layout-switcher">
                            <label>Grid</label>
                            <ul class="switcher-btn">
                                <li><n-link to="/course/course-three" class="active"><i class="icon-53"></i></n-link></li>
                                <li><n-link to="/course/course-four"><i class="icon-54"></i></n-link></li>
                            </ul>
                        </div>
                        <div class="edu-sorting">
                            <div class="icon"><i class="icon-55"></i></div>
                            <select class="edu-select">
                                <option>Filters</option>
                                <option>Low To High</option>
                                <option>High Low To</option>
                                <option>Last Viewed</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="row g-5">
                    <div 
                        class="col-12 col-xl-4 col-lg-6 col-md-6"
                        v-for="(course, key) in courses" 
                        :key="key"
                        :class="[
                            ( ( key+1 ) % 3 === 0 && key !== 0 ? 'course-style-3-third-item' : undefined ), 
                            ( ( key+1 ) % 2 === 0 && key !== 0 ? 'course-style-3-even' : 'course-style-3-odd' )
                        ]"
                    >
                        <CourseTypeThree :course="course" />
                    </div>
                </div>

                <div class="load-more-btn">
                    <button 
                        class="edu-btn"
                        @click="loadMore" 
                        v-if="defaultNumberOfCourses < courseData.courses.length"
                    >
                        Load More <i class="icon-56"></i>
                    </button>
                </div>
            </div>
        </div>

        <FooterOne />
    </div>
</template>

<script>
    import courseData from '~/data/course';
    export default {
        components: {
            HeaderOne: () => import("@/components/header/HeaderOne"),
            BreadCrumbTwo: () => import("@/components/common/BreadCrumbTwo"),
            CourseTypeThree: () => import('@/components/course/CourseTypeThree'),
            FooterOne: () => import("@/components/footer/FooterOne")
        },
        data() {
            return {
                courseData,
                defaultNumberOfCourses: 9
            }
        },
        computed: {
            courses() {
                return this.courseData.courses.slice( 0, this.defaultNumberOfCourses );
            }
        },
        methods: {
            loadMore() {
                this.defaultNumberOfCourses += 4;
            }
        },
        head() {
            return {
                title: 'Course Style 3'
            }
        }
    }
</script>