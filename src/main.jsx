import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Navigate,
  Router,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import OtpFormPage from "./pages/otp-form/OtpFormPage.jsx";
import Batches from "./pages/batches/Batches.jsx";
import CourseList from "./pages/course-list/CourseList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to="/otp-form" replace={true} />,
      },
      {
        path: "/otp-form",
        element: <OtpFormPage />,
      },
      {
        path: "/batches",
        element: <Batches />,
      },
      {
        path: "course-list",
        element: <CourseList />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
