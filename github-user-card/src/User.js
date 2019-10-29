import React from "react";
// import ReactDOM from "react-dom";
// import axios from "axios";
import styled from "styled-components";

function clg(...x) {
	for (let exes of x) console.log(exes);
}

const Boxx = styled.div`
	border: 1px solid silver;
	margin: 20px;
	padding: 20px;
	background-color: #eef;
`;
const Imgg = styled.img`
	width: 75px;
	height: 75px;
`;

export default function User(props) {
	clg(">>> in User comp");
	clg(props.followers);
	const followerbox = props.followers
		? props.followers.map(item => {
				clg(item.login);
				return <Boxx>{item.login}</Boxx>;
		  })
		: null;

	return (
		<Boxx>
			{/* <div>{props.user.followers}</div> */}
			<div className="card">
				<Imgg src={props.user.avatar_url} alt="" />
				<div className="card-info">
					<h3 className="name">{props.user.name}</h3>
					<p>Location: {!props.user.location && "(not given)"}</p>
					<p>Bio: {!props.user.bio && "(not given)"}</p>
				</div>
				{followerbox}
			</div>
		</Boxx>
	);
}
