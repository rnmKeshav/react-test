var React = require('react')

var div = React.DOM.div
var h1 = React.DOM.h1

/* A component is called CompositeComponent which has been created by React.createClass like below `myTitle` */
var myTitle = React.createClass({
  render: function () {
    return (
      div(null,
        h1({style: {color: this.props.color}},
          this.props.title
        )
      )
    )
  }
})

module.exports = myTitle
