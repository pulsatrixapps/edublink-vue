<template>
    <div id="main-wrapper" class="main-wrapper">
        <HeaderFour showHeaderTop="true" />
        
        <Banner />
        
        <About />
        
        <Course />
        
        <Activities />
        
        <FAQ />
        
        <Event />
        
        <Blog />
        
        <SubscriptionForm />
        
        <FooterKindergarten />
    </div>
</template>

<script>
    export default {
        components: {
            HeaderFour: () => import("@/components/header/HeaderFour"),
            Banner: () => import("@/components/home-kindergarten/Banner"),
            About: () => import("@/components/home-kindergarten/About"),
            Course: () => import("@/components/home-kindergarten/Course"),
            Activities: () => import("@/components/home-kindergarten/Activities"),
            FAQ: () => import("@/components/home-kindergarten/FAQ"),
            Event: () => import("@/components/home-kindergarten/Event"),
            Blog: () => import("@/components/home-kindergarten/Blog"),
            SubscriptionForm: () => import("@/components/home-kindergarten/SubscriptionForm"),
            FooterKindergarten: () => import("@/components/footer/FooterKindergarten")
        },
        head() {
            return {
                title: 'Kindergarten'
            }
        }
    }
</script>