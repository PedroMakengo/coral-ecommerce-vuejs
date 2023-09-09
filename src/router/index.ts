// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/Home/index.vue"),
      },
      {
        path: "/product/:id",
        name: "Product",
        component: () => import("@/views/Product/index.vue"),
      },
      {
        path: "/search/:query",
        name: "Search",
        component: () => import("@/views/Product/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
