<template>
    <div class="edu-breadcrumb-area">
        <div class="container">
            <div class="breadcrumb-inner">
                <div class="page-title">
                    <h1 class="title">{{ pageTitle ? pageTitle : title }}</h1>
                </div>
                <ul class="edu-breadcrumb">
                    <li class="breadcrumb-item">
                        <n-link to="/">Home</n-link>
                    </li>
                    <li class="separator"><i class="icon-angle-right"></i></li>
                    <li class="breadcrumb-item active" aria-current="page">{{ title }}</li>
                </ul>
            </div>
        </div>
        <ul class="shape-group">
            <li class="shape-1">
                <span></span>
            </li>
            <MouseMove addClassName="shape-2" dataDepth="2" imgSrc="/images/about/shape-13.png" />
            <MouseMove addClassName="shape-3" dataDepth="-2" imgSrc="/images/about/shape-15.png" />
            <li class="shape-4">
                <span></span>
            </li>
            <li class="shape-5"><img src="/images/about/shape-07.png" alt="shape"></li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['title', 'pageTitle'],
        components: {
            MouseMove: () => import('@/components/animation/MouseMove')
        }
    }
</script>