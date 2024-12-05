import { createBrowserRouter } from "react-router-dom";
import LayoutOne from "../components/layout/LayoutOne.jsx";
import Layout from "../components/layout/index.jsx";
import ErrorPage from "../error-page";
import AboutUs from "../page/AboutUs";
import ContactUs from "../page/ContactUs";
import Partnership from "../page/Partnership";
import HowToUse from "../page/HowToUse";
import HomeOne from "../page/home/HomeOne.jsx";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <LayoutOne />,
				children: [
					{
						path: "/",
						element: <HomeOne />,
					},
					{
						path: "/about-us",
						element: <AboutUs />,
					},
					{
						path: "/contact-us",
						element: <ContactUs />,
					},
					{
						path: "/how-to-use",
						element: <HowToUse />,
					},
					{
						path: "/partnership",
						element: <Partnership />,
					},
					{
						path: "*",
						element: <ErrorPage />,
					},
				],
			}
		],
	},
]);
