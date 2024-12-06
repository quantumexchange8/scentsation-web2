import DesktopNav from "../../common/navigation/desktop-nav/DesktopNav";
import MobileNavbar from "../../common/navigation/mobile-nav/MobileNavbar";
import { menuItemsData } from "../../common/navigation/mobile-nav/menuItemsData";
import HeaderButton from "./HeaderButton";
import HeaderLogo from "./HeaderLogo";

function Header() {
	const currentPath = window.location.pathname; // Get the current path

	return (
		<header className="site-header aximo-header-section aximo-header1 dark-bg" id="sticky-menu">
			<div className="container">
				<nav className="navbar site-navbar">
					<HeaderLogo />
					<div className="menu-block-wrapper">
						<ul className="desktop-nav">
							<li>
								<a href="/" className={currentPath === "/" ? "active" : ""}>
									Home
								</a>
							</li>
							<li>
								<a href="/about-us" className={currentPath === "/about-us" ? "active" : ""}>
									About Us
								</a>
							</li>
							<li>
								<a href="/how-to-use" className={currentPath === "/how-to-use" ? "active" : ""}>
									How To Use
								</a>
							</li>
							<li>
								<a href="/partnership" className={currentPath === "/partnership" ? "active" : ""}>
									Partnership
								</a>
							</li>
							<li>
								<a href="/contact-us" className={currentPath === "/contact-us" ? "active" : ""}>
									Contact Us
								</a>
							</li>
						</ul>
					</div>
					<MobileNavbar menuItemsData={menuItemsData} title={<HeaderLogo />} />
				</nav>
			</div>
		</header>
	);
}

export default Header;
