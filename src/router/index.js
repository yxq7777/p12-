import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/HomeView.vue"
import { getToken } from "../utils/js-cookie.js"
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    redirect: "/homepage" // 重定向:重新指向其它path,会改变网址
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/login.vue")
  },
  {
    path: "/layout",
    name: "layout",
    component: () => import("../layout/index.vue"),
    children: [
      {
        path: "/homepage",
        name: "homepage",
        component: () => import("../views/Homepage/index.vue")
      },
      {
        path: "/architecture",
        name: "architecture",
        component: () => import("../views/architecture/index.vue")
      },
      {
        path: "/Companysetup",
        name: "Companysetup",
        component: () => import("../views/Companysetup/index.vue")
      },
      {
        path: "/Permissionsetting",
        name: "Permissionsetting",
        component: () => import("../views/Permissionsetting/index.vue")
      },
      {
        path: "/Socialsecurity",
        name: "Socialsecurity",
        component: () => import("../views/Socialsecurity/index.vue")
      },
      {
        path: "/clockingin",
        name: "clockingin",
        component: () => import("../views/clockingin/index.vue")
      },
      {
        path: "/wage",
        name: "wage",
        component: () => import("../views/wage/index.vue")
      },
      {
        path: "/clockingin",
        name: "clockingin",
        component: () => import("../views/clockingin/index.vue")
      }
    ]
  },
  {
    path: "/menu",
    name: "menu",
    component: () => import("../layout/component/LayoutMenu.vue")
  },
  {
    path: "/HeadnaviGation",
    name: "HeadnaviGation",
    component: () => import("../layout/component/LayoutGation.vue")
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (getToken() || to.path == "/login") {
    next()
  } else {
    next("/login")
  }
})
export default router
