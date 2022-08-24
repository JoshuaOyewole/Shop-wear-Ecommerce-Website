import React from "react";
/* import Categories from "../components/Categories"; */
import Shop from "../components/Shop";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import { mobile } from "../responsive";
import styled from "styled-components";
import Testimonial from "../components/Testimonial"

const IntroText = styled.p`
  width: 100%;
  max-width: 800px;
  font-weight: 600;
  font-size: 2rem;
  text-align: center;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  ${mobile({ fontSize: "24px"})}
`;
const Home = () => {
  return (
    <div>
      <Slider />
      <IntroText>
        The Leading Brand for Medical Coats and Scrub Suits in Manila. Made with
        the Utmost Comfort & Style for Our Modern Day Heroes.
      </IntroText>
      <Shop />
      {/* <Categories /> */}
      <Products />
   <Testimonial />
      <div>
        <div className="mx-auto w-75 c-line-divider" />
        <h1 className="c-home-title--sm" style={{ wordWrap: "break-word" }}>
          #WHITECOATCOMMUNITY
        </h1>
        <div className="container-fluid p-0 mt-3">
          <div className="row c-home__works-row mx-auto">
            <div className="col c-home__works-col ">
              <a
                data-fancybox="home-works"
                href="/images/B-06.jpg"
              >
                <img
                  className="c-home__works__img"
                  src="/images/B-06.jpg"
                />
              </a>
            </div>
            <div className="col c-home__works-col ">
              <a
                data-fancybox="home-works"
                href="/images/A-04.jpg"
              >
                <img
                  className="c-home__works__img"
                  src="/images/A-04.jpg"
                />
              </a>
            </div>
            <div className="col c-home__works-col ">
              <a
                data-fancybox="home-works"
                href="/images/A-05.jpg"
              >
                <img
                  className="c-home__works__img"
                  src="/images/A-05.jpg"
                />
              </a>
            </div>
            <div className="col c-home__works-col ">
              <a
                data-fancybox="home-works"
                href="/images/A-09.jpg"
              >
                <img
                  className="c-home__works__img"
                  src="/images/A-09.jpg"
                />
              </a>
            </div>
            <div className="col c-home__works-col ">
              <a
                data-fancybox="home-works"
                href="/images/D-01.jpg"
              >
                <img
                  className="c-home__works__img"
                  src="/images/D-01.jpg"
                />
              </a>
            </div>
            <div className="col c-home__works-col ">
              <a href="our-work.html" className="c-home-news__link--last">
                <img
                  className="c-home__works__img--last"
                  src="/images/C-03.jpg"
                />
                {/* <div
                  className="c-center-vertical c-home__works__last-link"
                  style={{ color: "black" }}
                >
                  SEE MORE
                </div> */}
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto w-75 c-line-divider" />
        <h1 className="c-home-title">GARMENT TECHNOLOGY</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4 text-center">
              <img className="w-75 " src="images/gt1.jpg" />
            </div>
            <div className="col-md-6 mt-lg-3 mb-4">
              <div className="c-center-vertical">
                <h2>
                  <b>MoveTech Scrubs</b>
                </h2>
                <h5>
                  <b>New Scrubs. New Technology</b>
                  <br />
                  <br />
                  Introducing MoveTechR White Coat Manila’s proprietary fabric
                  blend for the utmost comfort and style. The first scrubs in
                  the Philippines to have FIVE (5) of the highly sought out
                  properties in professional medical clothing.
                  <br />
                  <br />
                  ✔️Lightweight
                  <br />
                  ✔️4-Way Stretch
                  <br />
                  ✔️Water-Resistant
                  <br />
                  ✔️Crease Resistant
                  <br />
                  ✔️Antimicrobial RUCO®-BAC Coated
                </h5>
              </div>
            </div>
            <div className="col-md-6 text-center mb-4">
              <img className="w-75 " src="images/gt2.jpg" />
            </div>
            <div className="col-md-6 mt-lg-3">
              <div className="c-center-vertical">
                <h2>
                  <b>WhiteCoatPro+®</b>
                </h2>
                <h5>
                  <b>Game-Changing Technology.</b>
                  <br />
                  <br />
                  Experience Game-Changing Technology with WhiteCoatPro+®’s
                  SEVEN highly sought-after properties in professional medical
                  clothing.
                  <br />
                  <br />
                  ✔️Antistatic
                  <br />
                  ✔️Breathable
                  <br />
                  ✔️Quick Dry
                  <br />
                  ✔️Moisture Wicking
                  <br />
                  ✔️Crease Resistant
                  <br />
                  ✔️Water-Resistant
                  <br />
                  ✔️Antimicrobial RUCO®-BAC Coated
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto w-75 c-line-divider" />
      </div>

      <Newsletter />
    </div>
  );
};

export default Home;
