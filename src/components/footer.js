import React, { Component } from "react";

export default class footer extends Component {
  render() {
    const { data, site } = this.props;
    return (
      <div className="site-footer" id="footer">
        <div className="container">
          <span>{this.props.siteName}</span>
          <div>Connect with Us</div>
          <div>
            <ul className="social">
              <li>
                <a
                  className="far fa-envelope"
                  href={`mailto:` + data.email}
                  rel="noopener noreferrer"
                ></a>
              </li>

              <li>
                <a
                  className="fab fa-twitter"
                  href={data.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </li>
              <li>
                <a
                  className="fab fa-instagram"
                  href={data.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </li>
              <li>
                <a
                  className="fab fa-linkedin-in"
                  href={data.linkdin}
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
