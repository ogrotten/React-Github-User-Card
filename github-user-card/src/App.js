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
			user: {}
		};
	}

	componentDidMount() {
		clg(">>> Mount");
		axios
			.get("https://api.github.com/users/ogrotten")
			.then(res => {
				this.setState({user: res.data}) 
				clg(this.state.user);
			})
			.catch(err => {
				clg(`Problem: ${err}`);
			});
	}

	componentDidUpdate() {
		clg(">>> UpD");
	}

	render() {
		return (
			<div className="App">
				MEH
				<User
					// followers={this.state.user.followers}
					// ava={this.state.user.avatar_url}
					user={this.state.user}
					>
				</User>
			</div>
		)
	}
}

export default App;
