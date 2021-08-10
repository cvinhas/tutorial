import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json';

// COMPONENTS
import Header from "./components/header";
import NewsList from "./components/news_list";
import Categories from './components/categories';

class App extends Component {

  state = {
    news: JSON
  };

  render() {
    return (

      <div>
        {/* <Header />
        <NewsList news={this.state.news} /> */}
        <Categories />
      </div>);
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
