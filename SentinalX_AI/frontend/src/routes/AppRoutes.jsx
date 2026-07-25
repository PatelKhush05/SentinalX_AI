import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "../components/layout/DashboardLayout";

import Overview from "../pages/Overview/Overview";
import Applications from "../pages/Applications/Applications";
import Monitoring from "../pages/Monitoring/Monitoring";
import CICD from "../pages/CICD/CICD";
import Incidents from "../pages/Incidents/Incidents";
import AICenter from "../pages/AICenter/AICenter";
import Security from "../pages/Security/Security";
import Settings from "../pages/Settings/Settings";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<DashboardLayout />}>
           <Route index element={<Overview />} />
           <Route path="applications" element={<Applications />} />
           <Route path="cicd" element={<CICD />} />
           <Route path="monitoring" element={<Monitoring />} />
           <Route path="incidents" element={<Incidents />} />
           <Route path="ai" element={<AICenter />} />
           <Route path="security" element={<Security />} />
           <Route path="settings" element={<Settings />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;