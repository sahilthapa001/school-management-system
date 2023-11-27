import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/400.css"; // Specify weight
import "@fontsource/roboto/400-italic.css"; // Specify weight and style
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login/Index";
import PrivateLayout from "./Layout/PrivateLayout/Index";
import Dashboard from "./Pages/Dashboard/Index";
import Student from "./Pages/Student/Index";
import PublicLayout from "./Layout/PublicLayout/Index";

const IndexRoute = () => {
	const router = createBrowserRouter([
		{
			path: "/admin",
			element: (
				<PrivateLayout>
					<Outlet />
				</PrivateLayout>
			),
			children: [
				{
					path: "/admin/dashboard",
					element: <Dashboard />,
				},
				{
					path: "/admin/student",
					element: <Student />,
				},
			],
		},
		{
			path: "/",
			element: (
				<PublicLayout>
					<Outlet />
				</PublicLayout>
			),
			children: [
				{
					path: "/login",
					element: <Login />,
				},
			],
		},
	]);
	return <RouterProvider router={router} />;
};
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<IndexRoute />
	</React.StrictMode>
);
