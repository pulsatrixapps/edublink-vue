<template>
    <div class="home-one-cta-two cta-area-1">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-8">
                    <div class="home-one-cta edu-cta-box bg-image bg-image--7">
                        <div class="inner">
                            <div class="content text-md-end">
                                <span class="subtitle">Get In Touch:</span>
                                <h3 class="title"><a href="mailto:info@edublink" target="_blank">info@edublink</a></h3>
                            </div>
                            <div class="sparator">
                                <span>or</span>
                            </div>
                            <div class="content">
                                <span class="subtitle">Call Us Via:</span>
                                <h3 class="title"><a href="tel:+011235641231">+01 123 5641 231</a></h3>
                            </div>
                        </div>
                        <ul class="shape-group">
                            <MouseMove addClassName="shape-01" dataDepth="2" imgSrc="/images/cta/shape-06.png" />
                            <MouseMove addClassName="shape-02" dataDepth="-2" imgSrc="/images/cta/shape-12.png" />
                            <MouseMove addClassName="shape-03" dataDepth="-3" imgSrc="/images/cta/shape-04.png" />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            MouseMove: () => import('@/components/animation/MouseMove')
        }
    }
</script>