import Link from "next/link";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { navigationToggle, walletToggle } from "../redux/actions/siteSettings";
import { stickyNav } from "../utilits";

const Header = ({ walletToggle, navigationToggle }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    stickyNav();
  }, []);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <header id="header">
        <div className="header">
          <div className="header_in">
            <div className="trigger_logo">
              <div className="logo">
                <Link href="/">
                  <a>
                    <img src="/img/logo.png" alt="" width={200} />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav" style={{ opacity: 1 }}>
              <ul>
                <li>
                  <Link href="/#home">
                    <a className="creative_link">Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#about">
                    <a className="creative_link">About</a>
                  </Link>
                </li>
                <li className="dropdown">
                  <a className="creative_link" onClick={handleDropdownToggle}>
                    Department
                  </a>
                  {isDropdownOpen && (
                    <ul className="dropdown-menu">
                      <li>
                        <Link href="/#department1">
                          <a>Department 1</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/#department2">
                          <a>Department 2</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/#department3">
                          <a>Department 3</a>
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link href="/#events">
                    <a className="creative_link">Events</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#collection">
                    <a className="creative_link">Team Members</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#contact">
                    <a className="creative_link">Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="wallet">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  walletToggle(false);
                }}
                className="metaportal_fn_button wallet_opener"
              >
                <span>Join Now</span>
              </a>
            </div>
          </div>
        </div>
      </header>
      <style jsx>{`
        .dropdown {
          position: relative;
        }
        .dropdown-menu {
          display: block;
          position: absolute;
          background: rgba(27, 18, 29, 0.9);
          border: 1px solid #ccc;
          list-style: none;
          margin: 0;
          padding: 0;
          top: 100%;
          left: 0;
          z-index: 1000;
          width: auto;
        }
        .dropdown-menu li {
          padding: 10px;
        }
        .dropdown-menu li a {
          text-decoration: none;
          color: #9ba0b8;
        }
        .dropdown-menu li a:hover {
          background: #f5f5f5;
          color: #1b121d;
        }
      `}</style>
    </>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { walletToggle, navigationToggle })(Header);
