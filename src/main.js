import { createApp } from 'vue'
import App from './App.vue'
import AboutMe from './views/AboutMe.vue'
import ContactMe from './views/ContactMe.vue'
import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import Qualifications from './views/Qualifications.vue'
import Resume from './views/Resume.vue'

createApp(App).mount('#app')
createApp(AboutMe).mount('#aboutMe')
createApp(ContactMe).mount('#contactMe')
createApp(Home).mount('#home')
createApp(Projects).mount('#projects')
createApp(Qualifications).mount('#qualificaitons')
createApp(Resume).mount('#resume')
