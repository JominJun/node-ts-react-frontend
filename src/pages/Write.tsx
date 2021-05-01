import React, { useState } from "react";

function Write() {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const handleTitleInp = (e: any) => {
		const { value } = e.target;
		setTitle(value);
	};

	const handleContentInp = (e: any) => {
		const { value } = e.target;
		setContent(value);
	};

	return (
		<div id="main">
			<span style={{ fontSize: "36px", fontWeight: 800, marginBottom: "48px" }}>Write</span>
			<input id="title" name="title" style={{ width: "600px" }} placeholder="title" onChange={handleTitleInp} />
			<textarea
				id="content"
				name="content"
				style={{ width: "600px", height: "400px", outline: "none", resize: "none" }}
				placeholder="content"
				onChange={handleContentInp}
			></textarea>

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
						window.location.href = "./board";
					}}
				>
					이전으로
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
						fetch("http://localhost:8080/api/board", {
							method: "POST",
							body: JSON.stringify({
								title: title,
								content: content,
							}),
							headers: {
								"Content-Type": "application/json",
							},
						}).then(() => {
							window.location.href = "./board";
						});
					}}
				>
					완료하기
				</div>
			</div>
		</div>
	);
}

export default Write;
