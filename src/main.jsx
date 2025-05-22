import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import UsersList from "./components/UsersList";
import UserForm from "./components/UserForm";
import { USERS_LIST } from "./lib/constants";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <UsersList users={USERS_LIST} /> },
      { path: "*", element: <UsersList users={USERS_LIST} /> },
      {
        path: "users",
        element: <UsersList users={USERS_LIST} />
      },
      {
        path: "user-form",
        element: <UserForm />
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
