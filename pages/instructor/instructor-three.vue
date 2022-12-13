<template>
    <div id="main-wrapper" class="main-wrapper">
        
        <HeaderOne />

        <BreadCrumbOne pageTitle='Instructor 3' title='Leadership Instruction' />

        <div class="edu-team-area team-area-1 gap-tb-text">
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
                        <InstructorThree :instructor="instructor" />
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
            InstructorThree: () => import('@/components/instructor/InstructorThree'),
            FooterOne: () => import("@/components/footer/FooterOne")
        },
        data () {
            return {
                instructorData
            }
        },
        head() {
            return {
                title: 'Instructor 3'
            }
        }
    }
</script>