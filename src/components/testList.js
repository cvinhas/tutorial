import { Component } from "react";
import TestListAdd from "./testListAdd";
import TestListShow from "./testListShow";

class TestList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                "item1",
                "item2",
                "item3",
                "item4",
            ]
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
                <TestListShow dataIn={this.state.list} />
                <TestListAdd listHandleCallback={this.handleNewItemFromForm} />
            </div>
        );
    }
}

export default TestList;