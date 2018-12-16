import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import RepoListEntry from './components/RepoListEntry.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  search(term) {
    console.log(`${term} was searched`);
    $.ajax({
      type: "POST",
      url: '/repos',
      data: { username: term },
      success: repos => {
        this.sendGetRequest();
      },
    });
  }

  sendGetRequest() {
    console.log("hello")
    $.ajax({
      type: "GET",
      url: '/repos',
      success: repos => {
        this.setState({ repos: repos })
      },
    });
  }

  componentDidMount() {
    this.sendGetRequest();
  }

  render() {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos} />
      <Search onSearch={this.search.bind(this)} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));