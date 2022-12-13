<template>
    <div id="main-wrapper" class="main-wrapper">
        
        <HeaderOne />

        <BreadCrumbTwo pageTitle='Membership Plans' title='Pricing Table' />

        <div class="edu-section-gap">
            <div class="container">
                <SectionTitle preTitle='Pricing Table' title='Great Membership Plan' alignment='section-center' />
                
                <div class="row g-5">
                    <div class="col-lg-4" data-aos-delay="100" data-aos="fade-up" data-aos-duration="800">
                        <div class="pricing-table">
                            <div class="pricing-header">
                                <h6 class="title">Silver Plan</h6>
                                <div class="price-wrap">
                                    <span class="amount">$29.00</span>
                                    <span class="duration">Per month</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet consect adipisicing elit sed. do eilt sed</p>
                            </div>
                            <div class="pricing-body">
                                <ul class="list-item">
                                    <li><i class="icon-20"></i>Courses included: 1</li>
                                    <li><i class="icon-20"></i>Individual Course</li>
                                    <li><i class="icon-20"></i>Course learning checks</li>
                                    <li class="item-off"><i class="icon-20"></i>Course discussions</li>
                                    <li class="item-off"><i class="icon-20"></i>Offline learning</li>
                                </ul>
                            </div>
                            <div class="pricing-btn">
                                <a class="edu-btn btn-border btn-medium" href="#">Select plan<i class="icon-east"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4" data-aos-delay="150" data-aos="fade-up" data-aos-duration="800">
                        <div class="pricing-table">
                            <div class="pricing-header">
                                <h6 class="title">Gold Plan</h6>
                                <div class="price-wrap">
                                    <span class="amount">$49.00</span>
                                    <span class="duration">Per month</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet consect adipisicing elit sed. do eilt sed</p>
                            </div>
                            <div class="pricing-body">
                                <ul class="list-item">
                                    <li><i class="icon-20"></i>Courses included: 1</li>
                                    <li><i class="icon-20"></i>Individual Course</li>
                                    <li><i class="icon-20"></i>Course learning checks</li>
                                    <li><i class="icon-20"></i>Course discussions</li>
                                    <li class="item-off"><i class="icon-20"></i>Offline learning</li>
                                </ul>
                            </div>
                            <div class="pricing-btn">
                                <a class="edu-btn btn-border btn-medium" href="#">Select plan<i class="icon-east"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4" data-aos-delay="200" data-aos="fade-up" data-aos-duration="800">
                        <div class="pricing-table">
                            <div class="pricing-header">
                                <h6 class="title">Diamond Plan</h6>
                                <div class="price-wrap">
                                    <span class="amount">$79.00</span>
                                    <span class="duration">Per month</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet consect adipisicing elit sed. do eilt sed</p>
                            </div>
                            <div class="pricing-body">
                                <ul class="list-item">
                                    <li><i class="icon-20"></i>Courses included: 1</li>
                                    <li><i class="icon-20"></i>Individual Course</li>
                                    <li><i class="icon-20"></i>Course learning checks</li>
                                    <li><i class="icon-20"></i>Course discussions</li>
                                    <li><i class="icon-20"></i>Offline learning</li>
                                </ul>
                            </div>
                            <div class="pricing-btn">
                                <a class="edu-btn btn-border btn-medium" href="#">Select plan<i class="icon-east"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <FooterOne />
    </div>
</template>

<script>
    export default {
        components: {
            HeaderOne: () => import("@/components/header/HeaderOne"),
            BreadCrumbTwo: () => import('@/components/common/BreadCrumbTwo'),
            SectionTitle: () => import('@/components/common/SectionTitle'),
            FooterOne: () => import("@/components/footer/FooterOne")
        },
        head() {
            return {
                title: 'Pricing Table'
            }
        }
    }
</script>