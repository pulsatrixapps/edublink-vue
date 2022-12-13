<template>
    <div id="main-wrapper" class="main-wrapper">
        
        <HeaderOne />

        <div class="edu-breadcrumb-area breadcrumb-style-4">
            <div class="container">
                <div class="breadcrumb-inner">
                    <div class="page-title">
                        <span class="pre-title">UPCOMING EVENT</span>
                        <h1 class="title">Global Education Fall Meeting for Everyone</h1>
                    </div>
                    <ul class="course-meta">
                        <li><i class="icon-27"></i>Oct 10, 2022</li>
                        <li><i class="icon-33"></i>08:00AM-10:00PM</li>
                        <li><i class="icon-40"></i>Newyork City, USA</li>
                    </ul>
                </div>
            </div>

            <ul class="shape-group">
                <li class="shape-1">
                    <span></span>
                </li>
                <MouseMove addClassName="shape-2" dataDepth="2" imgSrc="/images/about/shape-13.png" />
                <MouseMove addClassName="shape-3" dataDepth="-2" imgSrc="/images/about/shape-15.png" />
                <li class="shape-4">
                    <span></span>
                </li>
                <li class="shape-5"><img src="/images/about/shape-07.png" alt="shape"></li>
            </ul>
        </div>
        
        <section class="event-details-area edu-section-gap">
            <div class="container">
                <div class="event-details">
                    <div class="main-thumbnail">
                        <img src="/images/event/event-details/event-details-main.jpg" alt="Event">
                    </div>
                    <div class="row row--30">
                        <div class="col-lg-8">
                            <div class="details-content">
                                <h3>About The Event</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores.</p>
                                <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.</p>
                                <ul>
                                    <li>Aute irure dolor in reprehenderit</li>
                                    <li>Occaecat cupidatat non proident sunt in culpa</li>
                                    <li>Pariatur enim ipsam.</li>
                                </ul>
                                <h3>Event Location</h3>
                                <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam. </p>
                                <ul class="event-meta">
                                    <li><i class="icon-40"></i>Newyork City, USA</li>
                                    <li><i class="icon-71"></i><a href="tel:012(345)6789">+012 (345) 6789</a></li>
                                </ul>
                                <div class="gmap_canvas">
                                    <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=melbourne,%20Australia&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="course-sidebar-3">
                                <div class="edu-course-widget widget-course-summery">
                                    <div class="inner">
                                        <div class="content">
                                            <h4 class="widget-title">Event Info</h4>
                                            <ul class="course-item">
                                                <li>
                                                    <span class="label"><i class="icon-60"></i>Cost:</span>
                                                    <span class="value price">$70.00</span>
                                                </li>
                                                <li>
                                                    <span class="label"><i class="icon-70"></i>Total Slot:</span>
                                                    <span class="value">30</span>
                                                </li>
                                                <li>
                                                    <span class="label"><i class="icon-68"></i>Booked Slot:</span>
                                                    <span class="value">2</span>
                                                </li>
                                            </ul>
                                            <div class="read-more-btn">
                                                <a href="#" class="edu-btn">Book Now <i class="icon-4"></i></a>
                                            </div>
                                            <div class="countdown">
                                                <div class="countdown-section">
                                                    <div>
                                                        <div id="days" class="countdown-number day"></div>
                                                        <div class="countdown-unit">Days</div>
                                                    </div>
                                                </div>
                                                <div class="countdown-section">
                                                    <div>
                                                        <div id="hours" class="countdown-number hour"></div>
                                                        <div class="countdown-unit">Hrss</div>
                                                    </div>
                                                </div>
                                                <div class="countdown-section">
                                                    <div>
                                                        <div id="minutes" class="countdown-number minute"></div>
                                                        <div class="countdown-unit">Mints</div>
                                                    </div>
                                                </div>
                                                <div class="countdown-section">
                                                    <div>
                                                        <div id="seconds" class="countdown-number second"></div>
                                                        <div class="countdown-unit">Sec</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="event-speaker">
                    <h3 class="heading-title">Event Speakers</h3>
                    <div class="row g-5">
                        <div 
                            class="col-lg-3 col-sm-6 col-12" 
                            data-aos-delay="50" 
                            data-aos="fade-up" 
                            data-aos-duration="800" 
                            v-for="(instructor, key) in instructorData.instructors.slice(0, 4)" :key="key"
                        >
                            <InstructorOne :instructor="instructor" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <FooterOne />
    </div>
</template>

<script>
    import instructorData from '~/data/instructor';
    export default {
        components: {
            HeaderOne: () => import("@/components/header/HeaderOne"),
            InstructorOne: () => import('@/components/instructor/InstructorOne'),
            FooterOne: () => import("@/components/footer/FooterOne"),
            MouseMove: () => import('@/components/animation/MouseMove')
        },
        data () {
            return {
                instructorData
            }
        },
        mounted () {
            const sec = 1000,
                min = sec * 60,
                hour = min * 60,
                day = hour * 24;

            const end = new Date( 'Dec 31, 2022 00:00:00' ).getTime();

            const int = setInterval( () => {
                const current = new Date().getTime();
                const remaining = end - current;

                const day2 = Math.floor(remaining / day);
                const hour2 = Math.floor( (remaining % day) / hour );
                const minute = Math.floor( (remaining % hour) / min );
                const second = Math.floor( (remaining % min) / sec );

                document.getElementById( 'days' ).innerText = day2 > 9 ? day2 : `0${day2}`;
                document.getElementById( 'hours' ).innerText = hour2 > 9 ? hour2 : `0${hour2}`;
                document.getElementById( 'minutes' ).innerText = minute > 9 ? minute : `0${minute}`;
                document.getElementById( 'seconds' ).innerText = second > 9 ? second : `0${second}`;
            }, 1000);
        },
        head() {
            return {
                title: 'Event Details'
            }
        }
    }
</script>