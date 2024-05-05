import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import "./AccountSettings.css";

const supabase = createClient(
	"https://jxkaizmyfxwrhbvundhm.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4a2Fpem15Znh3cmhidnVuZGhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY3MDQ0MzEsImV4cCI6MjAyMjI4MDQzMX0.n8iJSGaRoGtEC4d_8u-rzMREEdk8pjXyriB4hkogR3k"
);

export default function AccountSettings() {
	const [session, setSession] = useState(null);

	useEffect(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			setSession(session);
		});

		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
		});

		return () => subscription.unsubscribe();
	}, [session]);

	const handleDeleteAccount = async () => {
		const confirmation = await window.confirm(
			"Are you sure you want to delete your account?"
		);

		console.log(
			"🔎 ~ file: AccountSettings.jsx:32 ~ handleDeleteAccount ~ confirmation:",
			confirmation
		);

		if (confirmation) {
			const { error } = await supabase.rpc("delete_account");
			!error && supabase.auth.signOut();
		} else window.alert("Account deletion cancelled");
	};

	if (!session) {
		return (
			<div className="contentContainer">
				<h1 className="heading">Your account</h1>
				<Auth
					supabaseClient={supabase}
					appearance={{ theme: ThemeSupa }}
					providers={[]}
				/>
			</div>
		);
	} else {
		return (
			<div className="contentContainer">
				<h1 className="heading">Manage your account!</h1>

				<h2 className="subheading">Delete your account</h2>
				<p className="bodyText">
					We're sad to see you go, we'd always be glad to have you
					back if you change your mind.
				</p>
				<button className="button" onClick={handleDeleteAccount}>
					Delete Account
				</button>
			</div>
		);
	}
}
