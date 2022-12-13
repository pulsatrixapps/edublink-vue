<template>
    <div class="features-area-4">
        <div class="container">
            <SectionTitle preTitle='Our Activities' preTitleClass='pre-textsecondary' title='Will Be Happy With Our Activities' alignment='section-center' />

            <div class="row">
                <div class="col-lg-4 col-md-6" data-aos-delay="50" data-aos="fade-up" data-aos-duration="800" v-for="( activity, index ) in activities" :key="index">
                    <div class="features-box features-style-4" :class="activity.colorClass">
                        <div class="icon">
                            <i :class="activity.iconClass"></i>
                        </div>
                        <div class="content">
                            <h5 class="title">{{ activity.title }}</h5>
                            <p>{{ activity.description }}</p>
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
                activities: [
                    {
                        title: "Summer Camp",
                        iconClass: "icon-84",
                        colorClass: "color-primary-style",
                        description: "Magna aliquaenim minim veniam nostrud exercit ation ullamco laboris."
                    },
                    {
                        title: "Museum Visit",
                        iconClass: "icon-85",
                        colorClass: "color-secondary-style",
                        description: "Magna aliquaenim minim veniam nostrud exercit ation ullamco laboris."
                    },
                    {
                        title: "Sports Training",
                        iconClass: "icon-86",
                        colorClass: "color-extra02-style",
                        description: "Magna aliquaenim minim veniam nostrud exercit ation ullamco laboris."
                    },
                    {
                        title: "Music Club",
                        iconClass: "icon-87",
                        colorClass: "color-extra03-style",
                        description: "Magna aliquaenim minim veniam nostrud exercit ation ullamco laboris."
                    },
                    {
                        title: "Math Club",
                        iconClass: "icon-88",
                        colorClass: "color-extra04-style",
                        description: "Magna aliquaenim minim veniam nostrud exercit ation ullamco laboris."
                    },
                    {
                        title: "Clear & Cleaning",
                        iconClass: "icon-89",
                        colorClass: "color-extra05-style",
                        description: "Magna aliquaenim minim veniam nostrud exercit ation ullamco laboris."
                    }
                ]
            }
        }
    }
</script>