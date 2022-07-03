import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Programs from "../views/Programs.vue";
import Partner from "../views/Partner.vue";
import Contact from "../views/Contact.vue";
import Join from "../views/Join.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about-us",
    name: "About",
    component:About,
  },
  {
    path: "/programs",
    name: "Programs",
    component:Programs,
  },
  {
    path: "/partner-with-us",
    name: "Partner",
    component:Partner,
  },
  {
    path: "/join-our-cohort",
    name: "Join",
    component:Join,
  },
  {
    path: "/contact-us",
    name: "Contact",
    component:Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
