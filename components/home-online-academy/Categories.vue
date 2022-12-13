<template>
    <div class="edu-categorie-area categorie-area-3 edu-section-gap bg-image bg-image--4" id="categories">
        <div class="container">
            <SectionTitle alignment="section-center" preTitle='CATEGORIES' preTitleClass="pre-textsecondary" title='Online <span class="color-primary">Classes</span> For Remote Learning.' subTitle="Consectetur adipiscing elit sed do eiusmod tempor." />

            <div class="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4">
                <div 
                    class="col" 
                    data-aos-delay="100" 
                    data-aos="fade-up" 
                    data-aos-duration="800" 
                    v-for="(category, index) in categories" :key="index"
                >
                    <div class="categorie-grid categorie-style-3" :class="category.colorClass">
                        <div class="icon" :class="category.extraClass">
                            <i :class="category.iconClass"></i>
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
                        title: "Management",
                        iconClass: "icon-9",
                        colorClass: "color-primary-style"
                    },
                    {
                        title: "Arts & Design",
                        iconClass: "icon-10",
                        colorClass: "color-secondary-style"
                    },
                    {
                        title: "Development",
                        iconClass: "icon-11",
                        colorClass: "color-extra04-style"
                    },
                    {
                        title: "Health & Fitness",
                        iconClass: "icon-12",
                        colorClass: "color-tertiary-style"
                    },
                    {
                        title: "Data Science",
                        iconClass: "icon-13",
                        colorClass: "color-extra02-style"
                    },
                    {
                        title: "Design",
                        iconClass: "icon-42",
                        colorClass: "color-extra07-style",
                        extraClass: "design-pencil-icon"
                    },
                    {
                        title: "Marketing",
                        iconClass: "icon-14",
                        colorClass: "color-extra06-style"
                    },
                    {
                        title: "Computer Science",
                        iconClass: "icon-16",
                        colorClass: "color-extra03-style",
                        extraClass: "laptop-icon"
                    },
                    {
                        title: "Photography",
                        iconClass: "icon-17",
                        colorClass: "color-extra01-style"
                    },
                    {
                        title: "Music Class",
                        iconClass: "icon-43",
                        colorClass: "color-extra05-style"
                    }
                ]
            }
        }
    }
</script>