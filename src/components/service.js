import React, { Component } from "react";
import { Link } from "gatsby";

export default class service extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="service section" id="Service">
        <div className="container">
          {/* <div className="section-head">
            <h2>Our Services</h2>
          </div> */}
          <div className="row">
            {data.edges.map((item, index) => {
              return (
                <div key={index} className="col-md-4 mb-3">
                  <div className="service-main">
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
                          return <span>{item}</span>;
                        })}
                      </h4>
                    </div>
                    <div className="strapline">{item.node.strapLine}</div>
                    {/* <div
                      dangerouslySetInnerHTML={{
                        __html: item.node.description.childMarkdownRemark.html,
                      }}
                    />*/}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row">
            <div className="see-more">
              <Link to="/services">
                <span>Find out about our Services</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
