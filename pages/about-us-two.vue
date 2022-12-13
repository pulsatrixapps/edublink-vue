<template>
    <div id="main-wrapper" class="main-wrapper">
        
        <HeaderOne />

        <BreadCrumbOne pageTitle='About Us 2' title='A Large Range of Course Learning Paths' />

        <Features />

        <VideoSection />

        <Logo />

        <Testimonial />

        <FunFact />
        
        <Instructor />

        <CTA addClassName="university-cta-wrapper" btnClass="btn-secondary" />

        <FooterOne />
    </div>
</template>

<script>
    export default {
        components: {
            HeaderOne: () => import("@/components/header/HeaderOne"),
            BreadCrumbOne: () => import('@/components/common/BreadCrumbOne'),
            Features: () => import('@/components/about-us-two/Features'),
            VideoSection: () => import('@/components/about-us-two/Video'),
            Logo: () => import('@/components/about-us-two/Logo'),
            Testimonial: () => import("@/components/about-us-two/Testimonial"),
            FunFact: () => import('@/components/about-us-two/FunFact'),
            Instructor: () => import('@/components/about-us-two/Instructor'),
            CTA: () => import("@/components/cta/CTAOne"),
            FooterOne: () => import("@/components/footer/FooterOne")
        },
        head() {
            return {
                title: 'About Us 2'
            }
        }
    }
</script>