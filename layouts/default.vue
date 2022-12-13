<template>
    <div>
        <Nuxt />
        <ScrollToTop />
    </div>
</template>

<script>
    export default {
        components: {
            ScrollToTop: () => import('@/components/footer/ScrollToTop')
        }
    }
</script>