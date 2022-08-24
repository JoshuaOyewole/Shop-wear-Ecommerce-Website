import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import {Link } from "react-router-dom";

const Container = styled.div`
  padding: 20px 60px;
  ${mobile({ padding: "30px 2px" })}
`;
/* const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 20px;
  margin: 20px auto;
  ${mobile({ flexDirection: "column" })}
`; */

const SecondaryHeader = styled.h2`
  text-transform: uppercase;
  font-size: 24px;
  font-weight:700;
  margin: 30px auto;
  padding: 10px 60px;
`;



function Shop() {
  return (
    <Container>
      <SecondaryHeader>Shop</SecondaryHeader>
      <div>
        <div className="container" style={{ maxWidth: 1000 }}>
          <div className="row">
            <div
              className=" col-md-5 p-0 position-relative"
              style={{ maxHeight: 700 }}
            >

              <Link to="/shop?cat=women">

                <img
                  className="c-home__store__img"
                  src="/images/ssf.jpg"
                />
                <div
                  className="position-absolute w-100 h-100"
                  style={{ top: 0 }}
                >
                  <div className="w-100 h-100" style={{ top: 0, padding: 8 }}>
                    <div
                      className="d-flex justify-content-center align-items-center h-100"
                      style={{ background: "rgba(0,0,0,0.2)" }}
                    >
                      <div className="c-home__store__caption">SHOP WOMEN</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md p-0" style={{ maxHeight: 700 }}>
              <div className="position-relative" style={{ height: "40%" }}>
                <Link to="/shop">
                  <img
                    className="c-home__store__img"
                    src="/images/feature_mt.jpg"
                    alt='featured image'
                  />
                  <div
                    className="position-absolute w-100 h-100"
                    style={{ top: 0 }}
                  >
                    <div className="w-100 h-100" style={{ top: 0, padding: 8 }}>
                      <div
                        className="d-flex justify-content-center align-items-center h-100"
                        style={{ background: "none" }}
                      >
                        <div className="c-home__store__caption"></div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="position-relative" style={{ height: "60%" }}>

                <Link to="/shop?cat=men">

                  <img
                    className="c-home__store__img"
                    src="/images/feature1.jpg"
                    alt='featured image'
                  />
                  <div
                    className="position-absolute w-100 h-100"
                    style={{ top: 0 }}
                  >
                    <div className="w-100 h-100" style={{ top: 0, padding: 8 }}>
                      <div
                        className="d-flex justify-content-center align-items-center h-100"
                        style={{ background: "rgba(0,0,0,0.2)" }}
                      >
                        <div className="c-home__store__caption">SHOP MEN</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div
              className="col-md p-0 position-relative"
              style={{ maxHeight: 700 }}
            >
              <div className="position-relative" style={{ height: "50%" }}>
                <Link to="/shop">
                  <img
                    className="c-home__store__img"
                    src="/images/feature6.jpg"
                  />
                  <div
                    className="position-absolute w-100 h-100"
                    style={{ top: 0 }}
                  >
                    <div className="w-100 h-100" style={{ top: 0, padding: 8 }}>
                      <div
                        className="d-flex justify-content-center align-items-center h-100"
                        style={{ background: "rgba(0,0,0,0.2)" }}
                      >
                        <div className="c-home__store__caption">
                          WHITECOATPRO+®
                          <br />
                          LONG COAT
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="position-relative" style={{ height: "50%" }}>
                <Link to="/shop">
                  <img
                    className="c-home__store__img"
                    src="/images/feature7.jpg"
                  />
                  <div
                    className="position-absolute w-100 h-100"
                    style={{ top: 0 }}
                  >
                    <div className="w-100 h-100" style={{ top: 0, padding: 8 }}>
                      <div
                        className="d-flex justify-content-center align-items-center h-100"
                        style={{ background: "rgba(0,0,0,0.2)" }}
                      >
                        <div className="c-home__store__caption">
                          WHITECOATPRO+®
                          <br />
                          BLAZERS
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Shop;
