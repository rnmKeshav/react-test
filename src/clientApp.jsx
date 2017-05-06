var React = require('react')
var ReactDOM = require('react-dom')
var Dropdown = require('./components/dropdown')


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  getOptions() {
    let options = [
      {
        label: 'Option 1',
        value: 1
      }, 
      {
        label: 'Option 2',
        value: 2
      }
    ];

    return options;
  }

  onOptionSelect(selectedOption) {
    
  }

  render () {
    let options = this.getOptions();

    return (
      <div className="app-container">
        <div className="app-background"></div>
        <div className="searchbox-wrapper u-pos-m-m">
          <div className="search-github-text">Search Github user</div>
          <Dropdown options={options} onOptionSelect={this.onOptionSelect.bind(this)}/>
          <div className="u-t-center">
            <button type="button" className="search-button">Search</button>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
