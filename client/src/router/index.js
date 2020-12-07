import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/rates",
    name: "Rates",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Rates.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/new",
    name: "New",
    component: () => import(/* webpackChunkName: "about" */ "../views/New.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/edit",
    name: "Edit",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Edit.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem("jwt") == null) {
      next({
        path: "/",
      });
      swal("Unauthorized", "Please login to access this tab", "warning");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
