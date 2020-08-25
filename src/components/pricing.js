import React, { Component } from "react";

export default class Pricing extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="pricing section" id="Pricing">
        <div className="container pricing-table">
          {data.edges.map((item, index) => {
            return (
              <div className="col-md-4">
                <div className="generic_content clearfix">
                  <div className="generic_head_price clearfix">
                    <div className="generic_head_content clearfix">
                      <div className="head_bg"></div>
                      <div className="head">
                        <span>{item.node.title}</span>
                      </div>
                    </div>

                    <div className="generic_price_tag clearfix">
                      <span className="price">
                        <span className="sign">£</span>
                        <span className="currency heavy">
                          {item.node.price}
                        </span>

                        <span className="month">/{item.node.timeUnit}</span>
                      </span>
                    </div>
                  </div>

                  <div className="generic_feature_list">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.node.description.childMarkdownRemark.html,
                      }}
                    />
                    <ul>
                      {item.node.features.map((feature, index) => {
                        return (
                          <li>
                            <span>{feature}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div className="generic_price_btn clearfix">
                    <a className="" href="">
                      Sign up
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
