import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    const { data, page } = this.props;
    return (
      <div className="contact section" id="Contact">
        <div className="container">
          <div className="section-head">
            <h2 className="text-center">
              <span>Contact</span>
              <span>Us</span>
            </h2>
          </div>

          <div className="layout">
            <form
              action={`https://formspree.io/${data}`}
              name="contact"
              method="POST"
              data-netlify="true"
            >
              <div
                className="page-description description"
                dangerouslySetInnerHTML={{
                  __html:
                    page.childContentfulPagesDescriptionTextNode.description,
                }}
              ></div>
              <div>
                <label>
                  Your Name: <input type="text" name="name" required />
                </label>
              </div>
              <div>
                <label>
                  Your Email: <input type="email" name="email" required />
                </label>
              </div>
              <div>
                <label>
                  Message: <textarea name="message" required></textarea>
                </label>
              </div>
              <div className="submit">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
