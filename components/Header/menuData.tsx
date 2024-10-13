import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "News",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "More",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "About",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Contact ",
        path: "/contact",
        newTab: false,
      },
      // {
      //   id: 43,
      //   title: "Blog Grid Page",
      //   path: "/blog",
      //   newTab: false,
      // },
      // {
      //   id: 44,
      //   title: "Blog Sidebar Page",
      //   path: "/blog-sidebar",
      //   newTab: false,
      // },
      // {
      //   id: 45,
      //   title: "Blog Details Page",
      //   path: "/blog-details",
      //   newTab: false,
      // },
      {
        id: 46,
        title: "Login",
        path: "/sign-in",
        newTab: false,
      },
      // {
      //   id: 47,
      //   title: "Sign Up",
      //   path: "/sign-up",
      //   newTab: false,
      // },
    ],
  },
];
export default menuData;
