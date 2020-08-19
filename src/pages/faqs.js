import React, { Component } from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Banner from "../components/banner";

export default class FAQs extends Component {
  render() {
    const { data } = this.props;
    return (
      <Layout active="Faqs">
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

        <div className="container faqs-page" id="FAQs">
          <div className="section-head">
            <h1 className="line-heading h2">FAQs</h1>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                data.allContentfulPages.nodes[0].description.childMarkdownRemark
                  .html,
            }}
          />
          <ul className={`faq-list`}>
            {data.allContentfulFaq.edges.map((item, index) => {
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
                        <span className="divider"></span>
                      </span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query FAQPageQuery {
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
    allContentfulFaq {
      edges {
        node {
          question
          ans {
            childMarkdownRemark {
              html
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

    allContentfulPages(filter: { page: { eq: "Faqs" } }) {
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
