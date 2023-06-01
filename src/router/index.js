import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/pages/HomeView.vue'
import AboutView from '../views/pages/AboutView.vue'
import CoursesView from '../views/pages/CoursesView.vue'
import PagesView from '../views/pages/PagesView.vue'
import ContactView from '../views/pages/ContactView.vue'
import SignIn from "../views/pages/SignIn.vue";
import Signup from "../views/pages/SignUp.vue";

const routes = [
  {
    path: '/',
    component: HomeView,
    name: 'home',
  },
  {
    path: '/about',
    component: AboutView,
    name: 'about',
  },
  {
    path: '/courses',
    component: CoursesView,
    name: 'courses',
  },
  {
    path: '/pages',
    component: PagesView,
    name: 'pages',
  },
  {
    path: '/contact',
    component: ContactView,
    name: 'contact',
  },
  {
    path: '/signin',
    component: SignIn,
    name: 'signin',
  },
  {
    path: '/signup',
    component: Signup,
    name: 'signup',
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router
