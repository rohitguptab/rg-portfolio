import React, { Component } from "react";

import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Banner from "../components/banner";

export default class DataPage extends Component {
  render() {
    const { data } = this.props;

    return (
      <Layout active="data">
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

        <div className="container policies-page" id="Data">
          <div className="policies-details">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  data.allContentfulPages.nodes[0].description
                    .childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      </Layout>
    );
  }
}
export const pageQuery = graphql`
  query DataPageQuery {
    allContentfulPages(filter: { page: { eq: "Data" } }) {
      nodes {
        description {
          childMarkdownRemark {
            html
          }
          description
        }
        pageTitle
        page
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
