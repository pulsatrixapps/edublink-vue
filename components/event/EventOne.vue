<template>
    <div class="edu-event event-style-1">
        <div class="inner">
            <div class="thumbnail">
                <n-link to="/event/event-details">
                    <img :src="'/images/event/' + eventInfo.imgSrc" :alt="(eventInfo.name) + ' Thumbnail'" />
                </n-link>
                <div class="event-time">
                    <span><i class="icon-33"></i>{{ eventInfo.time }}</span>
                </div>
            </div>
            <div class="content">
                <div class="event-date">
                    <span class="day">{{ eventInfo.date }}</span>
                    <span class="month">{{ eventInfo.month }}</span>
                </div>
                <h5 class="title">
                    <n-link to="/event/event-details">{{ eventInfo.title }}</n-link>
                </h5>
                <p>{{ eventInfo.excerpt }}</p>
                <ul class="event-meta">
                    <li><i class="icon-40"></i>{{ eventInfo.location }}</li>
                </ul>
                <div class="read-more-btn">
                    <n-link class="edu-btn btn-small btn-secondary" to="/event/event-details">Learn More <i class="icon-4"></i></n-link>
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