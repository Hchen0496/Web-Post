import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import '../App.css';

const CHAR_LIMIT = 8;

 class Signup extends React.Component {
    state = {
      error: false,
      errorMessage:'',
      success:false,
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      firstPassword: '',
      secondPassword: '',
    }

    fieldChanged = (name) => {
      return (event) => {
        let { value } = event.target;
        this.setState({ [name]: value});
      }
    }

    validUserCredentials = () => {
      if (
        this.state.firstName === '' || 
        this.state.lastName === '' ||
        this.state.email === '' || 
        this.state.username === '' || 
        this.state.firstPassword === '' ||
        this.state.secondPassword === ''
      ) {
        this.setState({
          error: true,
          errorMessage: 'All fields are required'
        });
        return false;
      }
      if (this.state.firstPassword !== this.state.secondPassword) {
        this.setState({
          error: true,
          errorMessage: 'Passwords do not match'
        });
      }
      if (this.state.firstPassword.length < CHAR_LIMIT) {
        this.setState({
          error:true,
          errorMessage: 'Password must be at least 8 characters'
        });
        return false;
      }
      return true;
    }

    signUpUser = (event) => {
      if(this.validUserCredentials()) {
        fetch("/api/auth/signup", {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            firstName: this.state.firstName,
            lastName: this.state.lastName, 
            email: this.state.email,
            username: this.state.username,
            password: this.state.firstPassword,
          })
        })
        .then(res => {
          if(res.ok) {
            return res.json();
          }
        })
        .then(user=> {
          this.setState({
            success: true,
          });
        })
        .catch(error => {
          this.setState({
            error: true,
            errorMessage: 'There was an error signing you up'
          });
        });
      }
    }
  render() {
        if (this.state.success) return <Redirect to="/login"/>;
        let errorMessage = '';
        if(this.state.error) {
          errorMessage = (
            <div className = "alert alert-danger">
              {this.state.errorMessage}
            </div>
          );
        }
    return (
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossorigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
            integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
            crossorigin="anonymous"
          />
          <link rel="stylesheet" href="/style.css" />
          <title>Bootstrap 4 Login/Register Form</title>
        </head>

        <div
            className="page-layout"
            style={{
              backgroundColor: "#4d568b",
              borderColor: "rgb(245, 206, 56)",
              borderStyle: "solid"
            }}
          >
            <form class="form-horizontal" action="" method="POST">
              <fieldset>
                <div id="legend">
                  <legend class="" style={{ color: "white"}}>Register</legend>
                </div>

                <div class="control-group">
                  <label class="control-label" for="email" style={{ color: "white"}}>
                    E-mail
                  </label>
                  <div class="control-group">
                    <input
                      type="text"
                      value={this.state.email}
                      name="email"
                      placeholder=""
                      className="input-xlarge"
                      onChange={this.fieldChanged('email')}
                    />
                    <p class="help-block" style={{ color: "white"}}></p>
                  </div>
                </div>

                <div class="control-group">
                  <label class="control-label" for="password_confirm" style={{ color: "white"}}>
                    First Name
                  </label>
                  <div class="controls">
                    <input
                      type="text"
                      value = {this.state.firstName}
                      name="password_confirm"
                      placeholder=""
                      className="input-xlarge"
                      onChange={this.fieldChanged('firstName')}
                    />
                    <p class="help-block" style={{ color: "white"}}></p>
                  </div>
                </div>

                <div class="control-group">
                  <label class="control-label" for="password_confirm" style={{ color: "white"}}>
                    Last Name
                  </label>
                  <div class="controls">
                    <input
                      type="text"
                      value={this.state.lastName}
                      name="first_name"
                      placeholder=""
                      className="input-xlarge"
                      onChange={this.fieldChanged('lastName')}
                    />
                    <p class="help-block" style={{ color: "white"}}></p>
                  </div>
                </div>

                <div class="control-group">
                  <label class="control-label" for="username" style={{ color: "white"}}> Username</label>
                  <div class="controls">
                    <input
                      type="text"
                      value={this.state.username}
                      name="username"
                      placeholder=""
                      class="input-xlarge"
                      onChange={this.fieldChanged('username')}
                      />
                    <p class="help-block" style={{ color: "white"}}>
                      
                    </p>
                  </div>
                </div>

                <div class="control-group">
                  <label class="control-label" for="password" style={{ color: "white"}}>
                    Password
                  </label>
                  <div class="controls">
                    <input
                      type="password"
                      value={this.state.firstPassword}
                      name="password"
                      placeholder=""
                      className="input-xlarge"
                      onChange={this.fieldChanged('firstPassword')}
                    />
                    <p class="help-block" style={{ color: "white"}}>
                    Password should be at least 8 characters
                    </p>
                  </div>
                </div>

                <div class="control-group">
                  <label class="control-label" for="password_confirm" style={{ color: "white"}}>
                    Password (Re-enter password)
                  </label>
                  <div class="controls">
                    <input
                      type="password"
                      value={this.state.secondPassword}
                      name="password_confirm"
                      placeholder=""
                      class="input-xlarge"
                      onChange={this.fieldChanged('secondPassword')}
                    />
                    <p class="help-block" style={{ color: "white"}}></p>
                  </div>
                </div>

                <div class="control-group">
                  <div class="controls">
                    <button class="btn btn-success btn-block" style={{ backgroundColor: "#339999", borderColor: "#f5ce38" }}>Register</button>
                    <br/>
                    <Link>Already have an account?</Link>

                  <Link
                    to="/"
                    class="btn btn-success btn-block"
                    style={{ backgroundColor: "#f5ce38", border: "2px solid #339999" }}>
                    <i class="fas fa-sign-in-alt" /> Log in
                  </Link>
                  </div>
                </div>
              </fieldset>
              </form>
              </div>
      </html>
    );
  }
}

export default Signup;