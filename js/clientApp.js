var div = React.DOM.div;
var h1 = React.DOM.h1;

/*A component is called CompositeComponent which has been created by React.createClass like below `myTitle`*/
var myTitle = React.createClass({
  render: function() {
    return (
      div(null,
        h1({style:{color: 'red'}},
          'This is a title'
        )
      )
    );
  }
});


/*Below we have encerclinig divs. This is required as we can't assign multiple values to `myFirstComponent`. */

/*
  `myFirstComponent` will create 3 instance of `myTitle` component which will create 3 element on the page
  but there is only one class `myTitle`
*/
var myFirstComponent = (
  div(null,
    React.createElement(myTitle, null),
    React.createElement(myTitle, null),
    React.createElement(myTitle, null)
  )
);

ReactDOM.render(myFirstComponent, document.getElementById('app'));