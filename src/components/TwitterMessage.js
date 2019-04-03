import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweet: '',
      maxChars: this.props.maxChars
    };
  }

  handleTweetChange = (event) => {
    this.setState({
      tweet: event.target.value,
      maxChars: this.state.maxChars - 1
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="tweet" value={this.state.tweet} onChange={event => this.handleTweetChange(event)} />
        <i> {this.state.maxChars} characters left</i>
      </div>
    );
  }
}

export default TwitterMessage;
