import React from "react";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import shop from "../assets/png/icons/shop.png";
import MailWhite from "../assets/png/icons/mail_white.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector, useDispatch } from "react-redux";
import MenuButton from "../assets/png/icons/menu_black.png"

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
  return (
    <div className="c-topnav--black">
      <style dangerouslySetInnerHTML={{ __html: "" }} />
      <div className="c-topnav--sm__bag">
        <div className="position-relative">
          <a className href="bag.html">
            <img
              src={shop}
              alt="contact us"
              style={{ width: 20, height: 20 }}
            />
          </a>
        </div>
      </div>
      {/*Navbar*/}
      <nav id="topnav--sm" className="navbar navbar-light c-topnav--sm">
        {/* Navbar brand */}
        <a className="navbar-brand float-end" href="/">
          <div id="topnav--sm__logo" />
        </a>
        <button
          id="topnav--sm__button"
          style={{}}
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#topnav--sm__collapsible"
          aria-controls="topnav--sm__collapsible"
          aria-expanded="false"
          aria-label="Toggle navigation"
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
        {/* Collapsible content */}
        <div className="collapse navbar-collapse" id="topnav--sm__collapsible">
          <div className="d-flex justify-content-between text-center mt-3 mb-4">
            <div className="c-topnav--sm__imgblk-div">
              <a href="#">
                <img
                  src="/images/burger/menu_scrubs_2.jpg"
                  alt=">MoveTech Scrubsuit"
                  className="c-topnav--sm__imgblk__img"
                />
                <p className="c-topnav--sm__imgblk__text">MoveTechⓇ</p>
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
                  WHITECOATPRO+®
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
                  WHITECOATPRO+®
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
                <Link className="c-topnav__user-link" to="/register">
                  Register
                </Link>
                |{" "}
                <Link className="c-topnav__user-link" to="/login">
                  login
                </Link>
              </div>
            </li>
            <li className="nav-item d-flex align-items-center">
              <Link to="/cart">
                <MenuItem2>
                  <Badge badgeContent={quantity} color="primary">
                    <ShoppingCartOutlined className="c-topnav--sm__link" />
                  </Badge>
                </MenuItem2>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link c-topnav--sm__link" to="/cat/women">
                Shop Women
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link c-topnav--sm__link" to="/cat/men">
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
                to="/cat/made-to-measure"
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
        {/* Collapsible content */}
      </nav>
      <div className="c-topnav w-100 px-4 text-center">
        <div className="c-topnav-links float-start">
          <div className="float-start" style={{}}>
            <div className="d-inline-block">
              <button
                id="topnav__button"
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#topnav--sm__collapsible"
                aria-controls="topnav--sm__collapsible"
                aria-expanded="false"
                aria-label="Toggle navigation"
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
                <Link className="c-topnav-links__link--left" to="/cat/women">
                  Women
                </Link>
              </div>
            </div>
            <div className="d-inline-block">
              <div className="c-dropdown">
                <Link className="c-topnav-links__link--left" to="/cat/men">
                  Men
                </Link>
              </div>
            </div>
            <div className="d-inline-block">
              <div className="c-dropdown">
                <Link
                  className="c-topnav-links__link--left"
                  to="/cat/made-to-measure"
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
                <Link className="c-topnav-links__link--right" to="/register">
                  Register
                </Link>
                |
                <Link className="c-topnav-links__link--right" to="/login">
                  login
                </Link>
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
              <Link className="c-topnav-links__link--right" to="/contact">
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
