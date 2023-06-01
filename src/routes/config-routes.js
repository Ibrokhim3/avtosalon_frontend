import { useRoutes } from "react-router-dom";
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
  // {
  //   path: "add-post",
  //   element: <AddPost></AddPost>,
  // },
  // {
  //   path: "login",
  //   element: <LoginPage></LoginPage>,
  // },
  // {
  //   path: "admin-panel",
  //   element: token ? <AdminPanel></AdminPanel> : <LoginPage></LoginPage>,
  // },
];

export const ConfigRoutes = () => {
  return useRoutes(routes);
};
