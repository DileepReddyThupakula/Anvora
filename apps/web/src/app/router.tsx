import { createBrowserRouter } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";
import DashboardPage from "@/features/dashboard/pages/DashboardPage";
import StartupFlowPage from "@/features/startup/pages/StartupFlowPage";
import TradingPage from "@/features/trading/pages/TradingPage";
import BusinessPage from "@/features/business/pages/BusinessPage";
import ProjectsPage from "@/features/projects/pages/ProjectsPage";
import OperationsPage from "@/features/operations/pages/OperationsPage";
import KnowledgePage from "@/features/knowledge/pages/KnowledgePage";
import SettingsPage from "@/features/settings/pages/SettingsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <StartupFlowPage />,
  },
  {
    path: "/welcome",
    element: <StartupFlowPage />,
  },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "trading",
        element: <TradingPage />,
      },
      {
        path: "business",
        element: <BusinessPage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "operations",
        element: <OperationsPage />,
      },
      {
        path: "knowledge",
        element: <KnowledgePage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
]);
