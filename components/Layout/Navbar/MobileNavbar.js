import Link from "next/link";
import React from "react";

const MobileNavbar = () => {
  return (
    <div className="topnav mobile">
      <div className="container-fluid">
        <nav className="navbar navbar-light navbar-expand-lg topnav-menu">
          <div className="collapse navbar-collapse" id="topnav-menu-content">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="#">
                  <a
                    className="nav-link dropdown-toggle arrow-none"
                    id="topnav-dashboard"
                    role="button"
                  >
                    Exchange
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#">
                  <a
                    className="nav-link dropdown-toggle arrow-none"
                    id="topnav-dashboard"
                    role="button"
                  >
                    P2P
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#">
                  <a
                    className="nav-link dropdown-toggle arrow-none"
                    id="topnav-dashboard"
                    role="button"
                  >
                    STF
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#">
                  <a
                    className="nav-link dropdown-toggle arrow-none"
                    id="topnav-dashboard"
                    role="button"
                  >
                    Funds
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;
