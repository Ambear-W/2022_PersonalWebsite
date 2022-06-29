import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import AboutMe from "../views/AboutMe";
import Qualifications from "../views/Qualifications";
import Projects from "../views/Projects";
import Resume from "../views/Resume";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/",
        name: "About Me",
        component: AboutMe,
    },
    {
        path: "/",
        name: "Qualifications",
        component: Qualifications,
    },
    {
        path: "/",
        name: "Projects",
        component: Projects,
    },
    {
        path: "/",
        name: "Resume",
        component: Resume,
    }
];

const router  = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;