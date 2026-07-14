import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Amplify } from "aws-amplify";
import { awsConfig } from "./config/awsConfig";

Amplify.configure(awsConfig);

import "./index.css";
import App from "./App.jsx";

import { TaskProvider } from "./context/TaskContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>

    <TaskProvider>

      <App />

    </TaskProvider>

  </StrictMode>
);