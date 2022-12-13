<template>
    <header class="edu-header header-style-4 header-fullwidth no-topbar">
        <div class="header-mainmenu" :class="{'edu-sticky': isSticky}">
            <div class="container-fluid">
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
                            <Navigation />
                        </nav>
                    </div>

                    <div class="header-right">
                        <ul class="header-action">
                            <li class="search-bar">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Search">
                                    <button class="search-btn" type="button"><i class="icon-2"></i></button>
                                </div>
                            </li>
                            <li class="icon search-icon">
                                <button class="search-trigger" @click="searchPopUpOpen( 'addClass', 'open' )">
                                    <i class="icon-2"></i>
                                </button>
                            </li>
                            <li class="icon light-dark-icon">
                                <ColorMode />
                            </li>
                            <li class="header-btn">
                                <n-link to="/contact-us" class="edu-btn btn-medium btn-curved">Try for free <i class="icon-4"></i></n-link>
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

        <OffCanvasMobileMenuOne />
    </header>
</template>

<script>
    export default {
        components: {
            Navigation: () => import("@/components/header/Navigation"),
            SearchPopUp: () => import("@/components/header/SearchPopUp"),
            ColorMode: () => import("@/components/common/ColorMode"),
            OffCanvasMobileMenuOne: () => import("@/components/header/OffCanvasMobileMenuOne")
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