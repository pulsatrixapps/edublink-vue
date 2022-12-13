<template>
    <footer class="pv-cta-area bg-image">
        <div class="container">
            <div class="cta-content">
                <span class="subtitle" data-sal-delay="100" data-sal="slide-up" data-sal-duration="1000">Great Solutions for Smart People</span>
                <h2 class="title" data-sal-delay="100" data-sal="slide-up" data-sal-duration="1000">Create Your Education Website <br> Today with EduBlink</h2>
                <div class="button-group" data-sal-delay="400" data-sal="slide-up" data-sal-duration="1000">
                    <a href="#" target="_blank" class="edu-btn">Download EduBlink <i class="icon-4"></i></a>
                    <a href="#demos" class="edu-btn btn-bg-white">Demo Preview <i class="icon-4"></i></a>
                </div>
            </div>
        </div>
        <ul class="shape-group">
            <MouseMove addClassName="shape-1" dataDepth="2" data-sal-delay="500" data-sal="fade" data-sal-duration="1000" imgSrc="/images/counterup/shape-02.png" />
            <li class="shape-2" data-sal-delay="500" data-sal="fade" data-sal-duration="1000">
                <img class="rotateit" src="/images/about/shape-35.png" alt="shape">
            </li>
            <MouseMove addClassName="shape-3" dataDepth="-2" data-sal-delay="500" data-sal="fade" data-sal-duration="1000" imgSrc="/images/about/shape-07.png" />
            <MouseMove addClassName="shape-4" dataDepth="2.5" data-sal-delay="500" data-sal="fade" data-sal-duration="1000" />
        </ul>
    </footer>
</template>

<script>
    export default {
        components: {
            MouseMove: () => import('@/components/animation/MouseMove')
        }
    }
</script>