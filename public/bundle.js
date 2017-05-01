/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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
});

module.exports = myTitle


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var myTitle = __webpack_require__(0)

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


/***/ })
/******/ ]);