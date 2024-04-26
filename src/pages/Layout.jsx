import { Outlet, Link } from "react-router-dom";

const Layout = () => {
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
    </>
  );
};

export default Layout;
