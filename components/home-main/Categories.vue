<template>
    <div class="edu-categorie-area categorie-area-2 edu-section-gap">
        <div class="container">
            <SectionTitle alignment="section-center" title="Top Categories" subTitle="Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore" />

            <div class="row g-5">
                <div class="col-lg-4 col-md-6" data-aos-delay="50" data-aos="fade-up" data-aos-duration="800" v-for="(category, index) in categories" :key="index">
                    <div class="categorie-grid categorie-style-2" :class="category.colorClass">
                        <div class="icon">
                            <i :class="category.iconClass + ' ' + category.extraClass"></i>
                        </div>
                        <div class="content">
                            <h5 class="title">{{ category.title }}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            SectionTitle: () => import('@/components/common/SectionTitle')
        },
        data() {
            return {
                categories: [
                    {
                        title: "Business Management",
                        iconClass: "icon-9",
                        colorClass: "color-primary-style",
                        extraClass: "business-management"
                    },
                    {
                        title: "Arts & Design",
                        iconClass: "icon-10",
                        colorClass: "color-secondary-style",
                        extraClass: "art-design"
                    },
                    {
                        title: "Personal Development",
                        iconClass: "icon-11",
                        colorClass: "color-extra01-style",
                        extraClass: "personal-development"
                    },
                    {
                        title: "Health & Fitness",
                        iconClass: "icon-12",
                        colorClass: "color-tertiary-style",
                        extraClass: "health-fitness"
                    },
                    {
                        title: "Data Science",
                        iconClass: "icon-13",
                        colorClass: "color-extra02-style",
                        extraClass: "data-science"
                    },
                    {
                        title: "Marketing",
                        iconClass: "icon-14",
                        colorClass: "color-extra03-style",
                        extraClass: "marketing"
                    },
                    {
                        title: "Business & Finance",
                        iconClass: "icon-15",
                        colorClass: "color-extra04-style",
                        extraClass: "business-finance"
                    },
                    {
                        title: "Computer Science",
                        iconClass: "icon-16",
                        colorClass: "color-extra05-style",
                        extraClass: "computer-science"
                    },
                    {
                        title: "Video & Photography",
                        iconClass: "icon-17",
                        colorClass: "color-extra06-style",
                        extraClass: "video-photography"
                    }
                ]
            }
        }
    }
</script>