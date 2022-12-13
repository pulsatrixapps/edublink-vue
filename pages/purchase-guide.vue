<template>
    <div id="main-wrapper" class="main-wrapper">
        
        <HeaderOne />

        <BreadCrumbTwo title='Purchase Guide' />

        <section class="privacy-policy-area purchase-guide-area dfdfd">
            <div class="container">
                <div class="row row--30">
                    <div class="col-lg-8">
                        <div class="privacy-policy purchase-guide">
                            <div class="text-block">
                                <h3 class="title">Purchase Currency</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis aliquip commodo consequat aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat. </p>
                            </div>
                            <div class="text-block">
                                <h4 class="title">Account Registering</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div class="row">
                                    <div class="col-lg-5">
                                        <ul>
                                            <li>Name (required)</li>
                                            <li>Age (required)</li>
                                            <li>Date of birth (required)</li>
                                            <li>Passport/ ID no. (required)</li>
                                            <li>Current career (required)</li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-6">
                                        <ul>
                                            <li>Mobile phone numbers (required)</li>
                                            <li>Email address (required)</li>
                                            <li>Hobbies & interests (optional)</li>
                                            <li>Social profiles (optional)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="text-block">
                                <h4 class="title">How to Purchase a Course?</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis aliquip commodo consequat aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                            </div>
                            <div class="text-block">
                                <h4 class="title">Accepted Credit Cards</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <ul>
                                    <li>Visa</li>
                                    <li>Mastercards</li>
                                    <li>American Express</li>
                                    <li>Discover</li>
                                </ul>
                            </div>
                            <div class="text-block">
                                <h4 class="title">Why to Buy Our Course?</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <ul>
                                    <li>Updated content on a regular basis</li>
                                    <li>Secure & hassle-free payment</li>
                                    <li>1-click checkout</li>
                                    <li>Easy access & smart user dashboard</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <PageSidebarOne />
                    </div>
                </div>
            </div>
        </section>

        <FooterOne />
    </div>
</template>

<script>
    export default {
        components: {
            HeaderOne: () => import("@/components/header/HeaderOne"),
            BreadCrumbTwo: () => import("@/components/common/BreadCrumbTwo"),
            PageSidebarOne: () => import("@/components/sidebar/PageSidebarOne.vue"),
            FooterOne: () => import("@/components/footer/FooterOne")
        },
        head() {
            return {
                title: 'Purchase Guide'
            }
        }
    }
</script>