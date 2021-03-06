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
  faStream,
  faSuitcase,
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
import Jobs from "../views/Jobs";
import Wall from "../views/Wall";
import Groups from "../views/Groups";
import GroupFeed from "../views/GroupFeed";
import UserProfileView from "../views/UserProfile";
import SavedJobs from "../views/SavedJobs";
import CheckPost from "../views/CheckPost";
import JobPage from "../views/JobPage";

export const nav_routes = [
  {
    path: "/feed",
    name: "Feed",
    component: Feed,
    icon: faRss,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    icon: faUser,
  },
  {
    path: "/UserProfileView",
    name: "UserProfile",
    component: UserProfileView,
    icon: faUser,
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
    path: "/my-commynity",
    name: "My Community",
    component: My_Community,
    icon: faUsers,
  },
  {
    path: "/mygroups",
    name: "My Groups",
    component: Groups,
    icon: faUsers,
  },
  {
    path: "/explore",
    name: "Explore",
    component: Explore,
    icon: faCompass,
  },
  {
    path: "/jobpage",
    name: "jobpage",
    component: JobPage,
    icon: faCompass,
  },
   {
    path: "/wall",
    name: "Wall",
    component: Wall,
    icon: faStream,
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
    icon: faSuitcase,
  },
  {
    path: "/group/:id",
    name: "group",
    component: GroupFeed,
  },
  {
    path: "/post/:id",
    component:CheckPost,
    icon: faCog,
  }, 
  {
    path: "/settings",
    name: "Settings",
    component:Settings,
    icon: faCog,
  }, {
    path: "/savedJobs",
    name: "savedJobs",
    component: SavedJobs,
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
