<template>
    <div id="main-wrapper" class="main-wrapper">
        <HeaderTwo showHeaderTop="true" />
        
        <Banner />
        
        <Features />
        
        <About />
        
        <FunFact />
        
        <Course />
        
        <Campus />
        
        <TestimonialThree />
        
        <VideoSection />
        
        <ContactInfo />
        
        <Event extraClass="event-area-1 gap-large-text" />
        
        <Logo />
        
        <CTA addClassName="university-cta-wrapper" btnClass="btn-secondary" />
        
        <FooterThree />
    </div>
</template>

<script>
    export default {
        components: {
            HeaderTwo: () => import("@/components/header/HeaderTwo"),
            Banner: () => import("@/components/home-university/Banner"),
            Features: () => import("@/components/home-university/Features"),
            About: () => import("@/components/home-university/About"),
            FunFact: () => import("@/components/home-university/FunFact"),
            Course: () => import("@/components/home-university/Course"),
            Campus: () => import("@/components/home-university/Campus"),
            TestimonialThree: () => import("@/components/testimonial/TestimonialThree"),
            VideoSection: () => import("@/components/home-university/Video"),
            ContactInfo: () => import("@/components/home-university/ContactInfo"),
            Event: () => import("@/components/event/EventSectionOne"),
            Logo: () => import("@/components/logo/LogoTwo"),
            CTA: () => import("@/components/cta/CTAOne"),
            FooterThree: () => import("@/components/footer/FooterThree")
        },
        head() {
            return {
                title: 'University'
            }
        }
    }
</script>