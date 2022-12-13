<template>
    <div id="main-wrapper" class="main-wrapper">
        
        <HeaderOne />

        <BreadCrumbThree title='About Us 3' />

        <About />

        <FunFact />

        <WhyChoose />

        <ContactInfo />
        
        <Instructor />

        <Testimonial />

        <FooterOne />
    </div>
</template>

<script>
    export default {
        components: {
            HeaderOne: () => import("@/components/header/HeaderOne"),
            BreadCrumbThree: () => import('@/components/common/BreadCrumbThree'),
            About: () => import('@/components/about-us-three/About'),
            FunFact: () => import('@/components/about-us-three/FunFact'),
            WhyChoose: () => import('@/components/about-us-three/WhyChoose'),
            ContactInfo: () => import('@/components/about-us-three/ContactInfo'),
            Instructor: () => import('@/components/about-us-three/Instructor'),
            Testimonial: () => import('@/components/about-us-three/Testimonial'),
            FooterOne: () => import("@/components/footer/FooterOne")
        },
        head() {
            return {
                title: 'About Us 3'
            }
        }
    }
</script>