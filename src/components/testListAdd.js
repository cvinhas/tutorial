import { Component } from "react";
import { Button } from "react-bootstrap";

class TestListAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemName: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeItemName = this.handleChangeItemName.bind(this);

    }

    handleSubmit(event) {
        this.props.listHandleCallback(this.state.itemName);
        this.setState({ itemName: "" });
        event.preventDefault();
    }

    handleChangeItemName(event) {
        console.log(event.target.value);
        this.setState({ itemName: event.target.value });
    }

    render() {
        return (
            <div>
                TestListAdd
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            Item name
                            <input type="text" value={this.state.itemName} onChange={this.handleChangeItemName} />
                        </label>
                    </div>
                    <Button type="submit">
                        Submit
                    </Button>
                </form>
            </div>
        );
    }
}

export default TestListAdd;