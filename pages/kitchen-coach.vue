<template>
    <div id="main-wrapper" class="main-wrapper">
        <HeaderOne showHeaderTop="true" />
        
        <Banner />
        
        <Features />
        
        <About />
        
        <Logo />
        
        <Course />
        
        <Testimonial />
        
        <FunFact />
        
        <Instructor />
        
        <FAQ />
        
        <CTA />
        
        <Blog />
        
        <Instagram />
        
        <FooterKitchen />
    </div>
</template>

<script>
    export default {
        components: {
            HeaderOne: () => import("@/components/header/HeaderOne"),
            Banner: () => import("@/components/home-kitchen-coach/Banner"),
            Features: () => import("@/components/home-kitchen-coach/Features"),
            About: () => import("@/components/home-kitchen-coach/About"),
            Logo: () => import("@/components/home-kitchen-coach/Logo"),
            Course: () => import("@/components/home-kitchen-coach/Course"),
            Testimonial: () => import("@/components/home-kitchen-coach/Testimonial"),
            FunFact: () => import("@/components/home-kitchen-coach/FunFact"),
            Instructor: () => import("@/components/home-kitchen-coach/Instructor"),
            FAQ: () => import("@/components/home-kitchen-coach/FAQ"),
            CTA: () => import("@/components/home-kitchen-coach/CTA"),
            Blog: () => import("@/components/home-kitchen-coach/Blog"),
            Instagram: () => import("@/components/home-kitchen-coach/Instagram"),
            FooterKitchen: () => import("@/components/footer/FooterKitchen")
        },
        head() {
            return {
                title: 'Kitchen Coach'
            }
        }
    }
</script>