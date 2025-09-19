import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Resgister.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import MyDashboard from "../views/MyDashboard.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/register", name: "Register", component: Register },
  {path: "/login", name: "Login", component: Login},
  {path: "/dashboard", name: "Dashboard", component: Dashboard},
  {path: "/my-dashboard", name: "MyDashboard", component: MyDashboard}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
