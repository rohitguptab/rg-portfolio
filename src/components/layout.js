import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import "bootstrap/dist/css/bootstrap.css";

import Header from "./header";
import Footer from "./footer";

import "../css/style.css";
import "../css/font-awesome.css";

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]');
}

const Layout = ({ children, header }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        contentfulAboutMe {
          name
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
        }
        contentfulSiteInformation {
          siteName
          siteDescription
          logo {
            file {
              url
            }
          }
          menus
        }
      }
    `}
    render={(data) => (
      <>
        <Header
          data={data.contentfulSiteInformation}
          siteTitle={data.contentfulSiteInformation.siteName}
          header={header}
        />
        <div>
          <main>{children}</main>
        </div>
        <Footer
          siteName={data.contentfulSiteInformation.siteName}
          data={data.contentfulAboutMe}
        />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
