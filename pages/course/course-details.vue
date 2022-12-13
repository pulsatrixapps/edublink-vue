<template>
    <div id="main-wrapper" class="main-wrapper">
        
        <HeaderOne />

        <div class="edu-breadcrumb-area breadcrumb-style-3">
            <div class="container">
                <div class="breadcrumb-inner">
                    <ul class="edu-breadcrumb">
                        <li class="breadcrumb-item">
                            <n-link to="/">Home</n-link>
                        </li>
                        <li class="separator"><i class="icon-angle-right"></i></li>
                        <li class="breadcrumb-item"><n-link to="/course/course-one">Courses</n-link></li>
                        <li class="separator"><i class="icon-angle-right"></i></li>
                        <li class="breadcrumb-item active" aria-current="page">Course Details</li>
                    </ul>
                    <div class="page-title">
                        <h1 class="title">Global Education Fall Meeting for Everyone</h1>
                    </div>
                    <ul class="course-meta">
                        <li><i class="icon-58"></i>by Edward Norton</li>
                        <li><i class="icon-59"></i>English</li>
                        <li class="course-rating">
                            <div class="rating">
                                <i class="icon-23"></i>
                                <i class="icon-23"></i>
                                <i class="icon-23"></i>
                                <i class="icon-23"></i>
                                <i class="icon-23"></i>
                            </div>
                            <span class="rating-count">(720 Rating)</span>
                        </li>
                    </ul>
                </div>
            </div>
            <ul class="shape-group">
                <li class="shape-1">
                    <span></span>
                </li>
                <MouseMove addClassName="shape-2" dataDepth="2" imgSrc="/images/about/shape-13.png" />
                <MouseMove addClassName="shape-3" dataDepth="-2" imgSrc="/images/about/shape-15.png" />
                <li class="shape-4">
                    <span></span>
                </li>
                <li class="shape-5"><img src="/images/about/shape-07.png" alt="shape"></li>
            </ul>
        </div>

        <section class="edu-section-gap course-details-area">
            <div class="container">
                <div class="row row--30">
                    <div class="col-lg-8">
                        <div class="course-details-content">
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="overview-tab" data-bs-toggle="tab" data-bs-target="#overview" type="button" role="tab" aria-controls="overview" aria-selected="true">Overview</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="carriculam-tab" data-bs-toggle="tab" data-bs-target="#carriculam" type="button" role="tab" aria-controls="carriculam" aria-selected="false">Carriculam</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="instructor-tab" data-bs-toggle="tab" data-bs-target="#instructor" type="button" role="tab" aria-controls="instructor" aria-selected="false">Instructor</button>
                                </li>

                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="review-tab" data-bs-toggle="tab" data-bs-target="#review" type="button" role="tab" aria-controls="review" aria-selected="false">Reviews</button>
                                </li>
                            </ul>

                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
                                    <div class="course-tab-content">
                                        <div class="course-overview">
                                            <h3 class="heading-title">Course Description</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.</p>
                                            <p class="mb--60">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.</p>
                                            <h5 class="title">What You’ll Learn?</h5>
                                            <ul class="mb--60">
                                                <li>Learn to use Python professionally, learning both Python 2 & Python 3!</li>
                                                <li>Build 6 beautiful real-world projects for your portfolio (not boring toy apps)</li>
                                                <li>Understand the Theory behind Vue.js and use it in Real Projects</li>
                                                <li>Create responsive, accessible, and beautiful layouts</li>
                                            </ul>
                                            <p>Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="carriculam" role="tabpanel" aria-labelledby="carriculam-tab">
                                    <div class="course-tab-content">
                                        <div class="course-curriculam">
                                            <h3 class="heading-title">Course Curriculum</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.</p>
                                            <div class="course-lesson">
                                                <h5 class="title">Week 1-4</h5>
                                                <p>Advanced story telling techniques for writers: Personas, Characters & Plots</p>
                                                <ul>
                                                    <li>
                                                        <div class="text"><i class="icon-65"></i> Introduction</div>
                                                        <div class="icon"><i class="icon-68"></i></div>
                                                    </li>
                                                    <li>
                                                        <div class="text"><i class="icon-65"></i> Course Overview</div>
                                                        <div class="icon"><i class="icon-68"></i></div>
                                                    </li>
                                                    <li>
                                                        <div class="text"><i class="icon-65"></i> Local Development Environment Tools</div>
                                                        <div class="badge-list">
                                                            <span class="badge badge-primary">0 Question</span>
                                                            <span class="badge badge-secondary">10 Minutes</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="text"><i class="icon-65"></i> Course Exercise / Reference Files</div>
                                                        <div class="icon"><i class="icon-68"></i></div>
                                                    </li>
                                                    <li>
                                                        <div class="text"><i class="icon-65"></i> Code Editor Installation (Optional if you have one)</div>
                                                        <div class="icon"><i class="icon-68"></i></div>
                                                    </li>
                                                    <li>
                                                        <div class="text"><i class="icon-65"></i> Embedding PHP in HTML</div>
                                                        <div class="icon"><i class="icon-68"></i></div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="course-lesson">
                                                <h5 class="title">Week 5-8</h5>
                                                <p>Advanced story telling techniques for writers: Personas, Characters & Plots</p>
                                                <ul>
                                                    <li>
                                                        <div class="text"><i class="icon-65"></i> Defining Functions</div>
                                                        <div class="icon"><i class="icon-68"></i></div>
                                                    </li>
                                                    <li>
                                                        <div class="text"><i class="icon-65"></i>Function Parameters</div>
                                                        <div class="icon"><i class="icon-68"></i></div>
                                                    </li>
                                                    <li>
                                                        <div class="text"><i class="icon-65"></i> Return Values From Functions</div>
                                                        <div class="badge-list">
                                                            <span class="badge badge-primary">0 Question</span>
                                                            <span class="badge badge-secondary">10 Minutes</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="text"><i class="icon-65"></i> Global Variable and Scope</div>
                                                        <div class="icon"><i class="icon-68"></i></div>
                                                    </li>
                                                    <li>
                                                        <div class="text"><i class="icon-65"></i>Newer Way of creating a Constant</div>
                                                        <div class="icon"><i class="icon-68"></i></div>
                                                    </li>
                                                    <li>
                                                        <div class="text"><i class="icon-65"></i> Constants</div>
                                                        <div class="icon"><i class="icon-68"></i></div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="instructor" role="tabpanel" aria-labelledby="instructor-tab">
                                    <div class="course-tab-content">
                                        <div class="course-instructor">
                                            <div class="thumbnail">
                                                <img src="/images/course/author-01.png" alt="Author Images">
                                            </div>
                                            <div class="author-content">
                                                <h6 class="title">Edward Norton</h6>
                                                <span class="subtitle">Founder & CEO</span>
                                                <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.</p>
                                                <ul class="social-share">
                                                    <li><a href="#"><i class="icon-facebook"></i></a></li>
                                                    <li><a href="#"><i class="icon-twitter"></i></a></li>
                                                    <li><a href="#"><i class="icon-linkedin2"></i></a></li>
                                                    <li><a href="#"><i class="icon-youtube"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                                    <div class="course-tab-content">
                                        <div class="course-review">
                                            <h3 class="heading-title">Course Rating</h3>
                                            <p>5.00 average rating based on 7 rating</p>
                                            <div class="row g-0 align-items-center">
                                                <div class="col-sm-4">
                                                    <div class="rating-box">
                                                        <div class="rating-number">5.0</div>
                                                        <div class="rating">
                                                            <i class="icon-23"></i>
                                                            <i class="icon-23"></i>
                                                            <i class="icon-23"></i>
                                                            <i class="icon-23"></i>
                                                            <i class="icon-23"></i>
                                                        </div>
                                                        <span>(7 Review)</span>
                                                    </div>
                                                </div>
                                                <div class="col-sm-8">
                                                    <div class="review-wrapper">

                                                        <div class="single-progress-bar">
                                                            <div class="rating-text">
                                                                5 <i class="icon-23"></i>
                                                            </div>
                                                            <div class="progress">
                                                                <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <span class="rating-value">7</span>
                                                        </div>

                                                        <div class="single-progress-bar">
                                                            <div class="rating-text">
                                                                4 <i class="icon-23"></i>
                                                            </div>
                                                            <div class="progress">
                                                                <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <span class="rating-value">0</span>
                                                        </div>

                                                        <div class="single-progress-bar">
                                                            <div class="rating-text">
                                                                4 <i class="icon-23"></i>
                                                            </div>
                                                            <div class="progress">
                                                                <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <span class="rating-value">0</span>
                                                        </div>

                                                        <div class="single-progress-bar">
                                                            <div class="rating-text">
                                                                4 <i class="icon-23"></i>
                                                            </div>
                                                            <div class="progress">
                                                                <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <span class="rating-value">0</span>
                                                        </div>

                                                        <div class="single-progress-bar">
                                                            <div class="rating-text">
                                                                4 <i class="icon-23"></i>
                                                            </div>
                                                            <div class="progress">
                                                                <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <span class="rating-value">0</span>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Start Comment Area  -->
                                            <div class="comment-area">
                                                <h3 class="heading-title">Reviews</h3>
                                                <div class="comment-list-wrapper">
                                                    <!-- Start Single Comment  -->
                                                    <div class="comment">
                                                        <div class="thumbnail">
                                                            <img src="/images/blog/comment-01.jpg" alt="Comment Images">
                                                        </div>
                                                        <div class="comment-content">
                                                            <div class="rating">
                                                                <i class="icon-23"></i>
                                                                <i class="icon-23"></i>
                                                                <i class="icon-23"></i>
                                                                <i class="icon-23"></i>
                                                                <i class="icon-23"></i>
                                                            </div>
                                                            <h5 class="title">Haley Bennet</h5>
                                                            <span class="date">Oct 10, 2021</span>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                        </div>
                                                    </div>
                                                    <!-- End Single Comment  -->
                                                    <!-- Start Single Comment  -->
                                                    <div class="comment">
                                                        <div class="thumbnail">
                                                            <img src="/images/blog/comment-02.jpg" alt="Comment Images">
                                                        </div>
                                                        <div class="comment-content">
                                                            <div class="rating">
                                                                <i class="icon-23"></i>
                                                                <i class="icon-23"></i>
                                                                <i class="icon-23"></i>
                                                                <i class="icon-23"></i>
                                                                <i class="icon-23"></i>
                                                            </div>
                                                            <h5 class="title">Simon Baker</h5>
                                                            <span class="date">Oct 10, 2021</span>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                        </div>
                                                    </div>
                                                    <!-- End Single Comment  -->
                                                    <!-- Start Single Comment  -->
                                                    <div class="comment">
                                                        <div class="thumbnail">
                                                            <img src="/images/blog/comment-03.jpg" alt="Comment Images">
                                                        </div>
                                                        <div class="comment-content">
                                                            <div class="rating">
                                                                <i class="icon-23"></i>
                                                                <i class="icon-23"></i>
                                                                <i class="icon-23"></i>
                                                                <i class="icon-23"></i>
                                                                <i class="icon-23"></i>
                                                            </div>
                                                            <h6 class="title">Richard Gere</h6>
                                                            <span class="date">Oct 10, 2021</span>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                        </div>
                                                    </div>
                                                    <!-- End Single Comment  -->
                                                </div>
                                            </div>
                                            <!-- End Comment Area  -->
                                            <div class="comment-form-area">
                                                <h3 class="heading-title">Write a Review</h3>
                                                <div class="rating-icon">
                                                    <h6 class="title">Rating Here</h6>
                                                    <div class="rating">
                                                        <i class="icon-23"></i>
                                                        <i class="icon-23"></i>
                                                        <i class="icon-23"></i>
                                                        <i class="icon-23"></i>
                                                        <i class="icon-23"></i>
                                                    </div>
                                                </div>
                                                <form class="comment-form">
                                                    <div class="row g-5">
                                                        <div class="form-group col-lg-6">
                                                            <input type="text" name="comm-title" id="comm-title" placeholder="Review Title">
                                                        </div>
                                                        <div class="form-group col-lg-6">
                                                            <input type="text" name="comm-name" id="comm-name" placeholder="Reviewer name">
                                                        </div>
                                                        <div class="form-group col-12">
                                                            <input type="email" name="comm-email" id="comm-email" placeholder="Reviewer email">
                                                        </div>
                                                        <div class="form-group col-12">
                                                            <textarea name="comm-message" id="comm-message" cols="30" rows="5" placeholder="Review summary"></textarea>
                                                        </div>
                                                        <div class="form-group col-12">
                                                            <button type="submit" class="edu-btn submit-btn">Submit Review <i class="icon-4"></i></button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="course-sidebar-3 sidebar-top-position">
                            <div class="edu-course-widget widget-course-summery">
                                <div class="inner">
                                    <div class="thumbnail">
                                        <img src="/images/course/course-46.jpg" alt="Courses">
                                        <span v-for="( _, imageIndex ) in items" :key="imageIndex">
                                            <a @click="index = imageIndex" class="play-btn video-popup-activation">
                                                <i class="icon-18"></i>
                                            </a>
                                        </span>
                                    </div>
                                    <div class="content">
                                        <h4 class="widget-title">Course Includes:</h4>
                                        <ul class="course-item">
                                            <li>
                                                <span class="label"><i class="icon-60"></i>Price:</span>
                                                <span class="value price">$70.00</span>
                                            </li>
                                            <li>
                                                <span class="label"><i class="icon-62"></i>Instrutor:</span>
                                                <span class="value">Edward Norton</span>
                                            </li>
                                            <li>
                                                <span class="label"><i class="icon-61"></i>Duration:</span>
                                                <span class="value">3 weeks</span>
                                            </li>
                                            <li>
                                                <span class="label">
                                                    <inline-svg src="/images/svg-icons/books.svg" alt="book icon" />
                                                    Lessons:</span>
                                                <span class="value">8</span>
                                            </li>
                                            <li>
                                                <span class="label"><i class="icon-63"></i>Enrolled:</span>
                                                <span class="value">65 students</span>
                                            </li>
                                            <li>
                                                <span class="label"><i class="icon-59"></i>Language:</span>
                                                <span class="value">English</span>
                                            </li>
                                            <li>
                                                <span class="label"><i class="icon-64"></i>Certificate:</span>
                                                <span class="value">Yes</span>
                                            </li>
                                        </ul>
                                        <div class="read-more-btn">
                                            <a href="#" class="edu-btn">Start Now <i class="icon-4"></i></a>
                                        </div>
                                        <div class="share-area">
                                            <h4 class="title">Share On:</h4>
                                            <ul class="social-share">
                                                <li><a href="#"><i class="icon-facebook"></i></a></li>
                                                <li><a href="#"><i class="icon-twitter"></i></a></li>
                                                <li><a href="#"><i class="icon-linkedin2"></i></a></li>
                                                <li><a href="#"><i class="icon-youtube"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="gap-bottom-equal">
            <div class="container">
                <div class="section-title section-left" data-aos-delay="150" data-aos="fade-up" data-aos-duration="800">
                    <h3 class="title">More Courses for You</h3>
                </div>
                <div class="row g-5">
                    <div 
                        class="col-12 col-xl-4 col-lg-6 col-md-6"
                        v-for="(course, key) in courseData.courses.slice(0, 3)" 
                        :key="key"
                        :class="[
                            ( ( key+1 ) % 3 === 0 && key !== 0 ? 'course-style-3-third-item' : undefined ), 
                            ( ( key+1 ) % 2 === 0 && key !== 0 ? 'course-style-3-even' : 'course-style-3-odd' )
                        ]"
                    >
                        <CourseTypeThree :course="course" />
                    </div>
                </div>
            </div>
        </div>

        <FooterOne />

        <CoolLightBox
            :items="items"
            :index="index"
            @close="index = null"
        >
        </CoolLightBox>
    </div>
</template>

<script>
    import courseData from '~/data/course';
    export default {
        components: {
            HeaderOne: () => import("@/components/header/HeaderOne"),
            MouseMove: () => import('@/components/animation/MouseMove'),
            CourseTypeThree: () => import('@/components/course/CourseTypeThree'),
            FooterOne: () => import("@/components/footer/FooterOne")
        },
        data() {
            return {
                courseData,
                items: [
                    {
                        src: "https://www.youtube.com/watch?v=PICj5tr9hcc"
                    }
                ],
                index: null
            }
        },
        head() {
            return {
                title: 'Course Details'
            }
        }
    }
</script>