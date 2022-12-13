<template>
    <div class="edu-cta-banner-area cta-banner-3 bg-image svg-image--4">
        <div class="container edublink-animated-shape">
            <div class="edu-cta-banner">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="section-title section-center" data-aos-delay="150" data-aos="fade-up" data-aos-duration="800">
                            <h2 class="title">Quickly Get Updates About Your Class Event and News!</h2>
                            <div class="newsletter-form">
                                <div class="input-group">
                                    <input type="email" class="form-control" placeholder="Get started now">
                                    <button class="edu-btn btn-curved" type="button">Subscribe <i class="icon-4"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ul class="shape-group">
                <MouseMove addClassName="shape-1" dataDepth="-1" data-aos-delay="150" data-aos="fade-right" data-aos-duration="800" imgSrc="/images/banner/kid-1.png" />
                <MouseMove addClassName="shape-2" dataDepth="1" data-aos-delay="150" data-aos="fade-left" data-aos-duration="800" imgSrc="/images/banner/kid-2.png" />
                <li class="shape-3">
                    <img src="/images/banner/icon-1.png" alt="shape">
                </li>
                <li class="shape-4">
                    <img src="/images/banner/icon-2.png" alt="shape">
                </li>
            </ul>
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