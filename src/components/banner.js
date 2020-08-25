import React, { Component } from "react";
import Img from "gatsby-image";
import classNames from "classnames";
export default class Banner extends Component {
  render() {
    const { data, site, page } = this.props;
    const isMain = !page.page;

    return (
      <div className={classNames("banner", { secondary: !isMain })} id="home">
        <img className="full" src={page.bannerImage.file.url} />

        <div className="container">
          <div className={classNames("banner-details", { secondary: !isMain })}>
            {isMain ? (
              <span className="main-title">
                {site.logo.file.url ? (
                  <img
                    src={site.logo.file.url}
                    alt="logo"
                    className="companylogo"
                  />
                ) : (
                  <span></span>
                )}
                <span className="companyName">
                  <span className="light">{data.name.split(" ")[0]}</span>{" "}
                  <span className="heavy">{data.name.split(" ")[1]}</span>
                </span>
                <div>{data.designation}.</div>
                <ul className="sub-data">
                  {data.bannerList.map((item, index) => {
                    return <li key={index + "-" + item}>{item}</li>;
                  })}
                </ul>
              </span>
            ) : (
              <div className="content">
                <h1>
                  {page.pageTitle &&
                    page.pageTitle.split(" ").map((word, i, arr) => {
                      if (arr.length - 1 === i) {
                        return <span key={word}>{word}</span>;
                      } else {
                        return word + " ";
                      }
                    })}
                </h1>
                <span className="horizontal-line"></span>
                <div
                  className="hide-in-mobile"
                  dangerouslySetInnerHTML={{
                    __html: page.description.childMarkdownRemark.html,
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
