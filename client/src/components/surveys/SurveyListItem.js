import React from "react";

const SurveyListItem = ({
	_id,
	state,
	title,
	body,
	dateSent,
	yes,
	no,
	showModal,
	filter,
}) => {
	const renderSendButton = () => {
		if (state === "draft") {
			return <button className="btn red">Send</button>;
		}
	};

	const cardBgColor = (surveyState) => {
		return surveyState === "draft" ? "purple" : "blue-grey";
	};
	return (
		<div className={`card ${cardBgColor(state)} darken-1`}>
			<div className="card-content white-text">
				<span>{state}</span>
				<span className="card-title">{title}</span>
				<p>{body}</p>
				<p>Sent on: {new Date(dateSent).toLocaleDateString("ko-KR")}</p>
			</div>
			<div className="card-action">
				<a>Yes: {yes}</a>
				<a>No: {no}</a>
				{renderSendButton()}
				<button className="btn right" onClick={() => showModal(_id)}>
					Delete
				</button>
			</div>
		</div>
	);
};

export default SurveyListItem;
