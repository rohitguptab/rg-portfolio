import React, { Component } from "react";
import { Link } from "gatsby";
import classNames from "classnames";

export default class service extends Component {
  render() {
    const { data, page } = this.props;
    return (
      <div className="service section" id="Service">
        <div className="container">
          <div
            className="page-description"
            dangerouslySetInnerHTML={{
              __html: page.childContentfulPagesDescriptionTextNode.description,
            }}
          ></div>
          <div className="services-row">
            {data.edges
              .filter((f) => f.node.order > 0)
              .sort((a, b) => (a.node.order > b.node.order ? 1 : -1))
              .map((item, index) => {
                let isProfessional = item.node.forHealthCareProfessionals;

                return (
                  <div key={item + "-" + index} className="col-md-4 mb-3">
                    <a
                      href={"/services#" + item.node.title.split(" ").join("_")}
                      className="overlay-link"
                    ></a>
                    <div
                      className={classNames("service-main", {
                        "professional-service": isProfessional,
                      })}
                    >
                      {item.node.icon && (
                        <div className="watermark">
                          <object
                            type="image/svg+xml"
                            data={item.node.icon.file.url}
                            className="icon"
                          >
                            {item.node.title} icon
                          </object>
                        </div>
                      )}
                      <div className="service-header">
                        {item.node.icon && (
                          <object
                            type="image/svg+xml"
                            data={item.node.icon.file.url}
                            className="icon"
                          >
                            {item.node.title} icon
                          </object>
                        )}
                        <h4>
                          {item.node.title.split(" ").map((item, index) => {
                            return <span key={item + "-" + index}>{item}</span>;
                          })}
                        </h4>
                      </div>

                      {isProfessional && (
                        <div className="audience">
                          This service is for Health Care Professionals
                        </div>
                      )}
                      <div className="strapline">{item.node.strapLine}</div>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="see-more">
            <Link to="/services">
              <span>Find out about our Services</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
