<template>
    <div id="main-wrapper" class="main-wrapper">
        
        <HeaderOne />

        <BreadCrumbTwo pageTitle='Gallery Grid' title='Gallery' />
        
        <div class="edu-gallery-area edu-section-gap">
            <div class="container">
                <div class="isotope-wrapper">
                    <div class="isotop-button button-transparent isotop-filter">
                        <button 
                            v-for="(cat, index) in filterCategory" 
                            :key="index" 
                            @click="filterHandler( cat )" 
                            class="filter-selector-item"
                            :class="{'is-checked': cat === selectedCategory}"
                        >
                            <span>{{ cat }}</span>
                        </button>
                    </div>
                    <div id="masonry-gallery" class="edublink-vue-gallery-masonry gallery-grid-wrap">
                        <masonry
                            :cols=breakPoints
                        >
                            <a
                                class="edu-gallery-grid masonry-item items"
                                v-for="(item, key) in filterData" 
                                :key="key"
                                @click="index = key"
                            >
                                <div class="thumbnail">
                                    <img :src="item.thumb" alt="Gallery Image" />
                                </div>
                                <div class="zoom-icon">
                                    <i class="icon-69"></i>
                                </div>
                            </a>
                        </masonry>
                    </div>
                </div>
            </div>
        </div>

        <CTAOneAlter />

        <FooterOne />
        
        <CoolLightBox
            :items="filterData"
            :index="index"
            :fullScreen="true"
            :effect="'fade'"
            @close="index = null"
        >
        </CoolLightBox>
    </div>
</template>

<script>
    export default {
        components: {
            HeaderOne: () => import("@/components/header/HeaderOne"),
            BreadCrumbTwo: () => import('@/components/common/BreadCrumbTwo'),
            CTAOneAlter: () => import("@/components/cta/CTAOneAlter"),
            FooterOne: () => import("@/components/footer/FooterOne")
        },
        data() {
            return {
                index: null,
                breakPoints: {
                    default: 3,
                    991: 2,
                    767: 1
                },
                filterData: [],
                selectedCategory: 'all',
                items: [
                    {
                        thumb: '/images/gallery/gallery-01.jpg',
                        src: '/images/gallery/gallery-01.jpg',
                        category: ['education']
                    },
                    {
                        thumb: '/images/gallery/gallery-02.jpg',
                        src: '/images/gallery/gallery-02.jpg',
                        category: ['marketing']
                    },
                    {
                        thumb: '/images/gallery/gallery-03.jpg',
                        src: '/images/gallery/gallery-03.jpg',
                        category: ['development', 'education']
                    },
                    {
                        thumb: '/images/gallery/gallery-04.jpg',
                        src: '/images/gallery/gallery-04.jpg',
                        category: ['health']
                    },
                    {
                        thumb: '/images/gallery/gallery-05.jpg',
                        src: '/images/gallery/gallery-05.jpg',
                        category: ['marketing']
                    },
                    {
                        thumb: '/images/gallery/gallery-06.jpg',
                        src: '/images/gallery/gallery-06.jpg',
                        category: ['health', 'development']
                    },
                    {
                        thumb: '/images/gallery/gallery-07.jpg',
                        src: '/images/gallery/gallery-07.jpg',
                        category: ['education']
                    },
                    {
                        thumb: '/images/gallery/gallery-08.jpg',
                        src: '/images/gallery/gallery-08.jpg',
                        category: ['marketing']
                    },
                    {
                        thumb: '/images/gallery/gallery-09.jpg',
                        src: '/images/gallery/gallery-09.jpg',
                        category: ['health']
                    }
                ]
            }
        },
        computed: {
            filterCategory() {
                return ['all', ...new Set( this.items.map( ( elem ) => elem.category ).flat() )]
            }
        },
        methods: {
            filterHandler( cat ) {
                this.selectedCategory = cat;
                if( this.selectedCategory === 'all' ){
                    this.filterData = this.items
                } else {
                    let filterResult = this.items.filter( ( item ) => item.category.includes( cat ) );
                    this.filterData = [];
                    this.filterData.push( ...filterResult )
                }
            }  
        },
        mounted () {
            this.filterData.push( ...this.items )
        },
        head() {
            return {
                title: 'Gallery Grid'
            }
        }
    }
</script>