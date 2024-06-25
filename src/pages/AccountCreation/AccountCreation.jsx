const AccountCreation = () => {
	const accountCreationDescription = `You're all set up and ready to go! We're so glad you've joined our community!\n\n
We're passionate about building the conversation around music, and we want you to have a great experience.\n\n
Jump back into our app to login and get started.`;

	return (
		<div className="contentContainer">
			<div className="waxLogoContainer">
				<img
					src="https://jxkaizmyfxwrhbvundhm.supabase.co/storage/v1/object/public/public_assets/Logo/Wax-logo-transparent.png"
					className="waxLogo"
				/>
			</div>
			<h1 className="heading">Welcome to WAX</h1>
			<p className="bodyText">{accountCreationDescription}</p>
		</div>
	);
};

export default AccountCreation;
