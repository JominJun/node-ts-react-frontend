import React, { useState } from "react";

import ListItem from "../components/ListItem";

import "../styles/pages/Board.css";

function Board() {
	const [data, setData] = useState([]);

	const url = "http://localhost:8080/api/boards";

	fetch(url)
		.then((response) => response.json())
		.then((response) => setData(response));

	const rows = data.map((item: any, idx) => (
		<ListItem id={item.id} commentCounts="27" title={item.title} created={item.created} view="37" like="27" />
	));

	return (
		<div id="main" style={{ width: "100%", height: "fit-content", padding: "50px 0px" }}>
			<span style={{ fontSize: "36px", fontWeight: 800, marginBottom: "48px" }}>Board</span>

			<div id="list">{rows}</div>

			<div style={{ marginTop: "48px", display: "flex", flexDirection: "row" }}>
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
						marginLeft: "12px",
					}}
					onClick={() => {
						window.location.href = "./write";
					}}
				>
					글쓰기
				</div>
			</div>
		</div>
	);
}

export default Board;
