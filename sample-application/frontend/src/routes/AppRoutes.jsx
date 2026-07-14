import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import Tasks from "../pages/Tasks";
import Calendar from "../pages/Calendar";
import Projects from "../pages/Projects";
import Analytics from "../pages/Analytics";
import Categories from "../pages/Categories";
import Settings from "../pages/Settings";
import VerifyAccount from "../pages/VerifyAccount";

function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/SignUp" element={<SignUp />} />
        <Route
                   path="/VerifyAccount"
                   element={<VerifyAccount />}
        />
        <Route
          path="/ForgotPassword"
          element={<ForgotPassword />}
        />

        <Route
          path="/Dashboard"
          element={<Dashboard />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />

       <Route path="/tasks" element={<Tasks />} />

       <Route path="/calendar" element={<Calendar />} />

       <Route path="/projects" element={<Projects />} />

       <Route path="/analytics" element={<Analytics />} />

       <Route path="/categories" element={<Categories />} />

       <Route path="/settings" element={<Settings />} />

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;