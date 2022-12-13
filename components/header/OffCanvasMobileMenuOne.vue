<template>
    <div id="offcanvas-menu" class="edublink-vue-mobile-popup-menu">
        <div class="mobile-menu-overlay" @click="mobileMenuClose( 'removeClass', 'active' )"></div>
        <div class="inner">
            <div class="header-top">
                <div class="logo">
                    <n-link to="/">
                        <img class="logo-light" src="/images/logo/logo-dark.png" alt="Dark Logo" v-if="$colorMode.value === 'light'">
                        <img class="logo-dark" src="/images/logo/logo-white.png" alt="Light Logo" v-if="$colorMode.value === 'dark'">
                    </n-link>
                </div>
                <div class="close-menu">
                    <button class="close-button" @click="mobileMenuClose( 'removeClass', 'active' )">
                        <i class="icon-73"></i>
                    </button>
                </div>
            </div>
            <MobileMenu />
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            MobileMenu: () => import('@/components/header/MobileMenu'),
            ColorMode: () => import("@/components/common/ColorMode")
        },
        methods: {
            // Off-canvas Mobile Menu Close
            mobileMenuClose( triggerRemoveClass, className ) {
                const el = document.querySelector( '#offcanvas-menu' );
                if ( triggerRemoveClass === 'addClass' ) {
                    el.classList.add( className );
                } else {
                    el.classList.remove( className );
                }
            }
        }
    }
</script>