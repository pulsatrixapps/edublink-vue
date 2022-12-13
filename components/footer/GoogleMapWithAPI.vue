<template>
    <div class="google-map-area" id="support">
        <GmapMap
            :center="{ lat:40.685619, lng:-73.953666 }"
            :zoom="15"
            map-type-id="terrain"
        >
        </GmapMap>
    </div>
</template>

<style>
    .vue-map-container {
        height: 500px;
    }
</style>