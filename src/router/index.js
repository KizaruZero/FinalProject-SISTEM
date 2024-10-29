import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import BlogPostView from "@/views/BlogPostView.vue";
import BlogView from "@/views/BlogView.vue";
import ContactView from "@/views/ContactView.vue";
import AboutView from "@/views/AboutView.vue";
import CategoryView from "@/views/CategoryView.vue";
import AuthorView from "@/views/AuthorView.vue";
import PricavyPolicyView from "@/views/PrivacyPolicyView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogView,
  },
  {
    path: "/blog/post",
    name: "post",
    component: BlogPostView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/category",
    name: "category",
    component: CategoryView,
  },
  {
    path: "/author",
    name: "author",
    component: AuthorView,
  },
  {
    path: "/privacy",
    name: "privacy",
    component: PricavyPolicyView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
