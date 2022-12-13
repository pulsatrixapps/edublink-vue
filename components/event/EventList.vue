<template>
    <div class="edu-event-list event-list-2">
        <div class="inner">
            <div class="thumbnail">
                <n-link to="/event/event-details">
                    <img :src="'/images/event/' + eventInfo.imgSrc" :alt="(eventInfo.name) + ' Thumbnail'" />
                </n-link>
            </div>
            <div class="content">
                <ul class="event-meta">
                    <li><i class="icon-27"></i>{{ eventInfo.fullDate }}</li>
                    <li><i class="icon-33"></i>{{ eventInfo.time }}</li>
                </ul>
                <h4 class="title">
                    <n-link to="/event/event-details">{{ eventInfo.title }}</n-link>
                </h4>
                <span class="event-location"><i class="icon-40"></i>{{ eventInfo.location }}</span>
                <p>{{ eventInfo.excerpt }}</p>
                <div class="read-more-btn">
                    <n-link class="edu-btn btn-medium btn-border" to="/event/event-details">Learn More <i class="icon-4"></i></n-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['eventInfo']
    }
</script>