import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message:'',
      maxChars:0
    };
  }
  componentDidMount(){
    this.setState({maxChars: this.props.maxChars})
  }

  changeEventHandler = (event) =>{

      this.setState({
        [event.target.name]:event.target.value,
        maxChars: this.props.maxChars - event.target.value.length
      });
  

  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.changeEventHandler}  type="text" name="message" id="message" value={this.state.message} />
        <br/>
        <span>Characters Remaining:{this.state.maxChars}</span>
      </div>
    );
  }
}

export default TwitterMessage;
