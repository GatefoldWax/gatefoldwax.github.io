import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

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

		//! for development only, remove upon completion of implementation of logout and account deletion
		// if (session) {
		// 	supabase.auth.signOut();
		// }

		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
		});

		return () => subscription.unsubscribe();
	}, []);

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
		return <div>Logged in!</div>;
	}
}
