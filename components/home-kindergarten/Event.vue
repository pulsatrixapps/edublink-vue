<template>
    <div class="kindergarten-event event-area-3 bg-image">
        <div class="container edublink-animated-shape">
            <SectionTitle preTitle='Discover Event' preTitleClass='pre-textsecondary' title='Join Our Upcoming Event' alignment='section-center' />

            <div class="row g-5">
                <div 
                    class="col-lg-6 col-12" 
                    data-aos-delay="150" 
                    data-aos="fade-up" 
                    data-aos-duration="800"
                    v-for="event in eventData.kindergartenEvents.slice( 0, 4 )" :key="event.id"
                >
                    <EventTwo :eventInfo="event" />
                </div>
            </div>

            <ul class="shape-group">
                <MouseMove addClassName="shape-1" dataDepth="2" imgSrc="/images/banner/icon-2.png" />
                <MouseMove addClassName="shape-2" dataDepth="-2" imgSrc="/images/banner/icon-1.png" />
            </ul>
        </div>
    </div>
</template>

<script>
    import eventData from '~/data/event';
    export default {
        props: ['extraClass'],
        components: {
            SectionTitle: () => import('@/components/common/SectionTitle'),
            EventTwo: () => import('@/components/event/EventTwo'),
            MouseMove: () => import('@/components/animation/MouseMove')
        },
        data () {
            return {
                eventData
            }
        }
    }
</script>

<style lang="scss">
    .kindergarten-event {
        position: relative;
        .edublink-animated-shape {
            z-index: 1;
        }
    }
</style>