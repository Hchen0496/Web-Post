import React from "react";
import { Link, Redirect } from "react-router-dom";
import "../App.css";

export default class LoginPage extends React.Component {
  render() {
    return (
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"crossorigin="anonymous"/>
          <link rel="stylesheet" href="https://use.fontawesomimage.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"/>
          <link rel="stylesheet" href="/style.css" />
          <title>Bootstrap 4 Login/Register Form</title>
        </head>
        <body>
          <div
            className="page-layout"
            style={{
              backgroundColor: "#4d568b",
              borderColor: "rgb(245, 206, 56)",
              borderStyle: "solid"
            }}
          >
            <form>
              <h1 class="h3 mb-3 font-weight-normal"
                style={{ color: "white", textAlign: "center" }}>
                {" "}
                Sign in
              </h1>

              <div class="form-group">
                <input
                  type="email"
                  id="inputEmail"
                  class="form-control"
                  placeholder="Email address"
                  required=""
                  autofocus=""/>
                <input
                  type="password"
                  id="inputPassword"
                  class="form-control"
                  placeholder="Password"
                  required=""/>
              </div>

              <div class="form-check mb-2">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="autoSizingCheck"
                />
                
              </div>
              <Link
                class="btn btn-success btn-block"
                style={{ backgroundColor: "#339999", borderColor: "#f5ce38" }}
              >
                <i class="fas fa-sign-in-alt"></i> Sign in
              </Link>
              <Link
                to="/SignUpPage"
                class="btn btn-success btn-block"
                style={{ backgroundColor: "#f5ce38", border: "2px solid #339999" }}
              >
                <i class="fas fa-sign-in-alt" /> Register </Link>

              <Link>Forgot password?</Link>
            </form>
          </div>
        </body>
      </html>
    );
  }
}
