/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";

function NavItem({ dropdown, title, children, url = "" }) {
	const location = useLocation(); // Use useLocation to get the current path
	const urlFormated = url !== "/" ? `/${url}` : "/";

	// Check if the current path matches the link's URL
	const isActive = location.pathname === urlFormated;

	return dropdown ? (
		<li className="nav-item nav-item-has-children">
			<a href="#" className="nav-link-item drop-trigger">
				{title} <i className="fas fa-angle-down"></i>
			</a>
			{children}
		</li>
	) : (
		<li className="nav-item">
			<Link to={urlFormated} className={`nav-link-item ${isActive ? "active-link" : ""}`}>
				{children}
			</Link>
		</li>
	);
}

export default NavItem;
