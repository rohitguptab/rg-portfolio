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
              <ul className="social">
                <li>
                  <a
                    className="far fa-envelope"
                    href={`mailto:` + data.email}
                    rel="noopener noreferrer"
                  ></a>
                </li>

                <li>
                  <a
                    className="fab fa-twitter"
                    href={data.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                </li>
                <li>
                  <a
                    className="fab fa-instagram"
                    href={data.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                </li>
                <li>
                  <a
                    className="fab fa-linkedin-in"
                    href={data.linkdin}
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
}
