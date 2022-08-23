import React from 'react'
import FacebookWhite from "../assets/png/icons/facebook_white.png";
import InstagramWhite from "../assets/png/icons/instagram_white.png";
import {Link} from "react-router-dom";

const NewFooter = () => {
  return (
  <div className="container-fluid c-footer mt-5" style={{bottom: 0}}>
  <div className="h-100" style={{marginTop: '3%'}}>
    <div className="row">
      <div className="col-4 c-footer__header-col" />
      <div className="col-4 c-footer__header-col" />
      <div className="col-4 c-footer__header-col" id="footer__store-loc" />
    </div>
    <div className="row mt-1">
      <div className="col-4 text-center c-footer__col" id="footer__col-1">
        <div className="container c-center-vertical p-0 text-center">
          <div className="row">
            <div className="col p-0">
              <div className="d-inline mr-1">
                <p className="c-footer__text--med">FOLLOW US</p>
              </div>
              <div className="d-inline p-0">
                <a className href="#"><img className="c-footer__icon" src={FacebookWhite} alt="Facebook" /></a>
              </div>
              <div className="d-inline p-0">
                <a className href="#"><img className="c-footer__icon" src={InstagramWhite} alt="Instagram" /></a>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col mx-auto">
              <p className="c-footer__text--med c-center-vertical">
                SUBSCRIBE TO OUR NEWSLETTER
              </p>
            </div>
          </div>
          <div className="row mt-2 c-footer__email">
            <div className="col mx-auto">
              <form method="POST" action="#">
                <input className="c-footer__newsletter__input" type="text" name="news-email" placeholder="Email Address" />
                {/* <input className="c-footer__newsletter__submit c-center-vertical" type="submit"  /> */}
              </form>
            </div>
          </div>
          <div className="row c-footer__email">
            {/* <div className="col mt-3">
              <div className="fb-like float-left" data-href="#" data-width data-layout="button_count" data-action="like" data-size="small" data-show-faces="false" data-share="false" data-colorscheme="dark" />
            </div> */}
          </div>
        </div>
      </div>
      <div className="col-4 text-center c-footer__col" id="footer__col-2">
        <div className="d-flex flex-column justify-content-around h-100">
          <a href="our-work.html" className="c-footer__link--sm" style={{wordWrap: 'break-word', fontSize: ''}}>#WhiteCoatCommunity</a>
          <Link to="/shop" className="c-footer__link">Shop</Link>
          <Link to="/made-to-measure" className="c-footer__link">Made-To-Measure</Link>
          <Link to="/faq" className="c-footer__link">FAQ</Link>
          <a href="#" className="c-footer__link">Returns &amp; Exchange Policy</a>
          <a href="#" className="c-footer__link">Terms Of Use</a>
          <a href="#" className="c-footer__link">Privacy Policy</a>
        </div>
      </div>
      <div className="col-4 text-center c-footer__col" style={{borderRight: 'none'}} id="footer__col-4">
        <div className="container c-center-vertical text-center">
          <p className="d-block c-footer__text">
            <span className="c-footer__text--big text-center">Store Location</span>
            2nd Floor, White Coat Manila, 1018 A.Arnaiz Ave,
            <br />Makati, 1223 Metro Manila, Philippines <br />Monday to
            Saturday 10AM - 6PM <br />whitecoatmnl@gmail.com
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="text-center mt-2" id="footnote">
    COPYRIGHT © 2022 WHITE COAT MANILA - ALL RIGHTS RESERVED
  </div>
</div>

  )
}

export default NewFooter