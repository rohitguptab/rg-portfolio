import React, { Component } from "react";
import { Link } from "gatsby";

// import styled from "@emotion/styled";
// import { css } from "@emotion/core";

export default class About extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="about section" id="About">
        <div className="container">
          <div className="layout">
            <div className="content">
              <div className="section-head">
                <h2>
                  <span>Who</span>
                  <span>We</span>
                  <span>Are</span>
                </h2>
              </div>

              <div
                className="page-description"
                dangerouslySetInnerHTML={{
                  __html:
                    data.childContentfulPagesDescriptionTextNode.description,
                }}
              ></div>
            </div>
            <div className="see-more">
              <Link to="/about">
                <span>Meet the team</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
