import React, { Component } from "react";

var settings = {
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
};

export default class Faqs extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="faq section" id="Faqs">
        <div className="container">
          <div className="section-head">
            <h2>FAQs</h2>
          </div>
          <ul className={`faq-list`}>
            {data.edges.map((item, index) => {
              return (
                <li key={index} className="item">
                  <div className="inner">
                    <div className="faq">
                      <h3 className="question">{item.node.question}</h3>
                      <span className="question">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.node.ans.childMarkdownRemark.html,
                          }}
                        />
                        <span class="divider"></span>
                      </span>
                    </div>
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
