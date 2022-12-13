<template>
    <div class="pv-demo-area" id="demos">
        <div class="container-custom">
            <div class="row">
                <div class="col-lg-12">
                    <SectionTitle preTitle='Unique Demos' title='7+ Pre-Made Creative Online Course <br> Education Homepage' alignment='section-center splash-title' disableMark />
                </div>
            </div>

            <div class="row row--30">
                <div 
                    class="col-lg-4 col-md-6 col-sm-6 col-12" 
                    data-aos-delay="100" data-aos="fade-up" data-aos-duration="800"
                    v-for="(demo, i) in homeDemos" 
                    :key="i"
                >
                    <div class="single-demo">
                        <div class="inner">
                            <div class="thumbnail">
                                <n-link :to="demo.link" target="_blank">
                                    <img :src="'/images/preview/' + demo.imageSrc" alt="Previe Image" />
                                </n-link>
                                <div class="hover-action">
                                    <n-link :to="demo.link" target="_blank" class="edu-btn btn-large">View Demo <i class="icon-4"></i></n-link>
                                </div>
                            </div>
                            <h5 class="title"><n-link :to="demo.link" target="_blank">{{ demo.title }}</n-link></h5>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 col-12" data-aos-delay="100" data-aos="fade-up" data-aos-duration="800">
                    <div class="single-demo coming-soon">
                        <div class="inner">
                            <div class="thumbnail">
                                <a class="thumbnail-link" href="#">
                                    <img src="/images/preview/coming-soon.png" alt="Preview Images">
                                </a>
                            </div>
                            <h5 class="title"><a href="#">Coming Soon</a></h5>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 col-12" data-aos-delay="100" data-aos="fade-up" data-aos-duration="800">
                    <div class="single-demo coming-soon">
                        <div class="inner">
                            <div class="thumbnail">
                                <a class="thumbnail-link" href="#">
                                    <img src="/images/preview/coming-soon.png" alt="Preview Images">
                                </a>
                            </div>
                            <h5 class="title"><a href="#">Coming Soon</a></h5>
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
        data () {
            return {
                homeDemos: [
                    {
                        link: '/',
                        imageSrc: 'home-01.jpg',
                        title: 'EduBlink Education'
                    },
                    {
                        link: '/distant-learning',
                        imageSrc: 'home-02.jpg',
                        title: 'Distant Learning'
                    },
                    {
                        link: '/university',
                        imageSrc: 'home-03.jpg',
                        title: 'University'
                    },
                    {
                        link: '/online-academy',
                        imageSrc: 'home-04.jpg',
                        title: 'Online Academy'
                    },
                    {
                        link: '/kitchen-coach',
                        imageSrc: 'home-05.jpg',
                        title: 'Kitchen Coach'
                    },
                    {
                        link: '/yoga-instructor',
                        imageSrc: 'home-06.jpg',
                        title: 'Yoga Instructor'
                    },
                    {
                        link: '/kindergarten',
                        imageSrc: 'home-07.jpg',
                        title: 'Kindergarten'
                    }
                ]
            }
        }
    }
</script>