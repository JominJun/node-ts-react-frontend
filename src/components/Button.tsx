import React from "react";

function Button() {
	return (
		<div
			style={{
				backgroundColor: "#33cc99",
				color: "#fff",
				width: "120px",
				height: "48px",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				fontSize: "18px",
				borderRadius: "12px",
				cursor: "pointer",
				fontWeight: 600,
			}}
			onClick={() => {
				window.location.href = "./";
			}}
		>
			홈으로
		</div>
	);
}

export default Button;
