import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      // we want the username to be whatever the user types in
      username : "",
      // we want the password to be whatever the user types in
      password : ""
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };


  render() {
    return (
      <form onSubmit={(event) => {this.state.username && this.state.password ? this.props.handleLogin(event) : event.preventDefault()}} >
        <div>
          <label>
            Username
            <input onChange={this.handleChange} id="username" name="username" type="text" value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.handleChange} id="password" name="password" type="password" value = {this.state.password} />
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
