import React from "react";
// import ReactDOM from "react-dom";
// import axios from "axios";
// import styled from "styled-components";

function clg(...x) {
	for (let exes of x) console.log(exes);
}

export default function User(props) {
	clg(props.user);
	return (
		<>
			<div>{props.user.followers}</div>
			<div className="card">
				<img src={props.user.avatar_url} alt="" />
				<div className="card-info">
					<h3 class="name">{props.user.name}</h3>
					<p>Location: {!props.user.location && "(not given)"}</p>
					<p>Bio: {!props.user.bio && "(not given)"}</p>
				</div>
			</div>
		</>
	);
}
