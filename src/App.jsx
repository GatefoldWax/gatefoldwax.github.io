import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Layout from "./pages/Layout";
import AccountSettings from "./pages/AccountSettings/AccountSettings";
import AccountCreation from "./pages/AccountCreation/AccountCreation";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="account" element={<AccountSettings />} />

					<Route path="privacy" element={<Privacy />} />
					<Route path="account-created" element={<AccountCreation />} />
					<Route path="*" element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
