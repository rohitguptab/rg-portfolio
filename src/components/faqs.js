import React, { Component } from "react";
import { Link } from "gatsby";
export default class Faqs extends Component {
  render() {
    const { page } = this.props;
    return (
      <div className="faq section" id="Faqs">
        <div className="container">
          <div className="section-head">
            <h2>
              <span>Frequently</span>
              <span>Asked</span>
              <span>Questions</span>
            </h2>
          </div>
          <div className="layout">
            <div
              className="page-description"
              dangerouslySetInnerHTML={{
                __html:
                  page.childContentfulPagesDescriptionTextNode.description,
              }}
            ></div>

            <div className="see-more">
              <Link to="/faqs">
                <span>Read the FAQs</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
