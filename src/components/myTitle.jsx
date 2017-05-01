var React = require('react')

class myTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h1 style={{color: this.props.color}}>
          {this.props.title}
        </h1>
      </div> 
    )
  }
}

module.exports = myTitle
