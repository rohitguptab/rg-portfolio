import React from "react";
import PropTypes from "prop-types";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from "react-share";

const Share = ({ socialConfig }) => {
  return (
    <div className="post-social">
      <h6 className="title is-6">Share:</h6>
      <FacebookShareButton
        url={socialConfig.config.url}
        className="button is-outlined is-rounded facebook"
      >
        <span className="icon">
          <i className="fab fa-facebook-f"></i>
        </span>
        <span className="text">Facebook</span>
      </FacebookShareButton>
      <TwitterShareButton
        url={socialConfig.config.url}
        className="button is-outlined is-rounded twitter"
        title={socialConfig.config.title}
        via="_rohitguptab"
      >
        <span className="icon">
          <i className="fab fa-twitter"></i>
        </span>
        <span className="text">Twitter</span>
      </TwitterShareButton>
      <WhatsappShareButton
        url={socialConfig.config.url}
        className="button is-outlined is-rounded whatsapp"
        title={socialConfig.config.title}
      >
        <span className="icon">
          <i className="fab fa-whatsapp"></i>
        </span>
        <span className="text">WhatsApp</span>
      </WhatsappShareButton>
    </div>
  );
};

Share.propTypes = {
  socialConfig: PropTypes.shape({
    twitterHandle: PropTypes.string.isRequired,
    config: PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string)
};
Share.defaultProps = {
  tags: []
};

export default Share;
