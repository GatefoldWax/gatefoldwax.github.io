const Home = () => {
	const homeDescription =
		"Add reviews and give us your hot take on the latest releases or on an old classic. \n \nFollow your friends and see what they think. \n \nCheck the latest feed for the newest reviews and see what's being said! \n \nWax builds the conversation around music, letting the listener have their say on what's worth spinning and what's worth binning.";

	return (
		<div className="contentContainer">
			<div className="waxLogoContainer">
				<img
					src="https://jxkaizmyfxwrhbvundhm.supabase.co/storage/v1/object/public/public_assets/Logo/Wax-logo-transparent.png"
					className="waxLogo"
				/>
			</div>
			<h1 className="heading">Welcome to WAX</h1>
			<p className="bodyText">{homeDescription}</p>
		</div>
	);
};

export default Home;
