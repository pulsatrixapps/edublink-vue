<template>
    <section class="coming-soon-page-area bg-image--22">
        <div class="container">
            <div class="coming-soon-content">
                <h1 class="title">Coming Soon</h1>
                <div class="coming-countdown">
                    <div class="countdown-section">
                        <div>
                            <div id="days" class="countdown-number day"></div>
                            <div class="countdown-unit">Days</div>
                        </div>
                    </div>
                    <div class="countdown-section">
                        <div>
                            <div id="hours" class="countdown-number hour"></div>
                            <div class="countdown-unit">Hours</div>
                        </div>
                    </div>
                    <div class="countdown-section">
                        <div>
                            <div id="minutes" class="countdown-number minute"></div>
                            <div class="countdown-unit">Minutes</div>
                        </div>
                    </div>
                    <div class="countdown-section">
                        <div>
                            <div id="seconds" class="countdown-number second"></div>
                            <div class="countdown-unit">Seconds</div>
                        </div>
                    </div>
                </div>

                <div class="input-group">
                    <input type="email" class="form-control" placeholder="Enter your email address">
                    <button class="edu-btn btn-medium" type="button">Subscribe <i class="icon-4"></i></button>
                </div>
            </div>
        </div>
        <ul class="shape-group">
            <MouseMove addClassName="shape-1" dataDepth="2" imgSrc="/images/others/shape-22.png" />
            <MouseMove addClassName="shape-2" dataDepth="-2" imgSrc="/images/others/shape-23.png" />
            <li class="shape-3">
                <img class="rotateit" src="/images/others/shape-24.png" alt="Shape">
            </li>
            <li class="shape-4"></li>
        </ul>
    </section>
</template>

<script>
    export default {
        components: {
            MouseMove: () => import('@/components/animation/MouseMove')
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
        }
    }
</script>

<style>
    .coming-soon-page-area {
        overflow-y: inherit;
    }
</style>