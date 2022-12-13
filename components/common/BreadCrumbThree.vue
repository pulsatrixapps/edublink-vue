<template>
    <div class="edu-breadcrumb-area breadcrumb-style-5">
        <div class="container">
            <div class="breadcrumb-inner">
                <ul class="edu-breadcrumb">
                    <li class="breadcrumb-item"><n-link to="/">Home</n-link></li>
                    <li class="separator"><i class="icon-angle-right"></i></li>
                    <li class="breadcrumb-item active" aria-current="page">{{ title }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['title']
    }
</script>