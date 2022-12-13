<template>
    <button class="edublink-vue-light-dark-switcher" @click="toggleTheme()">
        <ColorScheme placeholder=''>
            <span v-if="$colorMode.value === 'dark'">
                <inline-svg src="/images/light-dark/sun.svg" alt="light icon" />
            </span>
            <span v-else>
                <inline-svg src="/images/light-dark/moon.svg" alt="dark icon" />
            </span>
        </ColorScheme>
    </button>
</template>

<script>
    export default {
        methods: {
            toggleTheme() {
                this.$colorMode.preference = this.$colorMode.preference !== 'dark' ? 'dark' : 'light';
            }
        }
    }
</script>
