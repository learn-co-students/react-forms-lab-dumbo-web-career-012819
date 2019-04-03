import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  // handleSubmit = (event) => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }

  onSubmit = (event, state) => {
    if(this.state.username != '' && this.state.password != '') {
      event.preventDefault()
      return this.props.onSubmit(state)
    } else {
      event.preventDefault()
    }
  }

  render() {
    return (
      <form onSubmit={(event) => this.onSubmit(event, this.state)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={event => this.handleUsername(event)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={event => this.handlePassword(event)} />
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
