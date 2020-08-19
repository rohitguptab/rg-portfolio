import React, { Component } from "react";
import Contact from "./contact";

export default class footer extends Component {
  render() {
    const { data, site } = this.props;
    return (
      <div className="site-footer" id="footer">
        <section className="container">
          Find out more
          <Contact data={site.formspree}></Contact>
        </section>

        <section className="connect">
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
        </section>

        <section className="copyright container">
          <span>Diana Designs</span>
          <span>&copy;{this.props.siteName} 2020</span>
          <span>HansUp</span>
        </section>
      </div>
    );
  }
}
