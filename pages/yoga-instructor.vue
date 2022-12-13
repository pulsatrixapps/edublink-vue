<template>
    <div id="main-wrapper" class="main-wrapper">
        <HeaderOne showHeaderTop="true" />
        
        <Banner />
        
        <About />
        
        <Course />
        
        <FunFact />
        
        <WhyChoose />
        
        <Instructor />
        
        <VideoSection />
        
        <Testimonial />
        
        <Instagram />
        
        <FooterYoga />
    </div>
</template>

<script>
    export default {
        components: {
            HeaderOne: () => import("@/components/header/HeaderOne"),
            Banner: () => import("@/components/home-yoga-instructor/Banner"),
            About: () => import("@/components/home-yoga-instructor/About"),
            Course: () => import("@/components/home-yoga-instructor/Course"),
            FunFact: () => import("@/components/home-yoga-instructor/FunFact"),
            WhyChoose: () => import("@/components/home-yoga-instructor/WhyChoose"),
            Instructor: () => import("@/components/home-yoga-instructor/Instructor"),
            VideoSection: () => import("@/components/home-yoga-instructor/Video"),
            Testimonial: () => import("@/components/home-yoga-instructor/Testimonial"),
            Instagram: () => import("@/components/home-yoga-instructor/Instagram"),
            FooterYoga: () => import("@/components/footer/FooterYoga"),
        },
        head() {
            return {
                title: 'Yoga Instructor'
            }
        }
    }
</script>