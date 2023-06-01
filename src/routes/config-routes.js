import { useRoutes } from "react-router-dom";
// import { AddPost } from "../pages";

const routes = [
  {
    path: "/",
    element: <MainPage></MainPage>,
  },
  // {
  //   path: "posts/:id",
  //   children: [
  //     {
  //       path: "",
  //       element: <PostInfo></PostInfo>,
  //     },
  //   ],
  // },
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
