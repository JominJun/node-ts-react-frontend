import React from "react";

import "../styles/components/ListItem.css";

function ListItem(props: any) {
	const id = props.id;
	const commentCounts = props.commentCounts;
	const title = props.title;
	const created = props.created;
	const view = props.view;
	const like = props.like;

	return (
		<div className="listItem" onClick={() => (window.location.href = `./board/${id}`)}>
			<div className="likeBox">
				<i className="fas fa-heart"></i>
				<span>{like}</span>
			</div>
			<div className="mainBox">
				<div className="mainTopBox">
					<span className="title">{title}</span>
					<span className="commentCounts">[{commentCounts}]</span>
				</div>
				<div className="mainBottomBox">
					<span className="id">No.{id}</span>
					<div className="divider"></div>
					<span className="view">
						<i className="fas fa-eye"></i>
						{view}
					</span>
					<div className="divider"></div>
					<span className="created">{created}</span>
				</div>
			</div>
		</div>
	);
}

export default ListItem;
