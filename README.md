  <!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
  <p align="center">
    <a href="https://rg-portfolio.netlify.com/">
      <img alt="rg-portfolio" src="https://github.com/rohitguptab/rg-portfolio/blob/master/src/images/fev_icon.png" width="50" />
    </a>
  </p>
  <h1 align="center">
    RG-Portfolio
  </h1>
  <img src="https://github.com/rohitguptab/rg-portfolio/blob/master/docs/screenshot.jpg" />

Kick-off your Portfolio website with RG-Portfolio gatsby starter. We have used [Gatsby](https://www.gatsbyjs.org/) + [Contenful](https://www.gatsbyjs.org/packages/gatsby-source-contentful/?=Contenful).

### Live Demo:

https://rg-portfolio.netlify.com/

### Feature:

- Blogs listing with each blog post.
- Contact form with Email notification using formspree.io.
- Photos and Blogs page listing.
- Different types of sections like About, Service, Blogs, Work, Testimonials, Photos, and contact.
- All settings manage from contentful for example Header Menu, Homepage sections, blogs, and photos, etc.
- Social share in blog details pages with comment ( Disqus ).
- PWA

## 🚀 Quick start

1.  **Setup this site.**

    Use the Gatsby CLI to Clone this site.

    ```sh
    # Clone this Repositories
    gatsby new rg-portfolio https://github.com/Rohitguptab/rg-portfolio.git
    ```

1.  **Setup Contentful Models**

    Use [contentful-cli](https://github.com/contentful/contentful-cli) to import the models from contentful-data.json

    ```
    contentful space --space-id <CONTENTFUL_SPACE_ID> import --content-file contentful-data.json
    ```
    
    Checkout my below blog how to Import and Export data from ContentFul
    
    [https://rohitgupta.netlify.app/import-and-export-data-with-contentful-cli](https://rohitgupta.netlify.app/import-and-export-data-with-contentful-cli)

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd rg-portfolio
    npm install
    gatsby develop
    ```

1.  **Setup your Own Configure Projects.**

    Enter your own key

    [ContentFul](https://be.contentful.com/login):

    - spaceId = **Key**
    - accessToken = **Key**

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `rg-portfolio` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Rohitguptab/rg-portfolio)

  <!-- AUTO-GENERATED-CONTENT:END -->
