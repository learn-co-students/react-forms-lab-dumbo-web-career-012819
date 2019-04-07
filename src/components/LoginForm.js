import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username:'',
      password:''
    };
  }

  changeEventHandler = (event) => {
      this.setState({
        [event.target.name]:event.target.value
      });
  }

  submitEventHandler = (event) => {
    event.preventDefault();
    if(this.state.username && this.state.password ){
      this.props.handleLogin(this.state);
    } else{
      alert('Fill all the inputs.');
    }
  }


  render() {
    return (
      <form onSubmit={this.submitEventHandler}>
        <div>
          <label>
            Username
            <input onChange={this.changeEventHandler} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.changeEventHandler} id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
