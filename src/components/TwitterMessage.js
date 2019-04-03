import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  remainingCharacters = (input) => {
    return this.props.maxChars - input.length;
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.value} onChange={this.handleChange}/>
        <h1>{this.state.value}</h1>
        <h5>{this.remainingCharacters(this.state.value)} characters remaining</h5>
      </div>
    );
  }
}

export default TwitterMessage;
