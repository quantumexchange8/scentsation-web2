/* eslint-disable for-direction */
import DesktopNav from "../../common/navigation/desktop-nav/DesktopNav";
import Dropdown from "../../common/navigation/desktop-nav/Dropdown";
import DropdownItem from "../../common/navigation/desktop-nav/DropdownItem";
import NavItem from "../../common/navigation/desktop-nav/NavItem";
import { menuItemsData } from "../../common/navigation/mobile-nav/menuItemsData";
import MobileNavbar from "../../common/navigation/mobile-nav/MobileNavbar";
import HeaderButton from "./HeaderButton";
import HeaderLogo from "./HeaderLogo";


function Header() {
	return (
		<header className="site-header aximo-header-section aximo-header1 dark-bg" id="sticky-menu">
			<div className="container">
				<nav className="navbar site-navbar">
					<HeaderLogo />
					<div className="menu-block-wrapper">
						<DesktopNav>
							<NavItem url="/">Home</NavItem>
							<NavItem url="about-us">About Us</NavItem>
							<NavItem url="how-to-use">How To Use</NavItem>
							<NavItem url="partnership">Partnership</NavItem>
							<NavItem url="contact-us">Contact Us</NavItem>
							{/* <NavItem dropdown title="Blog">
								<Dropdown>
									<DropdownItem url="blog">Our Blog</DropdownItem>
									<DropdownItem url="blog-grid">Blog Grid</DropdownItem>
									<DropdownItem url="single-blog">Blog Details</DropdownItem>
								</Dropdown>
							</NavItem> */}
						</DesktopNav>
					</div>
					<MobileNavbar menuItemsData={menuItemsData} title={<HeaderLogo />} />
				</nav>
			</div>
		</header>
	);
}

export default Header;
