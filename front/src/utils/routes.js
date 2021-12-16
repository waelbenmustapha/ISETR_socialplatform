import My_Community from "../views/My_Community";
import Feed from "../views/Feed";
import Messages from "../views/Messages";
import Settings from "../views/Settings";
import Profile from "../views/Profile";
import Explore from "../views/Explore";
import Notifications from "../views/Notifications";

import {
  faCog,
  faRss,
  faSignOutAlt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import {
  faBell,
  faComments,
  faCompass,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import Main from "../views/Main";
import Signin from "../views/auth/Signin";

export const nav_routes = [
  {
    path: "/feed",
    name: "Feed",
    component: Feed,
    icon: faRss,
  },
  {
    path: "/my-commynity",
    name: "My Community",
    component: My_Community,
    icon: faUsers,
  },
  {
    path: "/messages",
    name: "Messages",
    component: Messages,
    icon: faComments,
  },
  {
    path: "/notifications",
    name: "Notifications",
    component: Notifications,
    icon: faBell,
  },
  {
    path: "/explore",
    name: "Explore",
    component: Explore,
    icon: faCompass,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    icon: faUser,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
    icon: faCog,
  },
  //   {
  //     path: "/logout",
  //     name: "logout",
  //     // component: Notifications,
  //     icon: faSignOutAlt,
  //   },
];

export const routes = [
  // {
  //   path: "/:page",
  //   name: "Main",
  //   component: <Main />,
  // },
  {
    path: "/signup",
    name: "Signup",
    component: Signin,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
];
