import React, { Component } from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Banner from "../components/banner";
import Pricing from "../components/pricing";

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
          page={data.allContentfulPages.nodes[0]}
        ></Banner>

        <div className="container services-page" id="services">
          <div
            className="hide-in-desktop page-introduction"
            dangerouslySetInnerHTML={{
              __html:
                data.allContentfulPages.nodes[0].description.childMarkdownRemark
                  .html,
            }}
          />
          {data.allContentfulService.edges.map((item, index) => {
            const ref = item.node.title.split(" ").join("_");
            return (
              <section key={ref} id={ref}>
                <h3>{item.node.title}</h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.node.description.childMarkdownRemark.html,
                  }}
                />
                <span className="divider"></span>
              </section>
            );
          })}
        </div>

        {data.contentfulSiteInformation.menus
          .filter((item) => item === "Pricing")
          .map((t) => {
            return (
              <Pricing
                key="pricing-section"
                data={data.allContentfulPricing}
              ></Pricing>
            );
          })}
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
        file {
          url
        }
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
    allContentfulPricing {
      edges {
        node {
          features
          price
          timeUnit
          title
          description {
            childMarkdownRemark {
              html
            }
          }
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
        pageTitle
        bannerImage {
          file {
            url
          }
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
