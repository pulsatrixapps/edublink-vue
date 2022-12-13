<template>
    <div class="edu-blog-area blog-area-4 edu-section-gap">
        <div class="container">
            <div class="section-title section-center" data-aos-delay="150" data-aos="fade-up" data-aos-duration="800">
                <span class="pre-title pre-textsecondary">Our Articles</span>
                <h2 class="title">Check Out Our Latest Blog</h2>
                <span class="shape-line"><i class="icon-19"></i></span>
            </div>
            <div class="row g-5">
                <div 
                    class="col-lg-4 col-md-6 col-12" 
                    data-aos-delay="150" 
                    data-aos="fade-up" 
                    data-aos-duration="800"
                    v-for="blog in blogData.kindergartenBlogs.slice(0,3)" :key="blog.id"
                >
                    <BlogPostTwo :blogInfo="blog" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import blogData from '~/data/blog';
    export default {
        components: {
            SectionTitle: () => import('@/components/common/SectionTitle'),
            BlogPostTwo: () => import('@/components/blog/BlogPostTwo')
        },
        data () {
            return {
                blogData
            }
        }
    }
</script>