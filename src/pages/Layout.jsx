import { Link, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
	const { pathname } = useLocation();

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
