import { Component } from "react";

class TestListShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.dataIn
        };
    }

    renderData = () => {
        return this.state.data.map(item => {
            return (
                <div key={item}>{item}</div>
            );
        });
    };

    render() {
        console.log(this.state.data);
        return (
            <div>
                TestListShow
                <ul>{this.renderData()}</ul>
            </div>
        );
    }
}

export default TestListShow;