<template>
    <ul class="edublink-mobile-menu mainmenu">
        <li v-for='(link, i) in menus' :key='i'>
            <n-link :to="link.url">
                {{ link.title }}
            </n-link>
            <span class="submenu-toggle" v-if="link.submenu">
                <i class="ri-arrow-down-s-line"></i>
            </span>
            <ul class="submenu-wrapper" v-if="link.submenu">
                <li v-for='(link, i) in link.submenu' :key='i' class="title">
                    <n-link :to="link.url"> {{ link.title }} </n-link>
                    <span class="submenu-toggle" v-if="link.submenu">
                        <i class="ri-arrow-down-s-line"></i>
                    </span> 
                    <ul class="submenu-wrapper" v-if="link.submenu">
                        <li v-for='(link, i) in link.submenu' :key='i'>
                            <n-link :to="link.url"> {{ link.title }} </n-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
    import mobileMenuResponsive from '../../common/mobileMenuResponsive';
    export default {
        data() {
            return {
                menus: [
                    {
                        url: '',
                        title: 'Home',
                        submenu: [
                            {
                                url: '/',
                                title: 'EduBlink Education'
                            },
                            {
                                url: '/distant-learning',
                                title: 'Distant Learning'
                            },
                            {
                                url: '/university',
                                title: 'University'
                            },
                            {
                                url: '/online-academy',
                                title: 'Online Academy'
                            },
                            {
                                url: '/kitchen-coach',
                                title: 'Kitchen Coach'
                            },
                            {
                                url: '/yoga-instructor',
                                title: 'Yoga Instructor'
                            },
                            {
                                url: '/kindergarten',
                                title: 'Kindergarten'
                            },
                            {
                                url: '/landing-demo',
                                title: 'Landing Demo'
                            }
                        ]
                    },
                    {
                        url: '',
                        title: 'Pages',
                        submenu: [
                            {
                                url: '',
                                title: 'Inner Pages',
                                submenu: [
                                    {
                                        url: '/about-us-one',
                                        title: 'About Us 1'
                                    },
                                    {
                                        url: '/about-us-two',
                                        title: 'About Us 2'
                                    },
                                    {
                                        url: '/about-us-three',
                                        title: 'About Us 3'
                                    },
                                    {
                                        url: '/instructor/instructor-one',
                                        title: 'Instructor 1'
                                    },
                                    {
                                        url: '/instructor/instructor-two',
                                        title: 'Instructor 2'
                                    },
                                    {
                                        url: '/instructor/instructor-three',
                                        title: 'Instructor 3'
                                    },
                                    {
                                        url: '/instructor/instructor-profile',
                                        title: 'Instructor Profile'
                                    },
                                    {
                                        url: '/faq',
                                        title: 'Faq\'s'
                                    },
                                    {
                                        url: '/404',
                                        title: '404 Error'
                                    },
                                    {
                                        url: '/coming-soon',
                                        title: 'Coming Soon'
                                    }
                                ]
                            },
                            {
                                url: '',
                                title: 'Inner Pages',
                                submenu: [
                                    {
                                        url: '/gallery-grid',
                                        title: 'Gallery Grid'
                                    },
                                    {
                                        url: '/gallery-masonry',
                                        title: 'Gallery Masonry'
                                    },
                                    {
                                        url: '/event/event-grid',
                                        title: 'Event Grid'
                                    },
                                    {
                                        url: '/event/event-list',
                                        title: 'Event List'
                                    },
                                    {
                                        url: '/event/event-details',
                                        title: 'Event Details'
                                    },
                                    {
                                        url: '/pricing-table',
                                        title: 'Pricing Table'
                                    },
                                    {
                                        url: '/purchase-guide',
                                        title: 'Purchase Guide'
                                    },
                                    {
                                        url: '/privacy-policy',
                                        title: 'Privacy Policy'
                                    },
                                    {
                                        url: '/terms-condition',
                                        title: 'Terms & Condition'
                                    },
                                    {
                                        url: '/my-account',
                                        title: 'Sign In'
                                    }
                                ]
                            },
                            {
                                url: '',
                                title: 'Shop Pages',
                                submenu: [
                                    {
                                        url: '/shop',
                                        title: 'Shop'
                                    },
                                    {
                                        url: '/shop/product-details',
                                        title: 'Product Details'
                                    },
                                    {
                                        url: '/shop/cart',
                                        title: 'Cart'
                                    },
                                    {
                                        url: '/shop/wishlist',
                                        title: 'Wishlist'
                                    },
                                    {
                                        url: '/shop/checkout',
                                        title: 'Checkout'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        url: '',
                        title: 'Courses',
                        submenu: [
                            {
                                url: '/course/course-one',
                                title: 'Course Style 1'
                            },
                            {
                                url: '/course/course-two',
                                title: 'Course Style 2'
                            },
                            {
                                url: '/course/course-three',
                                title: 'Course Style 3'
                            },
                            {
                                url: '/course/course-four',
                                title: 'Course Style 4'
                            },
                            {
                                url: '/course/course-five',
                                title: 'Course Style 5'
                            },
                            {
                                url: '/course/course-details',
                                title: 'Course Details 1'
                            },
                            {
                                url: '/course/course-details-2',
                                title: 'Course Details 2'
                            },
                            {
                                url: '/course/course-details-3',
                                title: 'Course Details 3'
                            }
                        ]
                    },
                    {
                        url: '',
                        title: 'Blog',
                        submenu: [
                            {
                                url: '/blog/blog-standard',
                                title: 'Blog Standard'
                            },
                            {
                                url: '/blog/blog-masonry',
                                title: 'Blog Masonry'
                            },
                            {
                                url: '/blog/blog-list',
                                title: 'Blog List'
                            },
                            {
                                url: '/blog/blog-details',
                                title: 'Blog Details'
                            }
                        ]
                    },
                    {
                        url: '',
                        title: 'Contact',
                        submenu: [
                            {
                                url: '/contact-us',
                                title: 'Contact Us'
                            },
                            {
                                url: '/contact-me',
                                title: 'Contact Me'
                            }
                        ]
                    }
                ]
            }
        },
        mounted() {
            mobileMenuResponsive();
        }
    }
</script>