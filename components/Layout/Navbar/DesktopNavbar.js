import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

//Images
import logoSm from "@/public/images/logo-sm.svg";
import avatar from "@/public/images/users/avatar-1.jpg";

const DesktopNavbar = () => {
  const { data: session } = useSession();

  return (
    <header id="page-topbar">
      <div className="navbar-header">
        <div className="d-flex">
          <div className="navbar-brand-box">
            <Link href="#">
              <a className="logo logo-dark">
                <span className="logo-sm">
                  <Image src={logoSm} alt="levitas-logo" height="24" />
                </span>
                <span className="logo-lg">
                  <Image src={logoSm} alt="levitas-logo" height="24" />
                </span>
              </a>
            </Link>
            <Link href="#">
              <a className="logo logo-light">
                <span className="logo-sm">
                  <Image src={logoSm} alt="levitas-logo" height="24" />
                </span>
                <span className="logo-lg">
                  <Image src={logoSm} alt="levitas-logo" height="24" />
                </span>
              </a>
            </Link>
          </div>
          <button
            type="button"
            className="btn btn-sm px-3 font-size-16 d-lg-none header-item waves-effect waves-light"
            data-bs-toggle="collapse"
            data-bs-target="#topnav-menu-content"
          >
            <i className="fa fa-fw fa-bars"></i>
          </button>
          <nav className="navbar navbar-light navbar-expand-lg topnav-menu desktop">
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
        <div className="d-flex">
          {session ? (
            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item bg-soft-light border-start border-end"
                id="page-header-user-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <Image
                  className="rounded-circle header-profile-user"
                  src={avatar}
                  alt="Header Avatar"
                  width={36}
                  height={36}
                />
                <span className="d-none d-xl-inline-block ms-1 fw-medium">
                  Shawn L.
                </span>
                <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
              </button>
              <div className="dropdown-menu dropdown-menu-end">
                <Link href="#">
                  <a className="dropdown-item">
                    <i className="mdi mdi-face-profile font-size-16 align-middle me-1"></i>
                    Profile
                  </a>
                </Link>
                <Link href="#">
                  <a className="dropdown-item">
                    <i className="mdi mdi-lock font-size-16 align-middle me-1"></i>
                    Lock screen
                  </a>
                </Link>

                <div className="dropdown-divider"></div>
                <Link href={"/api/auth/sign-out"}>
                  <a
                    className="dropdown-item"
                    onClick={(e) => {
                      e.preventDefault();
                      signOut();
                    }}
                  >
                    <i className="mdi mdi-logout font-size-16 align-middle me-1"></i>
                    Logout
                  </a>
                </Link>
              </div>
            </div>
          ) : (
            <div className="dropdown d-inline-block">
              <button type="button" className="btn btn-light">
                <Link href={"/auth/login"}>
                  <a
                    className="nav-link dropdown-toggle arrow-none"
                    id="topnav-dashboard"
                    role="button"
                  >
                    Sign-in
                  </a>
                </Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default DesktopNavbar;
