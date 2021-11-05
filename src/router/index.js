import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import GetOne from "../views/GetOne.vue";
import GetTen from "../views/GetTen.vue";
import SearchAnime from "../views/SearchByAnime.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "random_quote",
        name: "GetOne",
        component: GetOne,
      },
      {
        path: "more_quotes",
        name: "GetTen",
        component: GetTen,
      },
      {
        path: "search_anime",
        name: "SearchAnime",
        component: SearchAnime,
      }
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
