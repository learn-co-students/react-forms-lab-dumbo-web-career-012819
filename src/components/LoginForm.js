import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  validateLogin = (event) => {
    if (this.state.username !== '' && this.state.password !== '') {
      return this.props.handleLogin()
    } else {
      return event.preventDefault()
    }
  }

  // event.target.password && event.target.username ? this.props.handleLogin : null

  render() {
    return (
      <form onSubmit={ this.validateLogin }>

        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleChange} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleChange} value={this.state.password}/>
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

// This component takes one prop: onSubmit which is a function — this function is called when the form is being submitted. By default, this function currently just includes console.log. That will allow you to see if the form is functioning correctly when working in your browser.
//
// You'll find two inputs in this component: <input type="text"> and <input type="password">. Make this a controlled component by adding the necessary attributes to these inputs. The input values should be saved to the component's state on every change.
