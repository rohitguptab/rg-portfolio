import React, { Component } from "react";
import { Link } from "gatsby";
export default class Faqs extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="faq section" id="Faqs">
        <div className="container">
          <div className="section-head">
            <h2>FAQs</h2>
          </div>
          <div className="layout">
            <div
              className="description"
              dangerouslySetInnerHTML={{
                __html:
                  data.childContentfulPagesDescriptionTextNode.description,
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
