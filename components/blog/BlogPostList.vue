<template>
    <div class="edu-blog blog-style-list">
        <div class="inner">
            <div class="thumbnail">
                <n-link to="/blog/blog-details">
                    <img :src="'/images/blog/blog-list/' + blogInfo.imgSrc" :alt="blogInfo.alt">
                </n-link>
            </div>
            <div class="content">
                <h5 class="title">
                    <n-link to="/blog/blog-details">{{ blogInfo.title }}</n-link>
                </h5>
                <ul class="blog-meta">
                    <li><i class="icon-27"></i>{{ blogInfo.date }}</li>
                    <li><i class="icon-28"></i>{{ blogInfo.comment }}</li>
                </ul>
                <p>{{ blogInfo.excerpt4 }}</p>
                <div class="read-more-btn">
                    <n-link to="/blog/blog-details" class="edu-btn btn-border btn-medium">
                        Learn More <i class="icon-4"></i>
                    </n-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['blogInfo']
    }
</script>