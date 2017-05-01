var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./components/myTitle')

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="app-container">
        <div className="app-background"></div>
        <div className="searchbox-wrapper u-pos-m-m">
          <div className="search-github-text">Search Github user</div>
          <input type="text" className="search-github-input" placeholder="Please enter user name"/>
          <button type="button" className="search-button">Search</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
