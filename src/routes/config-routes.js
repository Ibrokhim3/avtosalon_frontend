import { useRoutes } from "react-router-dom";
import { AdminPanel, LoginPage, SignupPage } from "../pages";
import { MainPage } from "../pages/main-page/main-page";
import { ModelsPage } from "../pages/models-page";

const routes = [
  {
    path: "/",
    element: <MainPage></MainPage>,
  },
  {
    path: "model/:id",
    children: [
      {
        path: "",
        element: <ModelsPage></ModelsPage>,
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "admin-panel",
    element: <AdminPanel></AdminPanel>,
  },
  {
    path: "admin-panel/:id",
    children: [
      {
        path: "",
        element: <AdminPanel></AdminPanel>,
      },
    ],
  },
];

export const ConfigRoutes = () => {
  return useRoutes(routes);
};
