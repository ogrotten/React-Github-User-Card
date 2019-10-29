import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import axios from "axios";
import User from "./User";

function clg(...x) {
	for (let exes of x) console.log(exes);
}

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			user: {},
			followers: null
		};
		this.defaultUser = "ogrotten";
	}

	componentDidMount() {
		// clg(">>> Mount");
		axios
			.get("https://api.github.com/users/ogrotten")
			.then(res => {
				this.setState({ user: res.data });
				// clg(this.state.user);
			})
			.catch(err => {
				clg(`Problem: ${err}`);
			});
	}

	componentDidUpdate() {
		clg(">>> UpD");
		if (this.state.followers === null && this.state.user.followers > 0) {
			axios
				.get("https://api.github.com/users/ogrotten/followers")
				.then(res => {
					this.setState({ followers: res.data });
					// clg(this.state.followers);
				})
				.catch(err => {
					clg(`Problem: ${err}`);
				});
		}
	}

	render() {
		return (
			<div className="App">
				MEH
				<User
					// followers={this.state.user.followers}
					// ava={this.state.user.avatar_url}
					user={this.state.user} followers={this.state.followers}
				></User>
			</div>
		);
	}
}

export default App;
