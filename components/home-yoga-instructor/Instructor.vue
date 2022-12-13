<template>
    <div class="edu-team-area team-area-4">
        <div class="container">
            <SectionTitle preTitle='Instructors' preTitleClass='pre-textsecondary' title='Yoga Instructors' alignment='section-center' />
            
            <div class="row g-5">
                <div 
                    class="col-lg-4 col-sm-6 col-12" 
                    data-aos-delay="150" 
                    data-aos="fade-up" 
                    data-aos-duration="800" 
                    v-for="(instructor, key) in instructorData.yogaInstructors.slice(0, 3)" :key="key"
                >
                    <InstructorFour :instructor="instructor" />
                </div>
            </div>
        </div>
        <ul class="shape-group">
            <MouseMove addClassName="shape-1" dataDepth="1" data-aos-delay="500" data-aos="fade" data-aos-duration="200" imgSrc="/images/others/shape-14.png" />
            <MouseMove addClassName="shape-2" dataDepth="-2" data-aos-delay="500" data-aos="fade" data-aos-duration="200" imgSrc="/images/others/shape-13.png" />
            <MouseMove addClassName="shape-3" dataDepth="2" data-aos-delay="500" data-aos="fade" data-aos-duration="200" imgSrc="/images/others/shape-12.png" />
        </ul>
    </div>
</template>

<script>
    import instructorData from '~/data/instructor';
    export default {
        components: {
            SectionTitle: () => import('@/components/common/SectionTitle'),
            InstructorFour: () => import('@/components/instructor/InstructorFour'),
            MouseMove: () => import('@/components/animation/MouseMove')
        },
        data () {
            return {
                instructorData
            }
        }
    }
</script>