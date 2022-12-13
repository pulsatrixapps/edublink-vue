<template>
    <div id="main-wrapper" class="main-wrapper">

        <HeaderOne />

        <BreadCrumbTwo title='Blog Standard' />

        <section class="section-gap-equal">
            <div class="container">
                <div class="row row--30">
                    <div class="col-lg-8">
                        <div 
                            class="blog-standard-each-item" 
                            v-for="blog in getItems" 
                            :key="blog.id"
                        >
                            <BlogPostStandard :blogInfo="blog" />
                        </div>

                        <div v-if="getPaginateCount > 1">
                            <pagination 
                                class="edublink-vue-pagination mt--0" 
                                v-model="currentPage" 
                                :per-page="perPage" 
                                :records="blogData.blogs.length"
                                @paginate="paginateClickCallback"
                                :page-count="getPaginateCount" 
                                :options="paginationOptions"
                            />
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <BlogSidebarOne :blogItems="blogData.blogs" :categories="blogData.categories" :archives="blogData.archives" :tags="blogData.tags" />
                    </div>
                </div>
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
            BlogSidebarOne: () => import('@/components/sidebar/BlogSidebarOne'),
            BlogPostStandard: () => import('@/components/blog/BlogPostStandard'),
            CTAOne: () => import("@/components/cta/CTAOne"),
            FooterOne: () => import("@/components/footer/FooterOne")
        },
        data () {
            return {
                blogData,
                currentPage: 1,
                perPage: 5,
                paginationOptions: {
                    texts: {
                        nextPage: '',
                        prevPage: ''
                    }
                }
            }
        },
        computed: {
            getItems() {
                let start = ( this.currentPage - 1 ) * this.perPage;
                let end = this.currentPage * this.perPage;
                return this.blogData.blogs.slice( start, end );
            },
            getPaginateCount() {
                return Math.ceil( this.blogData.blogs.length / this.perPage );
            }
        },
        methods: {
            paginateClickCallback( page ) {
                this.currentPage = Number( page );
            }
        },
        head() {
            return {
                title: 'Blog Standard'
            }
        }
    }
</script>

