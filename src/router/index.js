import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HomePage from "../views/HomePage.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
    children: [
      {
        path: "/",
        components: {
          Home: HomePage,
        },
      },
      {
        path: "prodall",
        components: {
          All: () =>
            import(/* webpackChunkName: "all" */ "../views/CategoriesView.vue"),
        },
      },
      {
        path: "laptops",
        components: {
          Laptops: () =>
            import(
              /* webpackChunkName: "Laptops" */ "../views/LaptopsView.vue"
            ),
        },
      },
      {
        path: "smartphones",
        components: {
          Smartphones: () =>
            import(
              /* webpackChunkName: "Laptops" */ "../views/SmartphonesView.vue"
            ),
        },
      },
      {
        path: "tablets",
        components: {
          Tablets: () =>
            import(/* webpackChunkName: "tablet" */ "../views/TabletsView.vue"),
        },
      },
      {
        path: "accessories",
        components: {
          Accessories: () =>
            import(
              /* webpackChunkName: "accessory" */ "../views/AccessoriesView.vue"
            ),
        },
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
