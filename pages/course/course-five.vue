<template>
    <div id="main-wrapper" class="main-wrapper">

        <HeaderOne />

        <BreadCrumbTwo title='Course Style 5' />
        
        <div class="edu-course-area course-area-1 section-gap-equal">
            <div class="container">
                <div class="row g-5">
                    <div class="col-lg-3 order-lg-2">
                        <CourseSidebarOne />
                    </div>

                    <div class="col-lg-9 col-pr--35 order-lg-1">
                        <div class="edu-sorting-area">
                            <div class="sorting-left">
                                <h6 class="showing-text">We found <span>{{ getItems.length }}</span> courses available for you</h6>
                            </div>
                            <div class="sorting-right">
                                <div class="layout-switcher">
                                    <label>Grid</label>
                                    <ul class="switcher-btn">
                                        <li><n-link to="/course/course-one"><i class="icon-53"></i></n-link></li>
                                        <li><n-link to="/course/course-five" class="active"><i class="icon-54"></i></n-link></li>
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
                    
                        <div 
                            class="edu-course-six-each-item"
                            v-for="course in getItems" 
                            :key="course.id"
                        >
                            <CourseTypeSeven :course="course" />   
                        </div>

                        <div v-if="getPaginateCount > 1">
                            <pagination 
                                class="edublink-vue-pagination" 
                                v-model="currentPage" 
                                :per-page="perPage" 
                                :records="courseData.courses.length"
                                @paginate="paginateClickCallback"
                                :page-count="getPaginateCount" 
                                :options="paginationOptions"
                            />
                        </div>
                    </div>
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
            CourseSidebarOne: () => import("@/components/sidebar/CourseSidebarOne"),
            CourseTypeSeven: () => import('@/components/course/CourseTypeSeven'),
            FooterOne: () => import("@/components/footer/FooterOne")
        },
        data() {
            return {
                courseData,
                currentPage: 1,
                perPage: 9,
                paginationOptions: {
                    texts: {
                        nextPage: '',
                        prevPage: ''
                    }
                }
            }
        },
        computed: {
            getItems() {
                let start = ( this.currentPage - 1 ) * this.perPage;
                let end = this.currentPage * this.perPage;
                return this.courseData.courses.slice( start, end );
            },
            getPaginateCount() {
                return Math.ceil( this.courseData.courses.length / this.perPage );
            }
        },
        methods: {
            paginateClickCallback( page ) {
                this.currentPage = Number( page );
            }
        },
        head() {
            return {
                title: 'Course Style 5'
            }
        }
    }
</script>