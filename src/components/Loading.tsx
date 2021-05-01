import React from "react";
import logo from "../assets/images/logo.png";
import "../styles/components/Loading.css";

function Loading() {
	return (
		<div id="loading">
			<div id="main">
				<img id="logo" alt="logo" src={logo} />
			</div>
			<div id="text">Loading...</div>
		</div>
	);
}

export default Loading;
