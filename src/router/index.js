import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CreatePost from "../components/CreatePost.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/create-post",
    name: "CreatePost",
    component: CreatePost,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
