import React, { Component } from "react";

export default class service extends Component {
  render() {
    const { data, page } = this.props;
    return (
      <div className="service section" id="Service">
        <div className="container">
          <div className="section-head">
            <h2>Our Services</h2>
          </div>
          <div className="row">
            {data.edges.map((item, index) => {
              return (
                <div key={index} className="col-md-4 mb-3">
                  <div className="service-main">
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
                      <h3>{item.node.title}</h3>
                    </div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.node.description.childMarkdownRemark.html,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
