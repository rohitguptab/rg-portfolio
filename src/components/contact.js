import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <form
        action={`https://formspree.io/${this.props.data}`}
        name="contact"
        method="POST"
        data-netlify="true"
      >
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
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    );
  }
}
