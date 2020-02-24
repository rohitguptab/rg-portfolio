import { Link } from "gatsby";
import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
  }

  render() {
    const { data, header } = this.props;
    const { menu } = this.state;
    return (
      <header className={`site-header ${menu ? "active" : ""}`}>
        <div className="container">
          <div className="header-main">
            <div className="logo">
              <Link to="/">
                {data.logo.file.url ? (
                  <img src={data.logo.file.url} alt="logo" />
                ) : (
                  <span>{data.siteName}</span>
                )}
              </Link>
            </div>
            <div
              className="responsive-menu"
              onClick={() => {
                this.setState({
                  menu: !menu
                });
              }}
            >
              <span></span>
            </div>
            {header === "home" ? (
              <div className="menu">
                <ul
                  onClick={() => {
                    this.setState({
                      menu: false
                    });
                  }}
                >
                  <li>
                    <Link to="/#home">Home</Link>
                  </li>
                  {data.menus
                    .filter(item => item === "About")
                    .map(t => {
                      return (
                        <li>
                          <Link to={`/#About`}>About</Link>
                        </li>
                      );
                    })}
                  {data.menus
                    .filter(item => item === "Service")
                    .map(t => {
                      return (
                        <li>
                          <Link to={`/#Service`}>Service</Link>
                        </li>
                      );
                    })}
                  {data.menus
                    .filter(item => item === "Blogs")
                    .map(t => {
                      return (
                        <li>
                          <Link to={`/#Blogs`}>Blogs</Link>
                        </li>
                      );
                    })}

                  {data.menus
                    .filter(item => item === "Work")
                    .map(t => {
                      return (
                        <li>
                          <Link to={`/#Work`}>Work</Link>
                        </li>
                      );
                    })}
                  {data.menus
                    .filter(item => item === "Testimonials")
                    .map(t => {
                      return (
                        <li>
                          <Link to={`/#Testimonials`}>Testimonials</Link>
                        </li>
                      );
                    })}
                  {data.menus
                    .filter(item => item === "Photos")
                    .map(t => {
                      return (
                        <li>
                          <Link to={`/#Photos`}>Photos</Link>
                        </li>
                      );
                    })}
                  {data.menus
                    .filter(item => item === "Contact")
                    .map(t => {
                      return (
                        <li>
                          <Link to={`/#Contact`}>Contact</Link>
                        </li>
                      );
                    })}
                </ul>
              </div>
            ) : (
              <div className="menu">
                <ul
                  onClick={() => {
                    this.setState({
                      menu: false
                    });
                  }}
                >
                  <li>
                    <Link to="/#home">Home</Link>
                  </li>
                  {data.menus
                    .filter(item => item === "Blogs")
                    .map(t => {
                      return (
                        <li>
                          <Link to="/blogs">Blogs</Link>
                        </li>
                      );
                    })}
                  {data.menus
                    .filter(item => item === "Photos")
                    .map(t => {
                      return (
                        <li>
                          <Link to="/photos">Photos</Link>
                        </li>
                      );
                    })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>
    );
  }
}
