import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";
import DashboardPage from "@/pages/Dashboard";
import NotFoundPage from "@/pages/NotFound";
import ProfilePage from "@/pages/Profile";
import SettingsPage from "@/pages/Settings";
import UsersPage from "@/pages/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "users", element: <UsersPage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "settings", element: <SettingsPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default router;
