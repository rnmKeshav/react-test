var myTitle = require('./components/myTitle.js')

var div = React.DOM.div
/* Below we have encerclinig divs. This is required as we can't assign multiple values to `myFirstComponent`. */

/*
  `myFirstComponent` will create 3 instance of `myTitle` component which will create 3 element on the page
  but there is only one class `myTitle`
*/
var myFirstComponent = (
  div(null,
    React.createElement(myTitle, {title: 'My first component', color: 'red'}),
    React.createElement(myTitle, {title: 'myTitle second instance'}),
    React.createElement(myTitle, {title: '3rd time my component', color: 'mediumaquamarine'})
  )
)

ReactDOM.render(myFirstComponent, document.getElementById('app'))
