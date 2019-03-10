import React, { Component } from "react";
import { navigate } from "gatsby";
import styles from "./styles.module.css";

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
    message: "Enter your username",
    message2: "Enter your password",
    invalid: false
  };

  handleUsername = event => this.setState({ username: event.target.value });
  handlePassword = event => this.setState({ password: event.target.value });
  handleSubmit = event => {
    event.preventDefault();

    const status = this.props.handleLogin(this.state);

    let { message, message2, invalid } = this.state;
    if (status.error) {
      message = status.message;
      message2 = status.message2;
      invalid = true;
      return this.setState({ username: "", password: "", message,message2, invalid });
    }

    navigate(this.props.private);
  };

  render() {

    return (
      <form className={styles.LoginForm} onSubmit={this.handleSubmit}>
        <label className={styles.loginMessage}>{this.state.message}</label>

        <input
          autoFocus
          type="text"
          className={styles.LoginForm__input}
          placeholder="Username"
          onChange={this.handleUsername}
          value={this.state.username}
        />
        <label className={styles.loginMessage}>{this.state.message2}</label>

        <input
          type="password"
          className={styles.LoginForm__input}
          placeholder="Password"
          onChange={this.handlePassword}
          value={this.state.password}
        />
        
        <input type="submit"
        className={styles.LoginForm__buttonRegister}
        value={"Don't have an account? Register now !"}/>

        <div className="buttonSet">
          <input
            type="submit"
            className={styles.LoginForm__buttonCancel}
            value={"Cancel"} />

          <input
            type="submit"
            className={styles.LoginForm__buttonSignIn}            
            value={"Sign in"} />
        </div>
      </form>
    );
  }
}

export default LoginForm;
