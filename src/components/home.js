import React, { Component } from 'react';

class Home extends Component {

    inputChangeHandler(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <div>
                Welcome
            </div>);
    }
}
export default Home;