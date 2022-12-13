<template>
    <header class="edu-header header-style-2">
        <HeaderTopTwo v-if="showHeaderTop" />
        <div class="header-mainmenu" :class="{'edu-sticky': isSticky}">
            <div class="container">
                <div class="header-navbar">
                    <div class="header-brand">
                        <div class="logo">
                            <n-link to="/">
                                <img class="logo-light" src="/images/logo/logo-dark-2.png" alt="Dark Logo" v-if="$colorMode.value === 'light'">
                                <img class="logo-dark" src="/images/logo/logo-light-2.png" alt="Light Logo" v-if="$colorMode.value === 'dark'">
                            </n-link>
                        </div>
                    </div>
                    <div class="header-mainnav">
                        <nav class="mainmenu-nav">
                            <Navigation />
                        </nav>
                    </div>
                    <div class="header-right">
                        <ul class="header-action">
                            <li class="icon search-icon">
                                <button class="search-trigger" @click="searchPopUpOpen( 'addClass', 'open' )">
                                    <i class="icon-2"></i>
                                </button>
                            </li>
                            <li class="icon light-dark-icon">
                                <ColorMode />
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

        <SearchPopUp />

        <OffCanvasMobileMenuTwo />
    </header>
</template>

<script>
    export default {
        components: {
            HeaderTopTwo: () => import("@/components/header/HeaderTopTwo"),
            Navigation: () => import("@/components/header/Navigation"),
            SearchPopUp: () => import("@/components/header/SearchPopUp"),
            ColorMode: () => import("@/components/common/ColorMode"),
            OffCanvasMobileMenuTwo: () => import("@/components/header/OffCanvasMobileMenuTwo")
        },
        data(){
            return {
                isSticky: false
            }
        },
        props: ['showHeaderTop'],
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

            // search popup
            searchPopUpOpen(addRemoveClass, className) {
                const el = document.querySelector( '#edu-search-popup' );
                if ( addRemoveClass === 'addClass' ) {
                    el.classList.add( className );
                } else {
                    el.classList.remove( className );
                }
            }
        }
    }
</script>