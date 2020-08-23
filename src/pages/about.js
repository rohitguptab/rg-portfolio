import React, { Component } from "react";

import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Banner from "../components/banner";

export default class AboutPage extends Component {
  render() {
    const { data } = this.props;

    return (
      <Layout active="about">
        <SEO
          title={data.allContentfulPages.nodes[0].page}
          keywords={data.allContentfulPages.nodes[0].seo.keywords}
          description={data.allContentfulPages.nodes[0].seo.description}
        />
        <Banner
          data={data.contentfulAboutMe}
          site={data.contentfulSiteInformation}
          page={data.allContentfulPages.nodes[0]}
        ></Banner>

        <div className="container about-page" id="About">
          <div className="section-head">
            <div
              className="hide-in-desktop"
              dangerouslySetInnerHTML={{
                __html:
                  data.allContentfulPages.nodes[0].description
                    .childMarkdownRemark.html,
              }}
            />
            <div className="left col-md-5 col-lg-4 mb-3">
              <Img
                fixed={data.contentfulAboutMe.photo.fluid}
                objectFit="cover"
                objectPosition="top center"
              />
            </div>
            <div className="left col-md-7 col-lg-8">
              <div className="about-details">
                <h2 className="sub-position">
                  {data.contentfulAboutMe.designation}.
                </h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      data.contentfulAboutMe.description.childMarkdownRemark
                        .html,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
export const pageQuery = graphql`
  query AboutPageQuery {
    contentfulIds {
      formspree
    }
    allContentfulPages(filter: { page: { eq: "About" } }) {
      nodes {
        description {
          childMarkdownRemark {
            html
          }
          description
        }
        page
        bannerImage {
          fluid(maxWidth: 1500) {
            base64
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
          }
        }
        seo {
          ... on ContentfulSeo {
            keywords
            description
          }
        }
      }
    }
    contentfulSiteInformation {
      menus
      logo {
        file {
          url
        }
      }
    }
    contentfulAboutMe {
      name
      photo {
        file {
          url
        }
        fluid {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      designation
      facebook
      gmail
      email
      id
      instagram
      linkdin
      twitter
      location
      description {
        childMarkdownRemark {
          html
        }
      }
      bannerImage {
        fluid(maxWidth: 1500) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
    }
  }
`;
