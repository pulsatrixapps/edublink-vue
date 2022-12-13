<template>
    <div id="main-wrapper" class="main-wrapper">
        
        <HeaderOne />

        <BreadCrumbTwo pageTitle='Event List' title='Event Page' />
        
        <div class="edu-event-area event-area-1 section-gap-equal">
            <div class="container">
                <div class="row g-5">
                    <div class="col-lg-3 order-lg-2">
                        <EventSidebar />
                    </div>

                    <div class="col-lg-9 order-lg-1 col-pr--35">
                        <div class="row g-5">
                            <div 
                                class="col-12" 
                                data-aos-delay="150" 
                                data-aos="fade-up" 
                                data-aos-duration="800"
                                v-for="event in getItems" :key="event.id"
                            >
                                <EventList :eventInfo="event" />
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="getPaginateCount > 1">
                    <pagination 
                        class="edublink-vue-pagination" 
                        v-model="currentPage" 
                        :per-page="perPage" 
                        :records="eventData.events.length"
                        @paginate="paginateClickCallback"
                        :page-count="getPaginateCount" 
                        :options="paginationOptions"
                    />
                </div>
            </div>
        </div>

        <FooterOne />
    </div>
</template>

<script>
    import eventData from '~/data/event';
    export default {
        components: {
            HeaderOne: () => import("@/components/header/HeaderOne"),
            BreadCrumbTwo: () => import('@/components/common/BreadCrumbTwo'),
            EventSidebar: () => import('@/components/sidebar/EventSidebar'),
            EventList: () => import('@/components/event/EventList'),
            FooterOne: () => import("@/components/footer/FooterOne")
        },
        data () {
            return {
                eventData,
                currentPage: 1,
                perPage: 9,
                paginationOptions: {
                    texts: {
                        nextPage: '',
                        prevPage: '',
                    }
                }
            }
        },
        computed: {
            getItems() {
                let start = ( this.currentPage - 1 ) * this.perPage;
                let end = this.currentPage * this.perPage;
                return this.eventData.events.slice( start, end );
            },
            getPaginateCount() {
                return Math.ceil( this.eventData.events.length / this.perPage );
            }
        },
        methods: {
            paginateClickCallback( page ) {
                this.currentPage = Number( page );
            }
        },
        head() {
            return {
                title: 'Event List'
            }
        }
    }
</script>