import Home from "./pages/Home";
import About from "./pages/About";

const route = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/home",
    exact: true,
    component: Home,
  },
  {
    path: "/about",
    exact: true,
    component: About,
  }
];
export default route;