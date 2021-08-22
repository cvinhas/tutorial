import { Component } from "react";
import TestListShow from "./testListShow";

class TestList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: []
		};
	}

	handleNewItemFromForm = (newItemData) => {
		console.log('testList handleNewItemFromForm', newItemData);
		this.state.list.push(newItemData);
		this.setState({ data: newItemData });
	};

	render() {
		return (
			<div>
				TestList, it just works!
				<TestListShow />
				{/* <TestListAdd listHandleCallback={this.handleNewItemFromForm} /> */}
			</div>
		);
	}
}

export default TestList;