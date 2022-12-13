<template>
    <div class="edu-team-area team-area-6 edu-section-gap">
        <div class="container">
            <SectionTitle preTitle='Instructors' title='Course Instructors' alignment='section-center' />
            
            <div class="row row--45 g-5">
                <div 
                    class="col-lg-4 col-md-6" 
                    data-aos-delay="100" 
                    data-aos="fade-up" 
                    data-aos-duration="800" 
                    v-for="(instructor, key) in instructorData.instructors.slice(0, 3)" 
                    :key="key"
                >
                    <InstructorFive :instructor="instructor" />
                </div>
            </div>
        </div>
        <ul class="shape-group">
            <li class="shape-1">
                <img src="/images/others/map-shape-3.png" alt="Shape">
            </li>
            <li class="shape-2">
                <img src="/images/others/map-shape-3.png" alt="Shape">
            </li>
            <li class="shape-3">
                <img src="/images/others/map-shape-3.png" alt="Shape">
            </li>
        </ul>
    </div>
</template>

<script>
    import instructorData from '~/data/instructor';
    export default {
        components: {
            SectionTitle: () => import('@/components/common/SectionTitle'),
            InstructorFive: () => import('@/components/instructor/InstructorFive')
        },
        data () {
            return {
                instructorData
            }
        }
    }
</script>