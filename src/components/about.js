import React, { Component } from "react";
import { Link } from "gatsby";
export default class About extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="about section" id="About">
        <div className="container">
          <div className="section-head">
            <h2>Who We Are</h2>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: data.childContentfulPagesDescriptionTextNode.description,
            }}
          ></div>

          <div className="see-more">
            <Link to="/about">
              <span>Meet the team</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
