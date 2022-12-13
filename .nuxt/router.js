import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _09cd17ee = () => interopDefault(import('../pages/about-us-one.vue' /* webpackChunkName: "pages/about-us-one" */))
const _1d17b881 = () => interopDefault(import('../pages/about-us-three.vue' /* webpackChunkName: "pages/about-us-three" */))
const _138124ef = () => interopDefault(import('../pages/about-us-two.vue' /* webpackChunkName: "pages/about-us-two" */))
const _84794eb6 = () => interopDefault(import('../pages/coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _5513de12 = () => interopDefault(import('../pages/contact-me.vue' /* webpackChunkName: "pages/contact-me" */))
const _383bc206 = () => interopDefault(import('../pages/contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _a9044d08 = () => interopDefault(import('../pages/distant-learning.vue' /* webpackChunkName: "pages/distant-learning" */))
const _521a8518 = () => interopDefault(import('../pages/faq.vue' /* webpackChunkName: "pages/faq" */))
const _137fd21a = () => interopDefault(import('../pages/gallery-grid.vue' /* webpackChunkName: "pages/gallery-grid" */))
const _24e02628 = () => interopDefault(import('../pages/gallery-masonry.vue' /* webpackChunkName: "pages/gallery-masonry" */))
const _65f5c458 = () => interopDefault(import('../pages/kindergarten.vue' /* webpackChunkName: "pages/kindergarten" */))
const _5ba5dae2 = () => interopDefault(import('../pages/kitchen-coach.vue' /* webpackChunkName: "pages/kitchen-coach" */))
const _6be07deb = () => interopDefault(import('../pages/landing-demo.vue' /* webpackChunkName: "pages/landing-demo" */))
const _86c053c4 = () => interopDefault(import('../pages/my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _4f6a0c84 = () => interopDefault(import('../pages/online-academy.vue' /* webpackChunkName: "pages/online-academy" */))
const _07051565 = () => interopDefault(import('../pages/pricing-table.vue' /* webpackChunkName: "pages/pricing-table" */))
const _7c1c5fa9 = () => interopDefault(import('../pages/privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _7b031742 = () => interopDefault(import('../pages/purchase-guide.vue' /* webpackChunkName: "pages/purchase-guide" */))
const _7298fdea = () => interopDefault(import('../pages/shop/index.vue' /* webpackChunkName: "pages/shop/index" */))
const _d73fc39a = () => interopDefault(import('../pages/terms-condition.vue' /* webpackChunkName: "pages/terms-condition" */))
const _582520a0 = () => interopDefault(import('../pages/university.vue' /* webpackChunkName: "pages/university" */))
const _25667f78 = () => interopDefault(import('../pages/yoga-instructor.vue' /* webpackChunkName: "pages/yoga-instructor" */))
const _f408757c = () => interopDefault(import('../pages/blog/blog-details.vue' /* webpackChunkName: "pages/blog/blog-details" */))
const _1ba08bce = () => interopDefault(import('../pages/blog/blog-list.vue' /* webpackChunkName: "pages/blog/blog-list" */))
const _1dfd17c5 = () => interopDefault(import('../pages/blog/blog-masonry.vue' /* webpackChunkName: "pages/blog/blog-masonry" */))
const _ffa97326 = () => interopDefault(import('../pages/blog/blog-standard.vue' /* webpackChunkName: "pages/blog/blog-standard" */))
const _629118e2 = () => interopDefault(import('../pages/course/course-details.vue' /* webpackChunkName: "pages/course/course-details" */))
const _05c94cf2 = () => interopDefault(import('../pages/course/course-details-2.vue' /* webpackChunkName: "pages/course/course-details-2" */))
const _05ad1df0 = () => interopDefault(import('../pages/course/course-details-3.vue' /* webpackChunkName: "pages/course/course-details-3" */))
const _57ce0f7c = () => interopDefault(import('../pages/course/course-five.vue' /* webpackChunkName: "pages/course/course-five" */))
const _1080b4b6 = () => interopDefault(import('../pages/course/course-four.vue' /* webpackChunkName: "pages/course/course-four" */))
const _34c2e706 = () => interopDefault(import('../pages/course/course-one.vue' /* webpackChunkName: "pages/course/course-one" */))
const _db9f3f84 = () => interopDefault(import('../pages/course/course-three.vue' /* webpackChunkName: "pages/course/course-three" */))
const _4d2a97ec = () => interopDefault(import('../pages/course/course-two.vue' /* webpackChunkName: "pages/course/course-two" */))
const _67b5d890 = () => interopDefault(import('../pages/event/event-details.vue' /* webpackChunkName: "pages/event/event-details" */))
const _131df080 = () => interopDefault(import('../pages/event/event-grid.vue' /* webpackChunkName: "pages/event/event-grid" */))
const _33b0c118 = () => interopDefault(import('../pages/event/event-list.vue' /* webpackChunkName: "pages/event/event-list" */))
const _0da121c6 = () => interopDefault(import('../pages/instructor/instructor-one.vue' /* webpackChunkName: "pages/instructor/instructor-one" */))
const _5c117f89 = () => interopDefault(import('../pages/instructor/instructor-profile.vue' /* webpackChunkName: "pages/instructor/instructor-profile" */))
const _a72a2a04 = () => interopDefault(import('../pages/instructor/instructor-three.vue' /* webpackChunkName: "pages/instructor/instructor-three" */))
const _2608d2ac = () => interopDefault(import('../pages/instructor/instructor-two.vue' /* webpackChunkName: "pages/instructor/instructor-two" */))
const _10753212 = () => interopDefault(import('../pages/shop/cart.vue' /* webpackChunkName: "pages/shop/cart" */))
const _597bfe9d = () => interopDefault(import('../pages/shop/checkout.vue' /* webpackChunkName: "pages/shop/checkout" */))
const _b5222546 = () => interopDefault(import('../pages/shop/product-details.vue' /* webpackChunkName: "pages/shop/product-details" */))
const _1ea3e0c8 = () => interopDefault(import('../pages/shop/wishlist.vue' /* webpackChunkName: "pages/shop/wishlist" */))
const _d2c8f8a0 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-us-one",
    component: _09cd17ee,
    name: "about-us-one"
  }, {
    path: "/about-us-three",
    component: _1d17b881,
    name: "about-us-three"
  }, {
    path: "/about-us-two",
    component: _138124ef,
    name: "about-us-two"
  }, {
    path: "/coming-soon",
    component: _84794eb6,
    name: "coming-soon"
  }, {
    path: "/contact-me",
    component: _5513de12,
    name: "contact-me"
  }, {
    path: "/contact-us",
    component: _383bc206,
    name: "contact-us"
  }, {
    path: "/distant-learning",
    component: _a9044d08,
    name: "distant-learning"
  }, {
    path: "/faq",
    component: _521a8518,
    name: "faq"
  }, {
    path: "/gallery-grid",
    component: _137fd21a,
    name: "gallery-grid"
  }, {
    path: "/gallery-masonry",
    component: _24e02628,
    name: "gallery-masonry"
  }, {
    path: "/kindergarten",
    component: _65f5c458,
    name: "kindergarten"
  }, {
    path: "/kitchen-coach",
    component: _5ba5dae2,
    name: "kitchen-coach"
  }, {
    path: "/landing-demo",
    component: _6be07deb,
    name: "landing-demo"
  }, {
    path: "/my-account",
    component: _86c053c4,
    name: "my-account"
  }, {
    path: "/online-academy",
    component: _4f6a0c84,
    name: "online-academy"
  }, {
    path: "/pricing-table",
    component: _07051565,
    name: "pricing-table"
  }, {
    path: "/privacy-policy",
    component: _7c1c5fa9,
    name: "privacy-policy"
  }, {
    path: "/purchase-guide",
    component: _7b031742,
    name: "purchase-guide"
  }, {
    path: "/shop",
    component: _7298fdea,
    name: "shop"
  }, {
    path: "/terms-condition",
    component: _d73fc39a,
    name: "terms-condition"
  }, {
    path: "/university",
    component: _582520a0,
    name: "university"
  }, {
    path: "/yoga-instructor",
    component: _25667f78,
    name: "yoga-instructor"
  }, {
    path: "/blog/blog-details",
    component: _f408757c,
    name: "blog-blog-details"
  }, {
    path: "/blog/blog-list",
    component: _1ba08bce,
    name: "blog-blog-list"
  }, {
    path: "/blog/blog-masonry",
    component: _1dfd17c5,
    name: "blog-blog-masonry"
  }, {
    path: "/blog/blog-standard",
    component: _ffa97326,
    name: "blog-blog-standard"
  }, {
    path: "/course/course-details",
    component: _629118e2,
    name: "course-course-details"
  }, {
    path: "/course/course-details-2",
    component: _05c94cf2,
    name: "course-course-details-2"
  }, {
    path: "/course/course-details-3",
    component: _05ad1df0,
    name: "course-course-details-3"
  }, {
    path: "/course/course-five",
    component: _57ce0f7c,
    name: "course-course-five"
  }, {
    path: "/course/course-four",
    component: _1080b4b6,
    name: "course-course-four"
  }, {
    path: "/course/course-one",
    component: _34c2e706,
    name: "course-course-one"
  }, {
    path: "/course/course-three",
    component: _db9f3f84,
    name: "course-course-three"
  }, {
    path: "/course/course-two",
    component: _4d2a97ec,
    name: "course-course-two"
  }, {
    path: "/event/event-details",
    component: _67b5d890,
    name: "event-event-details"
  }, {
    path: "/event/event-grid",
    component: _131df080,
    name: "event-event-grid"
  }, {
    path: "/event/event-list",
    component: _33b0c118,
    name: "event-event-list"
  }, {
    path: "/instructor/instructor-one",
    component: _0da121c6,
    name: "instructor-instructor-one"
  }, {
    path: "/instructor/instructor-profile",
    component: _5c117f89,
    name: "instructor-instructor-profile"
  }, {
    path: "/instructor/instructor-three",
    component: _a72a2a04,
    name: "instructor-instructor-three"
  }, {
    path: "/instructor/instructor-two",
    component: _2608d2ac,
    name: "instructor-instructor-two"
  }, {
    path: "/shop/cart",
    component: _10753212,
    name: "shop-cart"
  }, {
    path: "/shop/checkout",
    component: _597bfe9d,
    name: "shop-checkout"
  }, {
    path: "/shop/product-details",
    component: _b5222546,
    name: "shop-product-details"
  }, {
    path: "/shop/wishlist",
    component: _1ea3e0c8,
    name: "shop-wishlist"
  }, {
    path: "/",
    component: _d2c8f8a0,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
