<template>
    <div id="main-wrapper" class="main-wrapper">

        <HeaderOne />

        <BreadCrumbTwo pageTitle='My Account' title='Account' />

        <section class="account-page-area section-gap-equal">
            <div class="container position-relative">
                <div class="row g-5 justify-content-center">
                    <div class="col-lg-5">
                        <div class="login-form-box">
                            <h3 class="title">Sign in</h3>
                            <p>Don’t have an account? <a href="#">Sign up</a></p>
                            <form>
                                <div class="form-group">
                                    <label for="current-log-email">Username or email*</label>
                                    <input type="email" name="current-log-email" id="current-log-email" placeholder="Email or username">
                                </div>
                                <div class="form-group">
                                    <label for="current-log-password">Password*</label>
                                    <input type="password" name="current-log-password" id="current-log-password" placeholder="Password">
                                    <span class="password-show"><i class="icon-76"></i></span>
                                </div>
                                <div class="form-group chekbox-area">
                                    <div class="edu-form-check">
                                        <input type="checkbox" id="remember-me">
                                        <label for="remember-me">Remember Me</label>
                                    </div>
                                    <a href="#" class="password-reset">Lost your password?</a>
                                </div>
                                <div class="form-group">
                                    <button type="button" class="edu-btn btn-medium">Sign in <i class="icon-4"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="login-form-box registration-form">
                            <h3 class="title">Registration</h3>
                            <p>Already have an account? <a href="#">Sign in</a></p>
                            <form>
                                <div class="form-group">
                                    <label for="reg-name">Name*</label>
                                    <input type="text" name="reg-name" id="reg-name" placeholder="Full name">
                                </div>
                                <div class="form-group">
                                    <label for="log-email">Username or email*</label>
                                    <input type="email" name="log-email" id="log-email" placeholder="Email or username">
                                </div>
                                <div class="form-group">
                                    <label for="log-password">Password*</label>
                                    <input type="password" name="log-password" id="log-password" placeholder="Password">
                                    <span class="password-show"><i class="icon-76"></i></span>
                                </div>
                                <div class="form-group chekbox-area">
                                    <div class="edu-form-check">
                                        <input type="checkbox" id="terms-condition">
                                        <label for="terms-condition">I agree the User Agreement and <a href="terms-condition.html">Terms & Condition.</a> </label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <button type="button" class="edu-btn btn-medium">Create Account <i class="icon-4"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <ul class="shape-group">
                    <MouseMove addClassName="shape-1" dataDepth="2" imgSrc="/images/about/shape-07.png" />
                    <MouseMove addClassName="shape-2" dataDepth="-2" imgSrc="/images/about/shape-13.png" />
                    <MouseMove addClassName="shape-3" dataDepth="2" imgSrc="/images/counterup/shape-02.png" />
                </ul>
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
            FooterOne: () => import("@/components/footer/FooterOne"),
            MouseMove: () => import('@/components/animation/MouseMove')
        },
        head() {
            return {
                title: 'Terms & Condition'
            }
        }
    }
</script>