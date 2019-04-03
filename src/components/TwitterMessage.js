import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      maxChars: this.props.maxChars
    };
  }

  handleChange = (event) => {
    let counter = this.handleCounter(event.target.value.length)

    this.setState({
      value: event.target.value,
      maxChars: this.state.maxChars - counter
    }, () => console.log(this.state))
  }

  handleCounter = (length) => {
    const previousLength = this.state.value.length
    return length - previousLength;
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <p>{this.state.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
