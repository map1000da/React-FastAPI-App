import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { Setting } from "../components/pages/Settiing";
import { UserManagement } from "../components/pages/UserManagement";

export const HomeRoutes = [
  {
    path: "", //絶対パスは含めない
    exact: true,
    children: <Home />,
  },
  {
    path: "user_management",
    exact: false,
    children: <UserManagement />,
  },
  {
    path: "setting",
    exact: true,
    children: <Setting />,
  },
  {
    path: "*",
    children: <Page404 />,
  },
];
