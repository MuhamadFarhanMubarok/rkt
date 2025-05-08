import React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

const Layout = (props) => {
  const data = useLocation();
  const { title, children, social } = props;
  // const path = props&&props.location&&props.location

  const [toggleNav, setToggleNav] = React.useState(false);
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`#`}
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
              <li
                className={`nav-home  ${data.pathname === "/" ? "nav-current" : ""} `}
                role="menuitem"
              >
                <Link to={`/`}>Home</Link>
              </li>
              <li
                className={`nav-home  ${data.pathname.includes("/about") ? "nav-current" : ""} `}
                role="menuitem"
              >
                <Link to={`/about`}>About</Link>
              </li>
              <li
                className={`nav-home  ${data.pathname.includes("/paket") ? "nav-current" : ""} `}
                role="menuitem"
              >
                <Link to={`/paket`}>Paket</Link>
              </li>
              <li
                className={`nav-home  ${data.pathname.includes("/projek") ? "nav-current" : ""} `}
                role="menuitem"
              >
                <Link to={`/projek`}>Projek</Link>
              </li>
              <li
                className={`nav-home  ${data.pathname.includes("/contact") ? "nav-current" : ""} `}
                role="menuitem"
              >
                <Link to={`/contact`}>Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
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
      <footer className="site-foot">
        &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link>
      </footer>
    </div>
  );
};

export default Layout;
