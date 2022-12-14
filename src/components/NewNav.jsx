import React from "react";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import shop from "../assets/png/icons/shop.png";
import MailWhite from "../assets/png/icons/mail_white.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector, useDispatch } from "react-redux";
import MenuButton from "../assets/png/icons/menu_black.png";

const MenuItem2 = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  margin-left: 25px;
  & > a {
    text-decoration: none;
    color: #000;
    font-weight: bold;
  }
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const NewNav = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="c-topnav--black">
      <style dangerouslySetInnerHTML={{ __html: "" }} />
      <div className="c-topnav--sm__bag">
        <div className="position-relative">

          <Link to="/cart">
            <MenuItem2>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined className="c-topnav-links__link--right" />
              </Badge>
            </MenuItem2>
          </Link>

        </div>
      </div>
      <div
        class="offcanvas offcanvas-start "
        style={{ backgroundColor: "#405E94" }}
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <button
            type="button"
            class="btn-close bg-text-white  text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body ">
          <div className="d-flex justify-content-between text-center mb-2">
            <div className="c-topnav--sm__imgblk-div">
              <a href="#">
                <img
                  src="/images/burger/menu_scrubs_2.jpg"
                  alt=">MoveTech Scrubsuit"
                  className="c-topnav--sm__imgblk__img"
                />
                <p className="c-topnav--sm__imgblk__text">MoveTech???</p>
              </a>
            </div>
            <div className="c-topnav--sm__imgblk-div">
              <a href="#">
                <img
                  src="/images/burger/menu_blazer.jpg"
                  alt="Long Sleeves Blazer"
                  className="c-topnav--sm__imgblk__img"
                />
                <p className="c-topnav--sm__imgblk__text">
                  WHITECOATPRO+??
                  <br />
                  LONG SLEEVES BLAZER
                </p>
              </a>
            </div>
            <div className="c-topnav--sm__imgblk-div">
              <a href="#">
                <img
                  src="/images/burger/menu_longcoat.jpg"
                  alt="Long Coat"
                  className="c-topnav--sm__imgblk__img"
                />
                <p className="c-topnav--sm__imgblk__text">
                  WHITECOATPRO+??
                  <br />
                  LONG COAT
                </p>
              </a>
            </div>
          </div>
          {/* Links */}
          <ul className="navbar-nav mr-auto" style={{ marginTop: 40 }}>
            <li className="nav-item">
              <div className="nav-link c-topnav--sm__link">
                {currentUser ? (
                  <Link className="c-topnav__user-link text-uppercase my-2" to="/profile">
                    WELCOME, {currentUser.username}
                  </Link>
                ) : (
                  <>
                    <Link to="/register">
                      <span className="c-topnav__user-link">Register </span>
                    </Link>
                    |
                    <Link to="/login">
                      <span className="c-topnav__user-link"> login</span>
                    </Link>
                  </>
                )}
              </div>
            </li>
            <li className="nav-item d-flex align-items-center">
              <Link to="/cart">
                <div className="d-flex align-items-center">
                  <p className="nav-link c-topnav--sm__link">Cart</p>
                  <MenuItem2>
                    <Badge badgeContent={quantity} color="primary">
                      <ShoppingCartOutlined className="c-topnav--sm__link" />
                    </Badge>
                  </MenuItem2>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link c-topnav--sm__link"
                to="/shop?cat=women"
              >
                Shop Women
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link c-topnav--sm__link" to="/shop?cat=men">
                Shop Men
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link c-topnav--sm__link" to="/shop">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link c-topnav--sm__link"

                to="/made-to-measure/scrubsuit"

              >
                Made-To-Measure
              </Link>
            </li>

            <li
              className="nav-item"
              style={{ borderBottom: "1px solid white" }}
            />
            <li className="nav-item">
              <Link className="nav-link c-topnav--sm__link" to="/contact-us">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link c-topnav--sm__link" href="#">
                FAQ
              </a>
            </li>
          </ul>
          {/* Links */}
        </div>
      </div>
      {/*Navbar*/}
      <nav id="topnav--sm" className="navbar navbar-light c-topnav--sm">
        {/* Navbar brand */}
        <a className="navbar-brand float-end" href="/">
          <div id="topnav--sm__logo" />
        </a>
        <button
          className="navbar-toggler m-1"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <img
            id="topnav--sm__button__img"
            className="c-topnav--sm__button--open"
            src={MenuButton}
            style={{ width: 25, height: 25 }}
            alt="menu"
          />
        </button>

        <div style={{ clear: "both" }} />
        <style dangerouslySetInnerHTML={{ __html: "" }} />
      </nav>
      <div className="c-topnav w-100 px-4 text-center">
        <div className="c-topnav-links float-start">
          <div className="float-start" style={{}}>
            <div className="d-inline-block">
              <button
                id="topnav__button"
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
                style={{ position: "relative", top: 3 }}
              >
                <div className="c-burgermenu" />
              </button>
            </div>
            {/* <div className="d-inline-block">
              <div className="c-dropdown">
                <Link className="c-topnav-links__link--left" to="/shop">
                  Shop
                </Link>
              </div>
            </div> */}
            <div className="d-inline-block">
              <div className="c-dropdown">
                <Link
                  className="c-topnav-links__link--left"
                  to="/shop?cat=women"
                >
                  Women
                </Link>
              </div>
            </div>
            <div className="d-inline-block">
              <div className="c-dropdown">
                <Link
                  className="c-topnav-links__link--left"
                  to="/shop?cat=men"
                >
                  Men
                </Link>
              </div>
            </div>
            <div className="d-inline-block">
              <div className="c-dropdown">

                <Link
                  className="c-topnav-links__link--left"
                  to="/made-to-measure/scrubsuit"
                >

                  Made-To-Measure
                </Link>
              </div>
            </div>
          </div>
        </div>
        <a href="/" className="w-100">
          <div className="c-logo mx-auto d-inline-block" />
        </a>
        <div className="c-topnav-links float-end">
          <div className="float-end">
            <div className="d-inline-block">
              <div className="c-topnav-links__link--right">
                {currentUser ? (
                  <Link className="c-topnav-links__link--right text-uppercase" to="/profile">
                    WELCOME, {currentUser.username}
                  </Link>
                ) : (
                  <>
                    <Link
                      className="c-topnav-links__link--right"
                      to="/register"
                    >
                      Register
                    </Link>
                    |
                    <Link className="c-topnav-links__link--right" to="/login">
                      login
                    </Link>
                  </>
                )}
              </div>
            </div>
            <div className="d-inline-block position-relative">
              <Link to="/cart">
                <MenuItem2>
                  <Badge badgeContent={quantity} color="primary">
                    <ShoppingCartOutlined className="c-topnav-links__link--right" />
                  </Badge>
                </MenuItem2>
              </Link>
            </div>
            <div className="d-inline-block">
              <Link className="c-topnav-links__link--right" to="/contact-us">
                <img src={MailWhite} alt="contact us" style={{ width: 20 }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewNav;
