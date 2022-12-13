<template>
    <div id="main-wrapper" class="main-wrapper">

        <HeaderLanding />

        <Banner />
        
        <FunFact />

        <HomeDemo />

        <LearnWith />

        <CourseLayout />

        <ShopLayout />

        <Features />

        <InnerPages />
        
        <FooterLanding />
        
    </div>
</template>

<script>
    export default {
        components: {
            HeaderLanding: () => import("@/components/header/HeaderLanding"),
            Banner: () => import("@/components/home-landing-demo/Banner"),
            FunFact: () => import("@/components/home-landing-demo/FunFact"),
            HomeDemo: () => import("@/components/home-landing-demo/HomeDemo"),
            LearnWith: () => import("@/components/home-landing-demo/LearnWith"),
            CourseLayout: () => import("@/components/home-landing-demo/CourseLayout"),
            ShopLayout: () => import("@/components/home-landing-demo/ShopLayout"),
            Features: () => import("@/components/home-landing-demo/Features"),
            InnerPages: () => import("@/components/home-landing-demo/InnerPages"),
            FooterLanding: () => import("@/components/footer/FooterLanding")
        },
        head() {
            return {
                title: 'Landing Demo'
            }
        }
    }
</script>