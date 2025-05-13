import React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

const Layout = (props) => {
  const data = useLocation();
  const { title, children, social } = props;

  const [toggleNav, setToggleNav] = React.useState(false);

  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href="#"
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" className="site-head-left">
            <ul className="nav" role="menu">
              <li className={`nav-home  ${data.pathname === "/" ? "nav-current" : ""}`} role="menuitem">
                <Link to="/">Home</Link>
              </li>
              <li className={`nav-home  ${data.pathname.includes("/about") ? "nav-current" : ""}`} role="menuitem">
                <Link to="/about">About</Link>
              </li>
              <li className={`nav-home  ${data.pathname.includes("/paket") ? "nav-current" : ""}`} role="menuitem">
                <Link to="/paket">Paket</Link>
              </li>
              <li className={`nav-home  ${data.pathname.includes("/projek") ? "nav-current" : ""}`} role="menuitem">
                <Link to="/projek">Projek</Link>
              </li>
              <li className={`nav-home  ${data.pathname.includes("/contact") ? "nav-current" : ""}`} role="menuitem">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="site-head-center">
            <Link className="site-head-logo" to="/">
              {title}
            </Link>
          </div>
          <div className="site-head-right">
            <div className="social-links">
              <Link
                to={`https://www.youtube.com/@rumahkreatiftangerang/${social.facebook}`}
                title="Youtube"
                target="_blank"
                rel="noopener noreferrer"
              >
                Youtube
              </Link>
              <Link
                to={`https://www.instagram.com/rumahkreatif.co.id?igsh=MXkxczByaGo2YW84ZQ==/${social.twitter}`}
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </Link>
              <Link
                to={`https://www.tiktok.com/@rumahkreatiftangerang?_t=ZS-8wBFO6NN1RB&_r=1/lilxyzz/gatsby-clay`}
                title="TikTok"
                target="_blank"
                rel="noopener noreferrer"
              >
                TikTok
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>

      {/* Tombol WhatsApp */}
<a
  href="https://wa.me/6281384629990"
  className="whatsapp-button"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat via WhatsApp"
>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
    alt="WhatsApp"
    className="whatsapp-icon"
  />
</a>

<style>{`
 /* whatsapp.css */
.whatsapp-button {
  position: fixed;
  bottom: 40px;
  right: 20px;
  background-color: #25D366;
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  z-index: 1000;
  transition: transform 0.2s ease;
}

.whatsapp-button:hover {
  transform: scale(1.1);
}

.whatsapp-icon {
  width: 28px;
  height: 28px;
}

@media (max-width: 1024px) {
  .whatsapp-button {
    width: 55px;
    height: 55px;
    bottom: 0px;
    right: 18px;
  }

  .whatsapp-icon {
    width: 24px;
    height: 24px;
  }
}

@media (max-width: 640px) {
  .whatsapp-button {
    width: 50px;
    height: 50px;
    bottom: 40px;
    right: 15px;
  }

  .whatsapp-icon {
    width: 22px;
    height: 22px;
  }
}

`}</style>

    </div>
  );
};

export default Layout;
