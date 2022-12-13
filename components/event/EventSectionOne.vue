<template>
    <div class="edu-event-area" :class="extraClass">
        <div class="container edublink-animated-shape">

            <SectionTitle preTitle='Events & News' title='Popular Events & News' alignment='section-center' />
            <div class="row g-5">
                <div 
                    class="col-lg-4 col-md-6" 
                    data-aos-delay="100" 
                    data-aos="fade-up" 
                    data-aos-duration="800"
                    v-for="event in eventData.events.slice( 0, 3 )" :key="event.id"
                >
                    <EventOne :eventInfo="event" />
                </div>
            </div>
            <div class="event-view-all-btn" data-aos-delay="150" data-aos="fade-up" data-aos-duration="1200">
                <h6 class="view-text">The Latest Events from EduBlink. 
                    <n-link to="/event/event-grid" class="btn-transparent">View All <i class="icon-4"></i></n-link>
                </h6>
            </div>

            <ul class="shape-group">
                <li class="shape-1" data-aos-delay="500" data-aos="fade" data-aos-duration="200">
                    <img class="rotateit" src="/images/about/shape-13.png" alt="Shape">
                </li>
                <MouseMove addClassName="shape-2" dataDepth=".9" data-aos-delay="500" data-aos="fade" data-aos-duration="200" />
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
            EventOne: () => import('@/components/event/EventOne'),
            MouseMove: () => import('@/components/animation/MouseMove')
        },
        data () {
            return {
                eventData
            }
        }
    }
</script>