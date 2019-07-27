import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      email: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.loginForm = this.loginForm.bind(this);
    this.signUpForm = this.signUpForm.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleChange(keyOfState) {
    return e =>
      this.setState({
        [keyOfState]: e.currentTarget.value
      });
  }

  renderErrors() {
    return (
      <div>
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={i}>{error}</li>
          ))}
        </ul>
      </div>
    );
  }

  loginForm() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={this.props.password}
              onChange={this.handleChange("password")}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={this.props.email}
              onChange={this.handleChange("email")}
            />
          </label>
          <br />
          <button onClick={this.props.login}>{this.props.formType}</button>
        </form>
      </div>
    );
  }

  signUpForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
            <input
            type="text"
            name="name"
            value={this.props.name}
            onChange={this.handleChange("name")}
          />
        </label>
        <br />
        <label>
          Password:
            <input
            type="password"
            name="password"
            value={this.props.password}
            onChange={this.handleChange("password")}
          />
        </label>
        <br />
        <label>
          Email:
            <input
            type="email"
            name="email"
            value={this.props.email}
            onChange={this.handleChange("email")}
          />
        </label>
        <br />
        <button onClick={this.props.login}>{this.props.formType}</button>
      </form>
    );
  }

  render() {
    let formToBeCalled;
    formToBeCalled = this.props.formType === 'signup' ? this.signUpForm() : this.loginForm();
    
    return (
      <div>
        {this.renderErrors()}
        {formToBeCalled}
      </div>
    );
  }
}

export default SessionForm;
