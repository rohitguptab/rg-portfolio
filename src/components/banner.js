import React, { Component } from "react";
import Img from "gatsby-image";
import classNames from "classnames";
export default class Banner extends Component {
  render() {
    const { data, site, page } = this.props;
    const isMain = !page.page;
    return (
      <div className={classNames("banner", { secondary: !isMain })} id="home">
        <Img
          className="full"
          fixed={page.bannerImage.fluid}
          objectFit="cover"
          objectPosition="50% 50%"
        />

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
                    return <li key={index}>{item}</li>;
                  })}
                </ul>
              </span>
            ) : (
              <div class="content">
                <h1>
                  {page.page
                    .split(" ")
                    .splice(-1)
                    .join("<span>")}
                </h1>
                <span class="horizontal-line"></span>
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
