import React, { Component } from 'react';
import '../css/styles.css';
import Categories from './categories';

class Header extends Component {

  inputChangeHandler(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div>
        <Header />
        {/* <Header />
         <NewsList news={this.state.news} /> */}
        <Categories />
      </div>);
  }
}
export default Header;