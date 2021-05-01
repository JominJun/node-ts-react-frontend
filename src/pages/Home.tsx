import React, { useEffect, useState } from "react";
import "../styles/pages/Home.css";

import Loading from "../components/Loading";

function Home() {
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 4000);
	});

	if (isLoading) {
		return <Loading />;
	} else {
		return (
			<div id="main">
				<div
					className="button"
					onClick={() => {
						window.location.href = "./board";
					}}
				>
					<span>Board</span>
				</div>
			</div>
		);
	}
}

export default Home;
