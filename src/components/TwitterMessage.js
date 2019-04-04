import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      textArea: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      textArea: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleChange(event)} value={this.state.textArea}/>
        <h5>{this.props.maxChars - this.state.textArea.length} characters left</h5>
      </div>
    );
  }
}

export default TwitterMessage;
