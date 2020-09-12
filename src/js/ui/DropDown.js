import React from 'react';

/*  DropDown fade in/out toggled by pressing on a label
 *    {this.props.description}  : label text
 *    {this.props.children}     : elements to be toggled
 *
 *    css located under .dropdown in main.css
 */
class DropDown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden : true
    }

    this.item = React.createRef();
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    if(this.state.hidden) {
      this.setState({ hidden : false})
    } else {
      this.item.current.classList.add("reverse"); // start reverse animation
      setTimeout(() => { // change state while animating
        this.setState({ hidden : true });
      }, 300);
    }
  }

  render() {
    // use alt descripton when visible if present
    var description = !this.state.hidden && this.props.alt ? this.props.alt : this.props.description;

    return (
      <div className="dropdown">
        <label className="small" onClick={this.toggle}> {description} </label>
        { !this.state.hidden &&
          <div className="item" ref={this.item}>
            {this.props.children}
          </div>
        }
      </div>
    )
  }
}

export default DropDown;