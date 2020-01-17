import React from "react";
import { Link, Redirect } from "react-router-dom";
import "../App.css";

export default class NewsFeedPage extends React.Component {
  render() {
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
            href="https://use.fontawesomimage.com/releases/v5.3.1/css/all.css"
            integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
            crossorigin="anonymous"
          />
          <link rel="stylesheet" href="/style.css" />
          <title>Bootstrap 4 NewsFeed Page</title>
        </head>
        <body>
          <div id="navfornewsfeed">
            <ul class="newsfeednavbar">
              <li class="navigation-Gamers">
                <a href="#">Gamers</a>
              </li>
              <li class="navigation-MeetUps">
                <a href="#">MeetUps</a>
              </li>
            </ul>
            <img
              id="logo"
              src="C:\Users\Huilin Chen\Desktop\OthersProject\ProjectX\src\pages\images\usercircle.png"
            />
            <ul class="newsfeednavbar">
              <li class="navigation-Reviews">
                <a href="#">Reviews</a>
              </li>
              <li class="navigation-Search">
                <a href="#">Search</a>
              </li>
            </ul>
          </div>
        </body>
      </html>
    );
  }
}
