import React, { Component } from "react";
import Img from "gatsby-image";

export default class Banner extends Component {
  render() {
    const { data, site, main, image } = this.props;
    return (
      <div className={"banner" + (!main ? " secondary" : "")} id="home">
        <Img
          className="full"
          fixed={image}
          objectFit="cover"
          objectPosition="50% 50%"
        />
        {main && (
          <div className="container">
            <div className="banner-details">
              {site.logo.file.url ? (
                <img src={site.logo.file.url} alt="logo" class="companylogo" />
              ) : (
                <span></span>
              )}
              <span class="companyName">
                <span class="light">{data.name.split(" ")[0]}</span>{" "}
                <span class="heavy">{data.name.split(" ")[1]}</span>
              </span>
              <span>{data.designation}.</span>
              <ul className="sub-data">
                {data.bannerList.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
}
