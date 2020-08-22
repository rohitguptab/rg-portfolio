import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Banner from "../components/banner";
import Service from "../components/service";
import Work from "../components/work";
import Blogs from "../components/blogs";
import Testimonial from "../components/testimonial";
import Contact from "../components/contact";
import Photos from "../components/photos";
import Faqs from "../components/faqs";
import About from "../components/about";

const IndexPage = ({ data }) => (
  <Layout header="home">
    <SEO
      title={data.allContentfulSeo.edges[0].node.page}
      keywords={data.allContentfulSeo.edges[0].node.keywords}
      description={data.allContentfulSeo.edges[0].node.description}
    />
    <Banner
      data={data.contentfulAboutMe}
      site={data.contentfulSiteInformation}
      main={true}
      image={data.contentfulAboutMe.bannerImage.fluid}
    ></Banner>

    {data.contentfulSiteInformation.menus
      .filter((item) => item === "Service")
      .map((t) => {
        return <Service data={data.allContentfulService}></Service>;
      })}

    {data.contentfulSiteInformation.menus
      .filter((item) => item === "About")
      .map((t) => {
        return (
          <About
            data={
              data.allContentfulPages.edges
                .map(function(x) {
                  return x.node;
                })
                .filter(function(v) {
                  return v.page === "About";
                })[0]
            }
          ></About>
        );
      })}

    {data.contentfulSiteInformation.menus
      .filter((item) => item === "Work")
      .map((t) => {
        return <Work data={data.allContentfulWorks}></Work>;
      })}

    {data.contentfulSiteInformation.menus
      .filter((item) => item === "Testimonials")
      .map((t) => {
        return (
          <Testimonial data={data.allContentfulTestimonials}></Testimonial>
        );
      })}
    {data.contentfulSiteInformation.menus
      .filter((item) => item === "Photos")
      .map((t) => {
        return <Photos data={data.contentfulPhotos}></Photos>;
      })}

    {data.contentfulSiteInformation.menus
      .filter((item) => item === "Blogs")
      .map((t) => {
        return <Blogs data={data.allContentfulBlogs}></Blogs>;
      })}
    {data.contentfulSiteInformation.menus
      .filter((item) => item === "Faqs")
      .map((t) => {
        return (
          <Faqs
            data={
              data.allContentfulPages.edges
                .map(function(x) {
                  return x.node;
                })
                .filter(function(v) {
                  return v.page === "Faqs";
                })[0]
            }
          ></Faqs>
        );
      })}

    {data.contentfulSiteInformation.menus
      .filter((item) => item === "Contact")
      .map((t) => {
        return <Contact data={data.contentfulIds.formspree}></Contact>;
      })}
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    contentfulIds {
      formspree
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
    allContentfulPages {
      edges {
        node {
          page
          childContentfulPagesDescriptionTextNode {
            description
          }
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
      bannerList
    }
    allContentfulService {
      edges {
        node {
          title
          description {
            childMarkdownRemark {
              html
            }
          }
          strapLine
          icon {
            file {
              url
            }
          }
        }
      }
    }
    allContentfulBlogs(limit: 5, sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          title
          slug
          featureImage {
            fluid(maxWidth: 600) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
          createdAt
        }
      }
    }
    allContentfulTestimonials {
      edges {
        node {
          name
          subTitle
          description {
            childMarkdownRemark {
              html
            }
          }
          avatarImage {
            fluid(maxWidth: 200) {
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
    }
    allContentfulWorks {
      edges {
        node {
          siteName
          url
          image {
            fluid(maxWidth: 600) {
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
    }
    contentfulPhotos {
      photos {
        fluid(maxWidth: 600) {
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
    allContentfulSeo(filter: { page: { eq: "Index" } }) {
      edges {
        node {
          description
          page
          keywords
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
  }
`;
