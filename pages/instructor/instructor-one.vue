<template>
    <div id="main-wrapper" class="main-wrapper">
        
        <HeaderOne />

        <BreadCrumbOne pageTitle='Instructor 1' title='Leadership Instruction' />

        <div class="edu-team-area team-area-2 edu-section-gap">
            <div class="container">
                <SectionTitle preTitle='Instructors' title='Course Instructors' alignment='section-center' />
                
                <div class="row g-5">
                    <div 
                        class="col-lg-4 col-md-6" 
                        data-aos-delay="150" 
                        data-aos="fade-up" 
                        data-aos-duration="800" 
                        v-for="(instructor, key) in instructorData.instructors.slice(0, 6)" 
                        :key="key"
                    >
                        <InstructorTwo :instructor="instructor" />
                    </div>
                </div>
            </div>
        </div>

        <FooterOne />
    </div>
</template>

<script>
    import instructorData from '~/data/instructor';
    export default {
        components: {
            HeaderOne: () => import("@/components/header/HeaderOne"),
            BreadCrumbOne: () => import('@/components/common/BreadCrumbOne'),
            SectionTitle: () => import('@/components/common/SectionTitle'),
            InstructorTwo: () => import('@/components/instructor/InstructorTwo'),
            FooterOne: () => import("@/components/footer/FooterOne")
        },
        data () {
            return {
                instructorData
            }
        },
        head() {
            return {
                title: 'Instructor 1'
            }
        }
    }
</script>