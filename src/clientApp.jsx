var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./components/myTitle')

class MyFirstComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <MyTitle title='My first component' color= 'red' />
        <MyTitle title= 'myTitle second instance' />
        <MyTitle title= '3rd time my component' color= 'mediumaquamarine' />
      </div>
    )
  }
}

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'))
