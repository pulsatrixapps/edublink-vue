<template>
    <div class="edu-brand-area brand-area-1 gap-top-equal">
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                    <div class="brand-section-heading">
                        <SectionTitle preTitle='Our Partners' title='Learn with Our Partners' alignment='section-left' subTitle='Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor incididunt.' />
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="brand-grid-wrap">
                        <div class="brand-grid">
                            <img src="/images/brand/brand-01.png" alt="Brand Logo">
                        </div>
                        <div class="brand-grid">
                            <img src="/images/brand/brand-02.png" alt="Brand Logo">
                        </div>
                        <div class="brand-grid">
                            <img src="/images/brand/brand-03.png" alt="Brand Logo">
                        </div>
                        <div class="brand-grid">
                            <img src="/images/brand/brand-04.png" alt="Brand Logo">
                        </div>
                        <div class="brand-grid">
                            <img src="/images/brand/brand-05.png" alt="Brand Logo">
                        </div>
                        <div class="brand-grid">
                            <img src="/images/brand/brand-06.png" alt="Brand Logo">
                        </div>
                        <div class="brand-grid">
                            <img src="/images/brand/brand-07.png" alt="Brand Logo">
                        </div>
                        <div class="brand-grid">
                            <img src="/images/brand/brand-08.png" alt="Brand Logo">
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
        }
    }
</script>