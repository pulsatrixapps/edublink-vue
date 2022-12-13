<template>
    <div id="main-wrapper" class="main-wrapper">
        <HeaderThree showHeaderTop="true" />
        
        <Banner />
        
        <Categories />
        
        <Course />
        
        <LogoOne />
        
        <Instructor />
        
        <FunFact />
        
        <FAQ />
        
        <Event extraClass="event-area-2" />
        
        <ContactInfo />
        
        <Blog />
        
        <CTA addClassName="online-academy-cta-wrapper" />
        
        <FooterOne />
    </div>
</template>

<script>
    export default {
        components: {
            HeaderThree: () => import("@/components/header/HeaderThree"),
            Banner: () => import("@/components/home-online-academy/Banner"),
            Categories: () => import("@/components/home-online-academy/Categories"),
            Course: () => import("@/components/home-online-academy/Course"),
            LogoOne: () => import("@/components/logo/LogoOne"),
            Instructor: () => import("@/components/home-online-academy/Instructor"),
            FunFact: () => import("@/components/home-online-academy/FunFact"),
            FAQ: () => import("@/components/home-online-academy/FAQ"),
            Event: () => import("@/components/event/EventSectionOne"),
            ContactInfo: () => import("@/components/home-online-academy/ContactInfo"),
            Blog: () => import("@/components/home-online-academy/Blog"),
            CTA: () => import("@/components/cta/CTAOne"),
            FooterOne: () => import("@/components/footer/FooterOne")
        },
        head() {
            return {
                title: 'Online Academy'
            }
        }
    }
</script>