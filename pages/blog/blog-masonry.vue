<template>
    <div id="main-wrapper" class="main-wrapper">

        <HeaderOne />

        <BreadCrumbTwo title='Blog Masonry' />

        <section class="section-gap-equal">
            <div class="container">
                <div class="row g-5" id="masonry-gallery">
                    <masonry
                        :cols=breakPoints
                        class="masonry-blog-items"
                    >
                        <div 
                            class="masonry-item" 
                            data-aos-delay="100" 
                            data-aos="fade-up" 
                            data-aos-duration="800" 
                            v-for="blog in blogData.blogs" 
                            :key="blog.id"
                        >
                            <BlogPostOne :blogInfo="blog" />
                        </div>
                    </masonry>
                </div>

                <PaginationOne />
            </div>
        </section>

        <CTAOne />

        <FooterOne />
    </div>
</template>

<script>
    import blogData from '~/data/blog';
    export default {
        components: {
            HeaderOne: () => import("@/components/header/HeaderOne"),
            BreadCrumbTwo: () => import("@/components/common/BreadCrumbTwo"),
            BlogPostOne: () => import('@/components/blog/BlogPostOne'),
            CTAOne: () => import("@/components/cta/CTAOne"),
            PaginationOne: () => import("@/components/common/PaginationOne"),
            FooterOne: () => import("@/components/footer/FooterOne")
        },
        data () {
            return {
                blogData,
                breakPoints: {
                    default: 3,
                    991: 2,
                    767: 1
                }
            }
        },
        head() {
            return {
                title: 'Blog Masonry'
            }
        }
    };
</script>

