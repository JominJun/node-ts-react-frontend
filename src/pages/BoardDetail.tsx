import React from "react";
import { RouteComponentProps } from "react-router-dom";

interface MatchParams {
	id: string;
}

function BoardDetail({ match }: RouteComponentProps<MatchParams>) {
	const { id } = match.params;

	fetch(`http://localhost:8080/api/board/${id}`)
		.then((response) => response.json())
		.then((response) => {
			(document.getElementById("title") as HTMLBodyElement).innerHTML = response.title;
			(document.getElementById("created") as HTMLBodyElement).innerHTML = response.created;
			(document.getElementById("content") as HTMLBodyElement).innerHTML = response.content;
		});

	return (
		<>
			<span id="title" style={{ fontSize: "48px", fontWeight: 700 }}>
				제목
			</span>
			<br />
			<br />
			<span id="created">작성일</span>
			<br />
			<br />
			<span id="content">내용</span>
		</>
	);
}

export default BoardDetail;
