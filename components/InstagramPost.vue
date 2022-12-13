<template>
    <div class="instagram-grid">
        <n-link to="/">
            <img :src="instagram.imgSrc" :alt="instagram.imgAlt">
            <span class="user-info">
                <span class="icon"><i class="icon-instagram"></i></span>
                <span class="user-name">{{ instagram.title }}</span>
            </span>
        </n-link>
    </div>
</template>

<script>
    export default {
        props: ['instagram']
    }
</script>