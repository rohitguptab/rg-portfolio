import React, { Component } from "react";
import Img from "gatsby-image";

export default class work extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="work section" id="Work">
        <div className="container">
          <div className="section-head">
            <h2 className="text-center">Work</h2>
          </div>
          <ul className="work-list">
            {data.edges.map((item, index) => {
              return (
                <li key={index} className="item">
                  <div className="inner">
                    <a href={item.node.url}>
                      <Img
                        fixed={item.node.image.fluid}
                        objectFit="cover"
                        objectPosition="50% 50%"
                      />
                      <span className="name">{item.node.siteName}</span>
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
