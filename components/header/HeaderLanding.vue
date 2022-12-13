<template>
    <header class="edu-header header-style-1 pv-header-style">
        <div class="header-mainmenu" :class="{'edu-sticky': isSticky}">
            <div class="container-custom">
                <div class="header-navbar">
                    <div class="header-brand">
                        <div class="logo">
                            <n-link to="/">
                                <img class="logo-light" src="/images/logo/logo-dark.png" alt="Dark Logo" v-if="$colorMode.value === 'light'">
                                <img class="logo-dark" src="/images/logo/logo-white.png" alt="Light Logo" v-if="$colorMode.value === 'dark'">
                            </n-link>
                        </div>
                    </div>
                    <div class="header-mainnav">
                        <nav class="mainmenu-nav">
                            <ul class="mainmenu">
                                <li>
                                    <a href="#intro">Intro</a>
                                </li>
                                <li>
                                    <a href="#demos">Demos</a>
                                </li>
                                <li>
                                    <a href="#features">Features</a>
                                </li>
                                <li>
                                    <a href="https://docs.devsblink.com/edublink-vue" target="_blank">Documentation</a>
                                </li>
                                <li>
                                    <a href="https://devsblink.freshdesk.com/" target="_blank">Support</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="header-right">
                        <ul class="header-action">
                            <li class="header-btn">
                                <a href="#" target="_blank" class="edu-btn btn-medium">Purchase Now</a>
                            </li>
                            <li class="mobile-menu-bar d-block d-xl-none">
                                <button class="hamberger-button" @click="mobileMenuOpen( 'addClass', 'active' )">
                                    <i class="icon-54"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

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
                <ul class="edublink-mobile-menu mainmenu">
                    <li>
                        <a href="#intro" @click="mobileMenuClose( 'removeClass', 'active' )">Intro</a>
                    </li>
                    <li>
                        <a href="#demos" @click="mobileMenuClose( 'removeClass', 'active' )">Demos</a>
                    </li>
                    <li>
                        <a href="#features" @click="mobileMenuClose( 'removeClass', 'active' )">Features</a>
                    </li>
                    <li>
                        <a href="https://docs.devsblink.com/edublink-vue" target="_blank" @click="mobileMenuClose( 'removeClass', 'active' )">Documentation</a>
                    </li>
                    <li>
                        <a href="https://devsblink.freshdesk.com/" target="_blank" @click="mobileMenuClose( 'removeClass', 'active' )">Support</a>
                    </li>
                    <li class="header-btn">
                        <a href="#" target="_blank" class="edu-btn btn-medium">Purchase Now</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        components: {
            ColorMode: () => import("@/components/common/ColorMode")
        },
        data(){
            return {
                isSticky: false
            }
        },
        mounted(){
            window.addEventListener( 'scroll', () => {
                let scrollPos = window.scrollY
                if( scrollPos >= 200 ) {
                    this.isSticky = true
                } else {
                    this.isSticky = false
                }
            } )
        },
        methods: {
            // Off-canvas Mobile Menu Open
            mobileMenuOpen( addRemoveClass, className ) {
                const el = document.querySelector( '#offcanvas-menu' );
                if ( addRemoveClass === 'addClass' ) {
                    el.classList.add( className );
                } else {
                    el.classList.remove( className );
                }
            },
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