<template>
    <div id="main-wrapper" class="main-wrapper">
        
        <HeaderOne />

        <BreadCrumbOne pageTitle='About Us 1' title='A Large Range of Course Learning Paths' />

        <About />

        <LogoTwo />

        <WhyChoose />

        <TestimonialTwo />

        <FunFact />

        <Instructor />

        <FooterOne />
    </div>
</template>

<script>
    export default {
        components: {
            HeaderOne: () => import("@/components/header/HeaderOne"),
            BreadCrumbOne: () => import('@/components/common/BreadCrumbOne'),
            About: () => import('@/components/about-us-one/About'),
            LogoTwo: () => import('@/components/logo/LogoTwo'),
            WhyChoose: () => import('@/components/about-us-one/WhyChoose'),
            TestimonialTwo: () => import("@/components/testimonial/TestimonialTwo"),
            FunFact: () => import('@/components/about-us-one/FunFact'),
            Instructor: () => import('@/components/about-us-one/Instructor'),
            FooterOne: () => import("@/components/footer/FooterOne")
        },
        head() {
            return {
                title: 'About Us 1'
            }
        }
    }
</script>