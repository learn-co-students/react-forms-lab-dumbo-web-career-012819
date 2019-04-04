import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        // we want message to be whatever the user types in
         message : ""
    };
  }
  // updates the state as the person types
  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  };

  render() {

    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} name="message" id="message" value={this.state.message} />
        {this.props.maxChars - this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
