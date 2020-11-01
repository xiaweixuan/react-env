import Todos from './pages/todo';
import About from './pages/about';

const route = [
  {
    path: "/",
    exact: true,
    component: Todos,
  },
  {
    path: "/todo",
    component: Todos,
  },
  {
    path: "/about",
    component: About,
  },
]

export default route;