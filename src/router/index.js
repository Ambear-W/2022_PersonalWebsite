import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import AboutMe from '../views/AboutMe.vue'
import Qualifications from '../views/Qualifications.vue'
import Projects from '../views/Projects.vue'
import Resume from '../views/Resume.vue'
import ContactMe from '../views/ContactMe.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about-me',
    name: 'AboutMe',
    component: AboutMe
  },
  {
    path: '/qualifications',
    name: 'Qualifications',
    component: Qualifications
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/contact-me',
    name: 'Contact Me',
    component: ContactMe
  }
];

const router  = createRouter({
  history: createWebHistory(),
  routes
});

export default router;