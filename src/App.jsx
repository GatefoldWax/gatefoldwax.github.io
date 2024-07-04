import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Layout from "./pages/Layout";
import AccountSettings from "./pages/AccountSettings/AccountSettings";
import AccountCreation from "./pages/AccountCreation/AccountCreation";

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="account" element={<AccountSettings />} />

					<Route path="privacy" element={<Privacy />} />
					<Route
						path="account-created"
						element={<AccountCreation />}
					/>
					<Route path="*" element={<Home />} />
				</Route>
			</Routes>
		</HashRouter>
	);
}

export default App;
