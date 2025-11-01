import React from "react";
import apple from "../../assets/images/icons/logo-sm.png";

import search from "../../assets/images/icons/search-icon-sm.png";

import cart from "../../assets/images/icons/cart-sm.png";

// import NavbarList from "../NavbarList";

// import { Link } from "react-router";

// import { Navbar, Container, Nav } from "react-bootstrap";

function Header() {
  return (
    <div>
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>
            <a className="navbar-brand mx-auto" href="/">
              <img src={apple} />
            </a>

            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/mac/">
                    Mac
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/iphone/">
                    iphone
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/ipad/">
                    ipad
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/watch/">
                    watch
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/tv/">
                    tv
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/Music/">
                    Music
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/Support/">
                    Support
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/search/">
                    <img src={search} />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/cart/">
                    <img src={cart} />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
