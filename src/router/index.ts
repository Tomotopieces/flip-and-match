import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/title",
    name: "title",
    component: () => import("../views/TitleView.vue"),
  },
  {
    path: "/table",
    name: "table",
    component: () => import("../views/TableView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
