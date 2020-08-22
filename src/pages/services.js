import React, { Component } from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Banner from "../components/banner";

export default class Services extends Component {
  render() {
    const { data } = this.props;
    return (
      <Layout active="services">
        <SEO
          title={data.allContentfulPages.nodes[0].page}
          keywords={data.allContentfulPages.nodes[0].seo.keywords}
          description={data.allContentfulPages.nodes[0].seo.description}
        />
        <Banner
          data={data.contentfulAboutMe}
          site={data.contentfulSiteInformation}
          main={false}
          image={data.allContentfulPages.nodes[0].bannerImage.fluid}
        ></Banner>

        <div className="container services-page" id="services">
          <div className="section-head">
            <h1 className="line-heading h2">Services</h1>
          </div>

          <div
            dangerouslySetInnerHTML={{
              __html:
                data.allContentfulPages.nodes[0].description.childMarkdownRemark
                  .html,
            }}
          />
          {data.allContentfulService.edges.map((item, index) => {
            return (
              <div id={item.node.title.split(" ").join("_")}>
                <h3>{item.node.title}</h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.node.description.childMarkdownRemark.html,
                  }}
                />
                <span className="divider"></span>
              </div>
            );
          })}
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query ServicesPageQuery {
    contentfulIds {
      formspree
    }
    contentfulSiteInformation {
      menus
      logo {
        file {
          url
        }
      }
    }
    allContentfulService {
      edges {
        node {
          strapLine
          title
          description {
            childMarkdownRemark {
              html
            }
          }
          icon {
            file {
              url
            }
          }
        }
      }
    }
    contentfulAboutMe {
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

    allContentfulPages(filter: { page: { eq: "Services" } }) {
      nodes {
        description {
          childMarkdownRemark {
            html
          }
          description
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
        page
        seo {
          ... on ContentfulSeo {
            keywords
            description
          }
        }
      }
    }
  }
`;
