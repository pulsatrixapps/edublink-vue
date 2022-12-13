<template>
    <div class="edu-campus-area gap-lg-top-equal">
        <div class="container edublink-animated-shape">
            <div class="row g-5">
                <div class="col-xl-7" data-fade-delay="50" data-fade="fade-right" data-fade-duration="800">
                    <div class="campus-image-gallery">
                        <div class="campus-thumbnail">
                            <div class="thumbnail">
                                <img src="/images/others/campus-01.jpg" alt="Campus">
                            </div>
                        </div>
                        <ul class="shape-group">
                            <MouseMove addClassName="shape-1" dataDepth=".8" />
                            <MouseMove addClassName="shape-2" dataDepth="1.5" imgSrc="/images/about/shape-21.png" />
                            <MouseMove addClassName="shape-3" dataDepth="-1.5" imgSrc="/images/about/shape-13.png" />
                        </ul>
                    </div>
                </div>

                <div class="col-xl-5" data-fade-delay="50" data-fade="fade-left" data-fade-duration="800">
                    <div class="campus-content">
                        <div class="inner">
                            <div class="section-title section-left">
                                <span class="pre-title">Campus</span>
                                <h2 class="title">Campus Life</h2>
                                <span class="shape-line"><i class="icon-19"></i></span>
                            </div>
                            <div class="features-list">
                                <div class="features-box color-secondary-style">
                                    <div class="icon">
                                        <i class="icon-37 watch-icon"></i>
                                    </div>
                                    <div class="content">
                                        <h5 class="title">Student Life</h5>
                                        <p>Nostrud exer ciation laboris nis aliqup comodo perspiatix omnis iste natus.</p>
                                    </div>
                                </div>
                                <div class="features-box color-primary-style">
                                    <div class="icon">
                                        <i class="icon-38 art-board-icon"></i>
                                    </div>
                                    <div class="content">
                                        <h5 class="title">Arts & Clubs</h5>
                                        <p>Omnis iste natus error sit voluptatem accusan tium doloreque laudantum.</p>
                                    </div>
                                </div>
                                <div class="features-box color-extra05-style">
                                    <div class="icon">
                                        <i class="icon-39 fitness-icon"></i>
                                    </div>
                                    <div class="content">
                                        <h5 class="title">Sports &amp; Fitness</h5>
                                        <p>Tempor incididunt ut labore et dolore magna aliqua enim minim veniam quis.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ul class="shape-group">
                            <MouseMove addClassName="shape-4" dataDepth=".8" />
                            <MouseMove addClassName="shape-5" dataDepth="2" />
                            <MouseMove addClassName="shape-6" dataDepth="-2" imgSrc="/images/about/shape-25.png" />
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