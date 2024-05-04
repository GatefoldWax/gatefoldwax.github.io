import { Outlet, Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

const Layout = () => {
	const { pathname } = useLocation();

	console.log("🔎 ~ ", pathname);

	return (
		<>
			<nav>
				<div className="navContainer">
					<Link className="navLink" to="/">
						Home
					</Link>

					<Link className="navLink" to="/privacy">
						Privacy
					</Link>
				</div>
			</nav>

			<Outlet />

			<footer className="footerContainer">
				<Link
					className={
						pathname === "/account"
							? "footerLinkActive"
							: "footerLink"
					}
					to="/account"
				>
					Account Settings
				</Link>
			</footer>
		</>
	);
};

export default Layout;
