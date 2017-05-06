import React from 'react'
import {map as _map} from 'lodash'
import onClickOutside from 'react-onclickoutside'

class Dropdown extends React.Component {
  constructor(props) {
    super (props)

    this.state = {
      isOptionsOpen: false,
      selectedOption: {}
    };
  }

  handleClickOutside(evt) {
    this.hideOptions();
  }

  showOptions () {
    this.setState({isOptionsOpen: true});
  }

  hideOptions () {
    this.setState({isOptionsOpen: false});
  }

  onOptionSelect (selectedOption) {
    if (this.props.onOptionSelect) {
      this.props.onOptionSelect(selectedOption)
    }
    
    this.setState({
      selectedOption: selectedOption,
      isOptionsOpen: false
    });
  }

  getOneOption (oneOption) {
    return (
      <div className="single-option" key={oneOption.value} onClick={this.onOptionSelect.bind(this,oneOption)}>
        {oneOption.label}
      </div>
    );
  }

  getOptionsLayout() {
    let {options} = this.props;
    let {isOptionsOpen} = this.state;
    let __self = this;
    let layout = null, optionsLayout;

    if (isOptionsOpen) {
      optionsLayout= _map(options, function(thisOption) {
        return __self.getOneOption(thisOption);
      })

      layout = (
        <div className="options">
          {optionsLayout}
        </div>
      );
    }

    return layout;
  }

  render() {
    let options = null;
    let {selectedOption} = this.state;

    options = this.getOptionsLayout();
    return (
      <div className="dropdown">
        <input 
          type="text" 
          className="input" 
          placeholder={this.props.placeholder} 
          onFocus={this.showOptions.bind(this)}
          value={selectedOption.label}
        />
          {options}
      </div>
    );
  }
} 

Dropdown.defaultProps = {
  placeholder: 'Click to Select'
};
Dropdown.propTypes = {
  options: React.PropTypes.array.isRequired,
  onOptionSelect: React.PropTypes.func.isRequired,
  placeholder: React.PropTypes.string
}

module.exports= onClickOutside(Dropdown);
