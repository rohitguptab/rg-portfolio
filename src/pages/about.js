import React, { Component } from "react";

import { graphql } from "gatsby";
import About from "../components/about";
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
          main={false}
          image={data.allContentfulPages.nodes[0].bannerImage.fluid}
        ></Banner>

        <div className="container about-page" id="About">
          <div className="section-head">
            <h1 className="line-heading h2">About</h1>

            <About data={data.contentfulAboutMe}></About>
          </div>
        </div>
      </Layout>
    );
  }
}
export const pageQuery = graphql`
  query AboutPageQuery {
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
