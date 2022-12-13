<template>
    <div id="main-wrapper" class="main-wrapper">
        
        <HeaderOne />

        <BreadCrumbTwo title='Privacy Policy' />

        <section class="privacy-policy-area">
            <div class="container">
                <div class="row row--30">
                    <div class="col-lg-8">
                        <div class="privacy-policy">
                            <div class="text-block">
                                <h3 class="title">Definitions of Privacy Policy</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis aliquip commodo consequat aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                            </div>
                            <div class="text-block">
                                <h4 class="title">General information</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat.</p>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                            </div>
                            <div class="text-block">
                                <h4 class="title">Availability of Website</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <ul>
                                    <li>Internet protocol (IP) addresses</li>
                                    <li>Browser type, Internet Service Provider (ISP)</li>
                                    <li>Date and time stamp, referring/exit pages</li>
                                    <li>Possibly the number of click</li>
                                </ul>
                            </div>
                            <div class="text-block">
                                <h4 class="title">Privacy Policies</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. </p>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                            </div>
                            <div class="text-block">
                                <h4 class="title">Third Party Policies</h4>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                                <ul>
                                    <li>The Company name, the Company logo, and all related names, logos, product and service names, designs</li>
                                    <li>No right, title or interest in or to the online course or any portion thereof, is transferred to any Member, and all rights not expressly granted herein, are reserved by the Company.</li>
                                    <li>The online course is owned by the Company and is protected by American and international copyright, trademark, patent, trade secret and other intellectual property or proprietary rights laws.</li>
                                </ul>
                            </div>
                            <div class="text-block">
                                <h4 class="title">Online Privacy</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. </p>
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
                title: 'Privacy Policy'
            }
        }
    }
</script>