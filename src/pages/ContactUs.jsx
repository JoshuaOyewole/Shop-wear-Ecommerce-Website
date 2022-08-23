import React from "react";
import Facebook from "../assets/png/icons/facebook.png";
import Instagram from "../assets/png/icons/instagram.png";

const ContactUs = () => {
  return (
    <>
      <div style={{ minHeight: "70vh" }}>
        <div className="header-spacer" />
        <h1 className="text-center c-page-header">Contact Us</h1>
        <div id="contact-block" className="container-fluid mt-5 pt-1">
          <div className="mt-4 ml-4 mr-4">
            <div className="container-fluid p-0">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div style={{ minWidth: 200 }}>
                      <h2>
                        <b>
                          Be part of the White Coat Community.
                          <br />
                          Got questions? Shoot us a message.
                        </b>
                      </h2>
                      <div className="mt-4 pb-4">
                        <h4 className="mb-0">
                          <strong>FOLLOW US</strong>
                        </h4>
                        <a href="#">
                          <img
                            className="c-contact__icon"
                            src={Facebook}
                            alt="Facebook"
                          />
                        </a>
                        <a href="#">
                          <img
                            className="c-contact__icon"
                            src={Instagram}
                            alt="Instagram"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div style={{ minWidth: 200 }}>
                      <form
                        method="post"
                        action="#"
                      >
                        
                        <p className="mt-2 mb-0">Your Name (Required)</p>
                        <input
                          className="c-contact__input"
                          type="text"
                          name="name"
                         
                        />
                        <p className="mt-2 mb-0">Your Email (Required)</p>
                        <input
                          className="c-contact__input"
                          type="text"
                          name="email"
                         
                        />
                        <p className="mb-0">Your Landline (Required)</p>
                        <input
                          className="c-contact__input"
                          type="text"
                          name="landline"
                         
                        />
                        <p className="mb-0">Cellphone Number (Required)</p>
                        <input
                          className="c-contact__input"
                          type="text"
                          name="mobile"
                         
                        />
                        <p className>Your Message</p>
                        <textarea
                          id="contact__message-textarea"
                          placeholder="How can we help?"
                          name="message"
                        
                        />
                        
                        <div className="mt-3 float-right">
                          <input
                            id="submitContact"
                            className="c-home-contact__submit"
                            type="submit"
                           defaultValue="Send Inquiry"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto w-75 c-line-divider mt-3 " />
        <div className="container mt-5 mb-5 ">
          <div className="row">
            <div className="col-md-6 mb-4">
              <h2>
                <b>
                  Give our Flagship Store a visit!
                  <br />
                  Drop by and say hello!
                </b>
              </h2>
            </div>
            <div className="col-md-6 mb-5">
              <div
                className=" mx-auto"
                style={{ height: 200, minWidth: 200, maxWidth: 420 }}
              >
                <p className="text-center c-contact__store-header"> MAKATI</p>
                <div className style={{ height: 170 }}>
                  <p className="d-block text-center">
                    2nd Floor, White Coat Manila, 1018 A.Arnaiz Ave,
                    <br />
                    Makati, 1223 Metro Manila, Philippines
                    <br />
                    Monday to Saturday 10AM - 6PM
                    {/* <br>0915 589 6520 | (02)8844-7651 | (02)8844-6439 */}
                    <br />
                    whitecoatmnl@gmail.com
                  </p>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
