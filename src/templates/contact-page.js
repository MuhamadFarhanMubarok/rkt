import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { navigate } from "gatsby-link";

import Layout from "../components/layout";
import Seo from "../components/seo";

import "../utils/normalize.css";
import "../utils/css/screen.css";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const ContactPage = ({ data }, location) => {
  const [state, setState] = React.useState({});
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  const siteTitle = data.site.siteMetadata.title;
  const social = data.site.siteMetadata.social;

  return (
    <Layout title={siteTitle} social={social}>
      <Seo
        title={data.markdownRemark.frontmatter.title}
        description={data.markdownRemark.frontmatter.description}
        image={
          data.markdownRemark.frontmatter.thumbnail.childImageSharp
            .gatsbyImageData.images.fallback.src
        }
      />
      <article className="contact-form page-template">
        {data.markdownRemark.frontmatter.thumbnail && (
          <div className="post-content-image">
            <GatsbyImage
              image={getImage(data.markdownRemark.frontmatter.thumbnail)}
              className="kg-image"
              alt={data.markdownRemark.frontmatter.title}
            />
          </div>
        )}
        <div className="post-content-body">
          <h2>Hubungi Studio Kami</h2>
          <p>
            Ingin melakukan pemotretan? Punya pertanyaan seputar layanan kami?
            Silakan isi form di bawah, tim kami akan segera menghubungi Anda.
          </p>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            data-netlify-recaptcha="true"
            action="/thanks"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={handleChange} />
              </label>
            </p>

            <div className="row gtr-uniform">
              <div className="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="first-name"
                  placeholder="Nama Depan"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="last-name"
                  placeholder="Nama Belakang"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Anda"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="phone"
                  placeholder="Nomor Telepon"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12">
                <select
                  name="category"
                  onChange={handleChange}
                  required
                >
                  <option value="">- Pilih Layanan -</option>
                  <option value="Prewedding">Prewedding</option>
                  <option value="Produk">Foto Produk</option>
                  <option value="Keluarga">Foto Keluarga</option>
                  <option value="Dokumentasi">Dokumentasi Event</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>
              <div className="col-12">
                <textarea
                  name="message"
                  placeholder="Tulis pesan Anda di sini..."
                  rows="6"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-12" data-netlify-recaptcha="true"></div>

              <div className="col-12">
                <ul className="actions">
                  <li>
                    <input
                      type="submit"
                      value="Kirim Pesan"
                      className="primary"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </article>
    </Layout>
  );
};

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
          twitter
          facebook
        }
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
      frontmatter {
        title
        description
        thumbnail {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;

export default (props) => (
  <StaticQuery
    query={indexQuery}
    render={(data) => (
      <ContactPage location={props.location} data={data} {...props} />
    )}
  />
);
