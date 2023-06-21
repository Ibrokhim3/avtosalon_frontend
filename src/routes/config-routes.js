import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import { AdminPanel, LoginPage, ModelInfoPage, SignupPage } from "../pages";
import { MainPage } from "../pages/main-page/main-page";
import { ModelsPage } from "../pages/models-page";
import { UserPage } from "../pages/user-page";

const token = localStorage.getItem("token");
const userRole = JSON.parse(localStorage.getItem("userRole"));

const routes = [
  {
    path: "/",
    element: <MainPage></MainPage>,
  },
  {
    path: "models/:id",
    children: [
      {
        path: "",
        element: <ModelsPage></ModelsPage>,
      },
    ],
  },
  {
    path: "model-info/:id",
    children: [
      {
        path: "",
        element: <ModelInfoPage></ModelInfoPage>,
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
  // {
  //   path: "admin-panel/:id",
  //   children: [
  //     {
  //       path: "",
  //       element: <AdminPanel></AdminPanel>,
  //     },
  //   ],
  // },
  {
    path: "user-page",
    element: <UserPage></UserPage>,
  },
];

export const ConfigRoutes = () => {
  return useRoutes(routes);
};
