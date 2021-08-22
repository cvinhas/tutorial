import { A, navigate } from "hookrouter";
import { Component } from "react";
import { Button } from "react-bootstrap";
import TestService from "../services/TestService";

class TestListShow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}

	async componentDidMount() {
		// this.setState({ list: TestService.getTestItems() });
		const itemsList = await TestService.getTestItems();
		this.setState({ data: itemsList });
	}

	editItem(id) {
		console.log("itemID: ", id);

		navigate(`/testListEdit/${id}`);
	}

	renderData = () => {
		return this.state.data.map(item => {
			console.log(item);
			return (
				// <div key={item.id}>{item.id}, {item.descricao}, {item.designacao} <A href="/testListEdit/{item.id}">Edit</A> </div >
				<div key={item.id}>{item.id}, {item.descricao}, {item.designacao} <Button onClick={() => this.editItem(item.id)}>What?</Button> </div>
			);
		});
	};

	render() {
		console.log(this.state.data);
		return (
			<div>
				TestListShow
				<ul>{this.renderData()}</ul>
				<A className="btn btn-primary" href="testListAdd">New Item</A>
			</div>
		);
	}
}

export default TestListShow;