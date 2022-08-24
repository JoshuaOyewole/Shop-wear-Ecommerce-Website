import React from "react";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import Lightbox from "react-awesome-lightbox";

const Container = styled.div`
  margin: 65px 0;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh", objectFit: "contain" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 10px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  padding-left: 5px;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [chart, setChart] = useState({
    f_chart: false,
    m_chart: false,
    f_guide: false,
    m_guide: false,
  });
  const [embroideryBlock, setEmsbroideryBlock] = useState(false);
  const [embroideryBack, setEmbroideryBack] = useState(false);
  const [embroideryLogo, setEmbroideryLogo] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };
  let dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <>
      <Container>
        <Announcement />
        {product._id === null ? (
          <>Loading...</>
        ) : (
          <Wrapper>
            <ImgContainer>
              <Image src={product.img} />
            </ImgContainer>
            <InfoContainer>
              <div className="c-shop-item__title">{product.title}</div>
              <div className="c-shop-item__subtitle">{product.desc}</div>
              <Price> {dollarUS.format(product.price)}</Price>
              <FilterContainer>
                <Filter>
                  <FilterTitle>Color</FilterTitle>

                  {/* {product.color?.map((c) => (
                 <FilterColor color={c} key={c} onClick={() => setColor(c)} />
               ))} */}
                  <div className="d-flex flex-wrap justify-content-center align-items-center mt-1">
                    {product.color &&
                      product.color.map((c, i) => (
                        <div
                          key={i}
                          onClick={() => setColor(c)}
                          className=""
                          role="button"
                        >
                          <div
                            className={`c-shop__color  my-1 ${
                              color === c ? "c-shop__color--selected" : ""
                            }`}
                            style={{ background: c }}
                          />
                        </div>
                      ))}
                  </div>
                </Filter>
                <Filter>
                  <FilterTitle>Size</FilterTitle>
                  <select
                    className="form-control ms-2 px-4 "
                    onChange={(e) => setSize(e.target.value)}
                  >
                    {product.size &&
                      product.size.map((size) => (
                        <option key={size}>{size}</option>
                      ))}
                    {/* {product.size && product.size?.map((s) => (
                   <option value={s} key={s}>{s}</option>
                 ))} */}
                  </select>
                </Filter>
              </FilterContainer>
              <div className="d-flex flex-column align-items-start">
                <div className="">Size Chart</div>
                <div className="mb-2">
                  {product.categories && product.categories[0] === "women" ? (
                    <>
                      <img
                        style={{
                          width: 45,
                          height: 35,
                          objectFit: "cover",
                          margin: "0 5px",
                        }}
                        src="/images/f_chart.jpg"
                        alt="size chart"
                        role="button"
                        onClick={() =>
                          setChart({
                            ...chart,
                            f_chart: true,
                          })
                        }
                      />

                      <img
                        style={{
                          width: 45,
                          height: 35,
                          objectFit: "cover",
                          margin: "0 5px",
                        }}
                        src="/images/f_guide.jpg"
                        alt="how to measure"
                        role="button"
                        onClick={() =>
                          setChart({
                            ...chart,
                            f_guide: true,
                          })
                        }
                      />

                      <div
                        className={`${chart.f_chart ? "d-block" : "d-none"}`}
                      >
                        <Lightbox
                          image="/images/f_chart.jpg"
                          title="size chart"
                          onClose={() =>
                            setChart({
                              ...chart,
                              f_chart: false,
                            })
                          }
                        />
                      </div>
                      <div
                        className={`${chart.f_guide ? "d-block" : "d-none"}`}
                      >
                        <Lightbox
                          image="/images/f_guide.jpg"
                          title="Size Chart"
                          onClose={() =>
                            setChart({
                              ...chart,
                              f_guide: false,
                            })
                          }
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <img
                        style={{
                          width: 45,
                          height: 35,
                          objectFit: "cover",
                          margin: "0 5px",
                        }}
                        src="/images/m_chart.jpg"
                        alt="size chart"
                        role="button"
                        onClick={() =>
                          setChart({
                            ...chart,
                            m_chart: true,
                          })
                        }
                      />

                      <img
                        style={{
                          width: 45,
                          height: 35,
                          objectFit: "cover",
                          margin: "0 5px",
                        }}
                        src="/images/m_guide.jpg"
                        alt="how to measure"
                        role="button"
                        onClick={() =>
                          setChart({
                            ...chart,
                            m_guide: true,
                          })
                        }
                      />

                      <div
                        className={`${chart.m_chart ? "d-block" : "d-none"}`}
                      >
                        <Lightbox
                          image="/images/m_chart.jpg"
                          title="size chart"
                          onClose={() =>
                            setChart({
                              ...chart,
                              m_chart: false,
                            })
                          }
                        />
                      </div>
                      <div
                        className={`${chart.m_guide ? "d-block" : "d-none"}`}
                      >
                        <Lightbox
                          image="/images/m_guide.jpg"
                          title="size chart"
                          onClose={() =>
                            setChart({
                              ...chart,
                              m_guide: false,
                            })
                          }
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div id="embroidery-options">
                <div className="px-2 mb-3 c-shop__colors-label">
                  Would you like to avail of embroidery services?
                </div>
                <div className="px-2 mb-4 d-flex align-items-center justify-content-between">
                  <div className="c-shop__colors-label">
                    <b>ADD MY NAME AND DESIGNATION</b>
                  </div>
                  <input
                    id="embroidery-checkbox"
                    type="checkbox"
                    style={{ width: 20, height: 20 }}
                    name="embroidery"
                    onChange={() => setEmsbroideryBlock(!embroideryBlock)}
                  />
                </div>
                {embroideryBlock && (
                  <>
                    <div id="embroidery-block" className="c-shop__embroidery">
                      <div className="container-fluid mb-3 ps-3 pe-1">
                        <div className="row mb-3">
                          <div className="col-12">
                            <div className="c-shop__embroidery__label mb-2">
                              NAME PLACEMENT
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="d-flex">
                              <div className="me-3">
                                <input
                                  type="radio"
                                  id="name-left"
                                  name="namePlacement"
                                  defaultValue="left"
                                  defaultChecked
                                />
                                <label htmlFor="name-left" className>
                                  LEFT
                                </label>
                              </div>
                              <div>
                                <input
                                  type="radio"
                                  id="name-right"
                                  name="namePlacement"
                                  defaultValue="right"
                                />
                                <label htmlFor="name-left" className>
                                  RIGHT
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-12">
                            <div className="c-shop__embroidery__label mb-2">
                              MY NAME
                            </div>
                          </div>
                          <div className="col">
                            <input
                              id="embroidery-input1"
                              type="text"
                              className="c-shop__embroidery__input "
                              maxLength={30}
                              name="embroideryLine1"
                              placeholder="First Line"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col">
                            <input
                              id="embroidery-input2"
                              type="text"
                              className="c-shop__embroidery__input"
                              maxLength={30}
                              name="embroideryLine2"
                              placeholder="Second Line (Optional)"
                            />
                            <div className="mt-3 d-flex align-items-center">
                              <div>
                                <input
                                  className
                                  style={{ width: 15, height: 15 }}
                                  type="checkbox"
                                  name="agreeEmbroidery"
                                />
                              </div>
                              <div
                                className="ms-2 mt-1 text-left"
                                style={{ color: "red" }}
                              >
                                <b>ARE YOU SURE?</b>
                              </div>
                            </div>
                            <div className="text-left">
                              <b>
                                *WE DO NOT ALLOW CHANGES OR MODIFICATIONS TO
                                NAME &amp; DESIGNATION EMBROIDERY ONCE YOU
                                CHECKOUT. EMBROIDERY ITEMS ARE FINAL SALE.
                              </b>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-5">
                            <div className="h-100 d-flex align-items-center">
                              <div className="c-shop__embroidery__label">
                                Colour
                              </div>
                            </div>
                          </div>
                          <div className="col-7">
                            <select
                              id="embroidery-color"
                              className="c-shop-item__embroidery-dropdown"
                              name="embroideryColor"
                            >
                              <option value="black">Black</option>
                              <option value="navy blue">Navy Blue</option>
                            </select>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-5">
                            <div className="h-100 d-flex align-items-center">
                              <div className="c-shop__embroidery__label">
                                Font
                              </div>
                            </div>
                          </div>
                          <div className="col-7">
                            <select
                              id="embroidery-font"
                              className="c-shop-item__embroidery-dropdown"
                              name="embroideryFont"
                            >
                              <option value="block">Block</option>
                              <option value="script">Script</option>
                            </select>
                          </div>
                        </div>
                        <div className="row mb-3 px-2">
                          <div>
                            <b>Color Preview</b>
                          </div>
                          <div
                            className="w-100"
                            style={{
                              height: "6rem",
                              backgroundColor: "#F5F0F6",
                              borderRadius: 10,
                              border: "#dbdbdb 2px solid",
                            }}
                          >
                            <div className="d-flex w-100 h-100 align-items-center justify-content-center">
                              <div>
                                <div
                                  id="embFirstLine"
                                  style={{ fontSize: "1.1rem", color: "black" }}
                                  className="c-aileron"
                                >
                                  (First Line Here)
                                </div>
                                <div
                                  id="embSecondLine"
                                  style={{ fontSize: "1.1rem", color: "black" }}
                                  className="c-aileron"
                                >
                                  (Optional Second Line Here)
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="text-left"
                            style={{ color: "gray", fontSize: "small" }}
                          >
                            For color visualization purposes only.
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                <div className="px-2 mb-4 d-flex align-items-center justify-content-between">
                  <div className="c-shop__colors-label">
                    <b>ADD BACK EMBROIDERY</b>
                  </div>
                  <input
                    id="embroidery-back-checkbox"
                    type="checkbox"
                    style={{ width: 20, height: 20 }}
                    name="embroideryBack"
                    onChange={() => setEmbroideryBack(!embroideryBack)}
                  />
                </div>
                {embroideryBack && (
                  <div
                    id="embroidery-back-block"
                    className="c-shop__embroidery "
                  >
                    <div className="container-fluid mb-3 ps-3 pe-1">
                      <div className="row mb-3">
                        <div className="col-12">
                          <div className="c-shop__embroidery__label mb-2">
                            BACK EMBROIDERY
                          </div>
                        </div>
                        <div className="col">
                          <input
                            id="embroidery-back-input1"
                            type="text"
                            className="c-shop__embroidery__input "
                            maxLength={30}
                            name="embroideryBackLine1"
                            placeholder="Back Embroidery"
                          />
                        </div>
                        <div className="row mb-3">
                          <div className="col">
                            <div className="mt-3 d-flex align-items-center">
                              <div>
                                <input
                                  className
                                  style={{ width: 15, height: 15 }}
                                  type="checkbox"
                                  name="agreeBackEmbroidery"
                                />
                              </div>
                              <div
                                className="ms-2 mt-1 text-left"
                                style={{ color: "red" }}
                              >
                                <b>ARE YOU SURE?</b>
                              </div>
                            </div>
                            <div className="text-left">
                              <b>
                                *WE DO NOT ALLOW CHANGES OR MODIFICATIONS TO
                                BACK EMBROIDERY ONCE YOU CHECKOUT. EMBROIDERY
                                ITEMS ARE FINAL SALE.
                              </b>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-5">
                          <div className="h-100 d-flex align-items-center">
                            <div className="c-shop__embroidery__label">
                              Colour
                            </div>
                          </div>
                        </div>
                        <div className="col-7">
                          <select
                            id="embroidery-back-color"
                            className="c-shop-item__embroidery-dropdown"
                            name="embroideryBackColor"
                          >
                            <option value="black">Black</option>
                            <option value="navy blue">Navy Blue</option>
                          </select>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-5">
                          <div className="h-100 d-flex align-items-center">
                            <div className="c-shop__embroidery__label">
                              Font
                            </div>
                          </div>
                        </div>
                        <div className="col-7">
                          <select
                            id="embroidery-back-font"
                            className="c-shop-item__embroidery-dropdown"
                            name="embroideryBackFont"
                          >
                            <option value="block">Block</option>
                            <option value="script">Script</option>
                          </select>
                        </div>
                      </div>
                      <div className="row mb-3 px-2">
                        <div>
                          <b>Color Preview</b>
                        </div>
                        <div
                          className="w-100"
                          style={{
                            height: "6rem",
                            backgroundColor: "#F5F0F6",
                            borderRadius: 10,
                            border: "#dbdbdb 2px solid",
                          }}
                        >
                          <div className="d-flex w-100 h-100 align-items-center justify-content-center">
                            <div>
                              <div
                                id="embBackFirstLine"
                                style={{ fontSize: "1.1rem", color: "black" }}
                                className="c-aileron"
                              >
                                (Back Embroidery Here)
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="text-left"
                          style={{ color: "gray", fontSize: "small" }}
                        >
                          For color visualization purposes only.
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="px-2 mb-3 d-flex align-items-center justify-content-between">
                  <div className="c-shop__colors-label">
                    <b>ADD MY LOGO</b>
                  </div>
                  <input
                    id="embroidery-logo-checkbox"
                    type="checkbox"
                    style={{ width: 20, height: 20 }}
                    name="embroideryAdd"
                    onChange={() => setEmbroideryLogo(!embroideryLogo)}
                  />
                </div>
                {embroideryLogo && (
                  <div id="embroidery-logo-block" className=" ps-3 pe-1">
                    <div className=" text-left mb-3">
                      Select a logo from our database.
                      <br />
                      <br />
                      Logo not in database?
                      <br />
                      <br />
                      For Custom Logos, we charge a separate{" "}
                      <b>One Time Programming Fee of Php1,500</b> on top of the
                      logo Php550 placement fee per item. The programming fee
                      will be billed separately after you checkout.
                      <br />
                      <br />
                      Send your custom logo, to{" "}
                      <a href="mailto:whitecoatmnl@gmail.com">
                        whitecoatmnl@gmail.com
                      </a>{" "}
                      and await further instructions.
                    </div>
                    <div className="mb-3" id="embroidery-logo-div">
                      <select
                        id="embroidery-select"
                        className="image-picker show-html"
                        name="embroideryType"
                        style={{
                          display: "block",
                          width: "70%",
                          marginBottom: 20,
                        }}
                      >
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/custom_logo.png"
                          value="custom"
                        >
                          CUSTOM LOGO
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0001.jpg"
                          value="HCL0001"
                          selected
                        >
                          Adventist Medical Center Manila
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0103.jpg"
                          value="HCL0103"
                        >
                          AFP Medical Center - Urology
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0123.jpg"
                          value="HCL0123"
                        >
                          Amang Rodriguez
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0002.jpg"
                          value="HCL0002"
                        >
                          Apotheca
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0125.jpg"
                          value="HCL0125"
                        >
                          Army General Hospital
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0003.jpg"
                          value="HCL0003"
                        >
                          Asian Eye Institute
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0004.jpg"
                          value="HCL0004"
                        >
                          Asian Hospital and Medical Center
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0005.jpg"
                          value="HCL0005"
                        >
                          Aventus Medical Care Inc.
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0006.jpg"
                          value="HCL0006"
                        >
                          Batangas Medical Center
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0083.jpg"
                          value="HCL0083"
                        >
                          Cagayan Valley Medical Center
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0126.jpg"
                          value="HCL0126"
                        >
                          Caloocan City Medical Center
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0110.jpg"
                          value="HCL0110"
                        >
                          Capital
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0007.jpg"
                          value="HCL0007"
                        >
                          Cardinal Santos Medical Center
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0008.jpg"
                          value="HCL0008"
                        >
                          Casa Medica Inc.
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0145.jpg"
                          value="HCL0145"
                        >
                          Casaul General Hospital
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0151.jpg"
                          value="HCL0151"
                        >
                          Casaul General Hospital 2
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0009.jpg"
                          value="HCL0009"
                        >
                          Centuria Medical Makati
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0141.jpg"
                          value="HCL0141"
                        >
                          CGH Medical Center
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0010.jpg"
                          value="HCL0010"
                        >
                          Chinese General Hospital &amp; Medical Center
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0011.jpg"
                          value="HCL0011"
                        >
                          CHINESE GENERAL HOSPITAL &amp; MEDICAL CENTER -
                          SECTION OF PULMONARY MEDICINE
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0099.jpg"
                          value="HCL0099"
                        >
                          Davao Regional Medical Center
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0012.jpg"
                          value="HCL0012"
                        >
                          De La Salle Medical &amp; Health Sciences Institute
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0149.jpg"
                          value="HCL0149"
                        >
                          De Los Santos Medical Center
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0084.jpg"
                          value="HCL0084"
                        >
                          De Los Santos Medical Center
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0013.jpg"
                          value="HCL0013"
                        >
                          Dentistry Logo
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0014.jpg"
                          value="HCL0014"
                        >
                          Department of Emergency Medicine DOH East Avenue
                          Medical Center
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0118.jpg"
                          value="HCL0118"
                        >
                          Department of Internal Medicine
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0076.jpg"
                          value="HCL0076"
                        >
                          Department of Pediatrics MMC
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0015.jpg"
                          value="HCL0015"
                        >
                          DLS - STI Medical Center
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0089.jpg"
                          value="HCL0089"
                        >
                          DLSHSI - College of Medicine
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0082.jpg"
                          value="HCL0082"
                        >
                          DLSHSI - De Lasalle Health Sciences Institute
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0109.jpg"
                          value="HCL0109"
                        >
                          DLSHSI OKREV
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0094.jpg"
                          value="HCL0094"
                        >
                          DLSUMC - De La Salle University Medical Center
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0016.jpg"
                          value="HCL0016"
                        >
                          Dr. Fe del Mundo Medical Center
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0090.jpg"
                          value="HCL0090"
                        >
                          Dr. Jose Fabella Memorial Hospital - BIG
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0017.jpg"
                          value="HCL0017"
                        >
                          Dr. Jose Fabella Memorial Hospital Department of
                          Pediatrics
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0129.jpg"
                          value="HCL0129"
                        >
                          Dr. Nicanor Reyes
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0147.jpg"
                          value="HCL0147"
                        >
                          EAMC - ORL HNS
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0127.jpg"
                          value="HCL0127"
                        >
                          EAMC-C - Emilio Aguinaldo College Medical Center
                          Cavite
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0153.jpg"
                          value="HCL0153"
                        >
                          EAMC-C Small
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0018.jpg"
                          value="HCL0018"
                        >
                          East Ave Medical Center - Eye Center
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0085.jpg"
                          value="HCL0085"
                        >
                          East Avenue Medical Center
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0081.jpg"
                          value="HCL0081"
                        >
                          East Avenue Medical Center - Department of Obstetrics
                          &amp; Gynecology
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0101.jpg"
                          value="HCL0101"
                        >
                          East Avenue Medical Center - Department of Pediatrics{" "}
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0019.jpg"
                          value="HCL0019"
                        >
                          East Avenue Medical Center - Urology
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0112.jpg"
                          value="HCL0112"
                        >
                          Fatima University Medical Center
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0086.jpg"
                          value="HCL0086"
                        >
                          Fernando Air Base Hospital
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0137.jpg"
                          value="HCL0137"
                        >
                          Fernando Air Base Hospital - Small
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0106.jpg"
                          value="HCL0106"
                        >
                          GCGMH - Gov. Celestino Gallares Memorial Hospital
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0128.jpg"
                          value="HCL0128"
                        >
                          Genitourinary and Prostatitis Center
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0020.jpg"
                          value="HCL0020"
                        >
                          Heart Institute
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0021.jpg"
                          value="HCL0021"
                        >
                          Hospital of the Infant Jesus
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0079.jpg"
                          value="HCL0079"
                        >
                          IDSA - Infectous Disease Society of America
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0022.jpg"
                          value="HCL0022"
                        >
                          Isabela United Doctors Medical Center
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0132.jpg"
                          value="HCL0132"
                        >
                          Jecsons Medical Center
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0135.jpg"
                          value="HCL0135"
                        >
                          Jose Lingad
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0116.jpg"
                          value="HCL0116"
                        >
                          Jose R. Reyes Medical Center
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0080.jpg"
                          value="HCL0080"
                        >
                          JRRMMC
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0111.jpg"
                          value="HCL0111"
                        >
                          JRRMMC - Jose R. Reyes Memorial Medical Center
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0077.jpg"
                          value="HCL0077"
                        >
                          Kuali Fort
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0124.jpg"
                          value="HCL0124"
                        >
                          Las Pinas Doctors Hospital
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0023.jpg"
                          value="HCL0023"
                        >
                          Makati Development Corp. - MHS
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0024.jpg"
                          value="HCL0024"
                        >
                          Makati Medical Center
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0025.jpg"
                          value="HCL0025"
                        >
                          Makati Medical Center - Department of Dermatology
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0026.jpg"
                          value="HCL0026"
                        >
                          Makati Medical Center - Department of Medicine
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0027.jpg"
                          value="HCL0027"
                        >
                          Makati Medical Center - Dermatology
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0028.jpg"
                          value="HCL0028"
                        >
                          Makati Medical Center - Emergency Department
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0029.jpg"
                          value="HCL0029"
                        >
                          Makati Medical Center - Emergency Medicine
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0030.jpg"
                          value="HCL0030"
                        >
                          Makati Medical Center - Ophthalmology
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0031.jpg"
                          value="HCL0031"
                        >
                          Makati Medical Center - Surgery
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0078.jpg"
                          value="HCL0078"
                        >
                          Manila Doctors - Surgery
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0133.jpg"
                          value="HCL0133"
                        >
                          Manila Doctors Hospital
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0139.jpg"
                          value="HCL0139"
                        >
                          Mary Mediatrix Medical Center
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0096.jpg"
                          value="HCL0096"
                        >
                          MCU Medical Foundation
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0032.jpg"
                          value="HCL0032"
                        >
                          Medical Center Muntinlupa
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0033.jpg"
                          value="HCL0033"
                        >
                          Medical City
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0115.jpg"
                          value="HCL0115"
                        >
                          MediCity
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0144.jpg"
                          value="HCL0144"
                        >
                          Metropolitan Medical Center
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0034.jpg"
                          value="HCL0034"
                        >
                          Metropolitan Medical Center
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0035.jpg"
                          value="HCL0035"
                        >
                          Mission Hospital
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0104.jpg"
                          value="HCL0104"
                        >
                          MSC Skin &amp; Body Clinic
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0105.jpg"
                          value="HCL0105"
                        >
                          National Center for Mental Health
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0036.jpg"
                          value="HCL0036"
                        >
                          National Kidney &amp; Transplant Institute
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0138.jpg"
                          value="HCL0138"
                        >
                          National Kidney and Transplant Institute
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0114.jpg"
                          value="HCL0114"
                        >
                          Neoteny
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0037.jpg"
                          value="HCL0037"
                        >
                          Nuvue Eye Care Specialists
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0038.jpg"
                          value="HCL0038"
                        >
                          Ospital ng Makati - Department of Emergency
                          Prehospital Disaster and Ambulatory Care Medicine
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0039.jpg"
                          value="HCL0039"
                        >
                          Ospital ng Makati - Department of Pediatrics
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0093.jpg"
                          value="HCL0093"
                        >
                          Ospital ng Makati - Department of Pediatrics
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0040.jpg"
                          value="HCL0040"
                        >
                          Ospital ng Makati - Obgyn
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0113.jpg"
                          value="HCL0113"
                        >
                          Ospital ng Maynila
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0041.jpg"
                          value="HCL0041"
                        >
                          Ospital ng Maynila - Dermatology
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0042.jpg"
                          value="HCL0042"
                        >
                          Our Lady of All Nations
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0043.jpg"
                          value="HCL0043"
                        >
                          Our Lady of Caysasay Medical Center
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0044.jpg"
                          value="HCL0044"
                        >
                          Our Lady of Lourdes Hospital
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0102.jpg"
                          value="HCL0102"
                        >
                          Pan Pacific Aesthetic Institute
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0134.jpg"
                          value="HCL0134"
                        >
                          PAOTACSI - Philippine Association of Thoracic and
                          Cardiovascular Surgeons, Inc.
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0045.jpg"
                          value="HCL0045"
                        >
                          PCMC Section of Pulmonology
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0143.jpg"
                          value="HCL0143"
                        >
                          Philippine Academy for Aesthetic Surgery
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0046.jpg"
                          value="HCL0046"
                        >
                          Philippine Academy of Naturopathic Medicine
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0091.jpg"
                          value="HCL0091"
                        >
                          Philippine Association of Primary Skin Health
                          Physicians - BIG
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0155.jpg"
                          value="HCL0155"
                        >
                          Philippine Association of Primary Skin Health
                          Physicians, Inc.
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0047.jpg"
                          value="HCL0047"
                        >
                          Philippine Children's Medical Center
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0122.jpg"
                          value="HCL0122"
                        >
                          Philippine College of Occupational Medicine
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0048.jpg"
                          value="HCL0048"
                        >
                          Philippine General Hospital
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0049.jpg"
                          value="HCL0049"
                        >
                          Philippine Heart Center
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0050.jpg"
                          value="HCL0050"
                        >
                          Philippine Infectious Diseases Society for Obstetrics
                          and Gynecology, Inc.
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0051.jpg"
                          value="HCL0051"
                        >
                          Philippine Orthopedic Center
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0117.jpg"
                          value="HCL0117"
                        >
                          Philippine Pediatric Society
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0097.jpg"
                          value="HCL0097"
                        >
                          Philippine Society of Anesthesiology
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0052.jpg"
                          value="HCL0052"
                        >
                          PHILIPPINE SOCIETY OF OPHTHALMIC PLASTIC AND
                          RECONSTRUCTIVE SURGERY
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0108.jpg"
                          value="HCL0108"
                        >
                          POGSI - Philippine Obstetrical and Gynecological
                          Society, Inc.
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0140.jpg"
                          value="HCL0140"
                        >
                          PSOMO - Philippine Society of Medical Oncology
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0131.jpg"
                          value="HCL0131"
                        >
                          Quezon City General Hospital
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0100.jpg"
                          value="HCL0100"
                        >
                          Quirino Memorial Medical Center
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0095.jpg"
                          value="HCL0095"
                        >
                          Ramon Magsaysay Medical Center
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0053.jpg"
                          value="HCL0053"
                        >
                          Research Institute for Tropical Medicine
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0054.jpg"
                          value="HCL0054"
                        >
                          Research Institute for Tropical Medicine - Dermatology
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0055.jpg"
                          value="HCL0055"
                        >
                          Rizal Medical Center
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0056.jpg"
                          value="HCL0056"
                        >
                          Safeguard DNA Diagnostics Inc.
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0136.jpg"
                          value="HCL0136"
                        >
                          San Juan De Dios
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0148.jpg"
                          value="HCL0148"
                        >
                          San Juan Medical Center Internal Medicine
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0057.jpg"
                          value="HCL0057"
                        >
                          San Lazaro Hospital
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0058.jpg"
                          value="HCL0058"
                        >
                          Sisthetics
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0059.jpg"
                          value="HCL0059"
                        >
                          Skin &amp; Cancer Foundation Inc.{" "}
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0088.jpg"
                          value="HCL0088"
                        >
                          Snake
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0060.jpg"
                          value="HCL0060"
                        >
                          Society of Pediatric Critical Care
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0120.jpg"
                          value="HCL0120"
                        >
                          SRDL Medical Clinic
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0152.jpg"
                          value="HCL0152"
                        >
                          St Luke's Heart Institute
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0061.jpg"
                          value="HCL0061"
                        >
                          St. Luke's Medical Center
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0087.jpg"
                          value="HCL0087"
                        >
                          St. Paul University
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0121.jpg"
                          value="HCL0121"
                        >
                          Tondo Medical Center
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0062.jpg"
                          value="HCL0062"
                        >
                          Topnotch Board Prep
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0063.jpg"
                          value="HCL0063"
                        >
                          TUV Rheinland
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0154.jpg"
                          value="HCL0154"
                        >
                          UDMC - Department of Pediatrics{" "}
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0064.jpg"
                          value="HCL0064"
                        >
                          UNIVERSITY OF PERPETUAL HELP SYSTEM DALTA - School of
                          Medicine
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0065.jpg"
                          value="HCL0065"
                        >
                          University of the East Ramon Magsaysay Memorial
                          Hospital
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0066.jpg"
                          value="HCL0066"
                        >
                          University of the East Ramon Magsaysay Memorial
                          Medical Center - Surgery
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0067.jpg"
                          value="HCL0067"
                        >
                          University of the East Ramon Magsaysay Memorial
                          Medical Center College of Medicine
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0068.jpg"
                          value="HCL0068"
                        >
                          UP PGH Department of Orthopedics
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0069.jpg"
                          value="HCL0069"
                        >
                          UP PGH Department of Pediatrics
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0070.jpg"
                          value="HCL0070"
                        >
                          UP PGH Emergency Medicine
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0150.jpg"
                          value="HCL0150"
                        >
                          UP-PGH Department of Surgery
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0071.jpg"
                          value="HCL0071"
                        >
                          UST Cedres
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0072.jpg"
                          value="HCL0072"
                        >
                          UST Faculty of Medicine &amp; Surgery
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0073.jpg"
                          value="HCL0073"
                        >
                          UST Health Service
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0107.jpg"
                          value="HCL0107"
                        >
                          UST Hospital
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0142.jpg"
                          value="HCL0142"
                        >
                          Valenzuela Medical Center
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0074.jpg"
                          value="HCL0074"
                        >
                          Victoriano Luna General Hospital - Internal Medicine
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0146.jpg"
                          value="HCL0146"
                        >
                          Victoriano Luna Medical Center - AFPHSC
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0092.jpg"
                          value="HCL0092"
                        >
                          Victoriano Luna Medical Center - General Surgery
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0130.jpg"
                          value="HCL0130"
                        >
                          Villarosa Hospital
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0075.jpg"
                          value="HCL0075"
                        >
                          VRP Medical Center
                        </option>
                        <option
                          data-img-src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0098.jpg"
                          value="HCL0098"
                        >
                          Zamboanga Medical Center - Department of
                          Anesthesiology
                        </option>
                      </select>
                      <ul
                        className="thumbnails image_picker_selector d-flex flex-wrap"
                        id="image_picker_selector_id"
                        style={{
                          overflow: "scroll",
                          scrollBehavior: "smooth",
                          height: 200,
                        }}
                      >
                        <li id="logo_0">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/custom_logo.png"
                            />
                          </div>
                        </li>
                        <li id="logo_1">
                          <div className="thumbnail selected">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0001.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_2">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0103.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_3">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0123.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_4">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0002.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_5">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0125.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_6">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0003.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_7">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0004.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_8">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0005.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_9">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0006.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_10">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0083.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_11">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0126.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_12">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0110.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_13">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0007.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_14">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0008.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_15">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0145.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_16">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0151.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_17">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0009.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_18">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0141.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_19">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0010.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_20">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0011.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_21">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0099.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_22">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0012.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_23">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0149.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_24">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0084.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_25">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0013.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_26">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0014.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_27">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0118.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_28">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0076.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_29">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0015.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_30">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0089.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_31">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0082.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_32">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0109.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_33">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0094.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_34">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0016.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_35">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0090.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_36">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0017.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_37">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0129.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_38">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0147.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_39">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0127.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_40">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0153.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_41">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0018.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_42">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0085.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_43">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0081.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_44">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0101.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_45">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0019.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_46">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0112.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_47">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0086.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_48">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0137.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_49">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0106.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_50">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0128.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_51">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0020.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_52">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0021.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_53">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0079.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_54">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0022.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_55">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0132.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_56">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0135.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_57">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0116.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_58">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0080.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_59">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0111.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_60">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0077.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_61">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0124.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_62">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0023.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_63">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0024.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_64">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0025.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_65">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0026.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_66">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0027.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_67">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0028.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_68">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0029.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_69">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0030.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_70">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0031.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_71">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0078.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_72">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0133.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_73">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0139.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_74">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0096.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_75">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0032.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_76">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0033.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_77">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0115.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_78">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0144.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_79">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0034.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_80">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0035.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_81">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0104.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_82">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0105.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_83">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0036.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_84">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0138.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_85">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0114.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_86">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0037.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_87">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0038.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_88">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0039.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_89">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0093.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_90">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0040.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_91">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0113.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_92">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0041.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_93">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0042.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_94">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0043.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_95">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0044.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_96">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0102.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_97">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0134.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_98">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0045.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_99">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0143.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_100">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0046.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_101">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0091.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_102">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0155.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_103">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0047.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_104">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0122.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_105">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0048.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_106">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0049.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_107">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0050.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_108">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0051.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_109">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0117.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_110">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0097.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_111">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0052.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_112">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0108.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_113">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0140.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_114">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0131.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_115">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0100.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_116">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0095.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_117">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0053.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_118">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0054.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_119">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0055.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_120">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0056.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_121">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0136.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_122">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0148.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_123">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0057.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_124">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0058.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_125">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0059.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_126">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0088.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_127">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0060.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_128">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0120.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_129">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0152.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_130">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0061.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_131">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0087.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_132">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0121.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_133">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0062.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_134">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0063.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_135">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0154.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_136">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0064.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_137">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0065.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_138">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0066.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_139">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0067.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_140">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0068.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_141">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0069.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_142">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0070.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_143">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0150.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_144">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0071.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_145">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0072.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_146">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0073.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_147">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0107.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_148">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0142.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_149">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0074.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_150">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0146.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_151">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0092.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_152">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0130.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_153">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0075.jpg"
                            />
                          </div>
                        </li>
                        <li id="logo_154">
                          <div className="thumbnail">
                            <img
                              className="image_picker_image"
                              src="https://white-coat-manila.s3-ap-southeast-1.amazonaws.com/images/shop/logos/hcl0098.jpg"
                            />
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className=" text-left mb-3"></div>
                  </div>
                )}
              </div>

              <AddContainer>
                <AmountContainer>
                  <button
                    className="btn btn-primary btn-xs"
                    onClick={() => handleQuantity("dec")}
                  >
                    -
                  </button>
                  <Amount>{quantity}</Amount>
                  <button
                    className="btn btn-success btn-xs"
                    onClick={() => handleQuantity("inc")}
                  >
                    +
                  </button>
                </AmountContainer>
              
                <Button onClick={handleClick}>ADD TO CART</Button>
              </AddContainer>
              <div>
                    <div className="c-shop-item__collapsible c-shop-item__collapsible--active" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                      Overview
                      <img
                        className="c-shop-item__collapsible__arrow"
                        src="../../png/icons/arrow_up.png"
                        alt
                        style={{ height: 20, width: 20 }}
                      />
                    </div>
                    <div id="collapseExample" className="collapse c-shop-item__content c-shop-item__content--active">
                      <p className="c-shop-item__content__text">
                        The possibilities are endless with MoveTech® MATRIX
                        distinctively patterned weave that sets it further apart
                        from the rest.
                        <br />
                        <br />
                        - New &amp; Improved Full Garter Waistband
                        <br />
                        - Branded White Coat Manila Logo in Zipper
                        <br />
                        - Pull tight Drawstring
                        <br />- 6 Functional Pockets (Cargo Zipper Pocket +
                        2-Layered Pockets)
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="c-shop-item__collapsible c-shop-item__collapsible--active" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapseExample2">
                      Features
                      <img
                        className="c-shop-item__collapsible__arrow"
                        src="../../png/icons/arrow_up.png"
                        alt
                        style={{ height: 20, width: 20 }}
                      />
                    </div>
                    <div id="collapse2" className="c-shop-item__content c-shop-item__content--active">
                      <p className="c-shop-item__content__text">
                        Featuring MoveTechⓇ’s 5 Revolutionary Fabric Properties:
                        <br />
                        <br />
                        - Lightweight
                        <br />
                        - 4-Way Stretch
                        <br />
                        - Water-Resistant
                        <br />
                        - Crease Resistant
                        <br />- Antimicrobial RUCO®-BAC Coated
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="c-shop-item__collapsible c-shop-item__collapsible--active" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapseExample2">
                      Fabric and Care
                      <img
                        className="c-shop-item__collapsible__arrow"
                        src="../../png/icons/arrow_up.png"
                        alt
                        style={{ height: 20, width: 20 }}
                      />
                    </div>
                    <div className="c-shop-item__content collapse c-shop-item__content--active" id="collapse3">
                      <p className="c-shop-item__content__text">
                        Fabric:
                        <br />
                        - 71 % Poly
                        <br />
                        - 21 % Rayon
                        <br />
                        - 8% Spandex
                        <br />
                        - 100% Filipino Sewn
                        <br />
                        <br />
                        Care:
                        <br />
                        Machine wash under 30 degrees inside-out, tumble dry
                        low. Avoid using bleaching agents. Wash deep colours
                        separately.
                      </p>
                    </div>
                  </div>
                  <div className="d-none d-lg-block" style={{ textAlign: "left", padding: 10 }}>
                    <div style={{ fontSize: "1.5rem" }}>
                      <b>Before You Checkout</b>
                    </div>
                    <div style={{ textAlign: "left" }} className="d-flex">
                      <div style={{ maxWidth: 90 }} className="mx-3">
                        <a
                          className="w-100"
                          href="#"
                          target="_blank"
                        >
                          <img
                            className="w-100"
                            style={{ height: 135, objectFit: "cover" }}
                            src="/images/scrub-pant-men/jogger-scrub-pant.png"
                            alt
                          />
                        </a>
                        <div
                          className="text-center p-0"
                          style={{ wordWrap: "break-word", fontSize: 10 }}
                        >
                          2-Pocket Scrub Top - Men
                        </div>
                      </div>
                      <div style={{ maxWidth: 90 }} className="mx-3">
                        <a
                          className="w-100"
                          href="#"
                          target="_blank"
                        >
                          <img
                            className="w-100"
                            style={{ height: 135, objectFit: "cover" }}
                            src="/images/scrub-pant-men/jogger-scrub-pant.png"
                            alt
                          />
                        </a>
                        <div
                          className="text-center p-0"
                          style={{ wordWrap: "break-word", fontSize: 10 }}
                        >
                          2-Pocket Scrub Top - Men
                        </div>
                      </div>
                      <div style={{ maxWidth: 90 }} className="mx-3">
                        <a
                          className="w-100"
                          href="#"
                          target="_blank"
                        >
                          <img
                            className="w-100"
                            style={{ height: 135, objectFit: "cover" }}
                            src="/images/scrub-pant-men/jogger-scrub-pant.png"
                            alt
                          />
                        </a>
                        <div
                          className="text-center p-0"
                          style={{ wordWrap: "break-word", fontSize: 10 }}
                        >
                          2-Pocket Scrub Top - Men
                        </div>
                      </div>
                      <div style={{ maxWidth: 90 }} className="mx-3">
                        <a
                          className="w-100"
                          href="#"
                          target="_blank"
                        >
                          <img
                            className="w-100"
                            style={{ height: 135, objectFit: "cover" }}
                            src="/images/scrub-pant-men/jogger-scrub-pant.png"
                            alt
                          />
                        </a>
                        <div
                          className="text-center p-0"
                          style={{ wordWrap: "break-word", fontSize: 10 }}
                        >
                          2-Pocket Scrub Top - Men
                        </div>
                      </div>
                      <div style={{ maxWidth: 90 }} className="mx-3">
                        <a
                          className="w-100"
                          href="#"
                          target="_blank"
                        >
                          <img
                            className="w-100"
                            style={{ height: 135, objectFit: "cover" }}
                            src="/images/scrub-pant-men/jogger-scrub-pant.png"
                            alt
                          />
                        </a>
                        <div
                          className="text-center p-0"
                          style={{ wordWrap: "break-word", fontSize: 10 }}
                        >
                          2-Pocket Scrub Top - Men
                        </div>
                      </div>
                      <div style={{ maxWidth: 90 }} className="mx-3">
                        <a
                          className="w-100"
                          href="#"
                          target="_blank"
                        >
                          <img
                            className="w-100"
                            style={{ height: 135, objectFit: "cover" }}
                            src="/images/scrub-pant-men/jogger-scrub-pant.png"
                            alt
                          />
                        </a>
                        <div
                          className="text-center p-0"
                          style={{ wordWrap: "break-word", fontSize: 10 }}
                        >
                          2-Pocket Scrub Top - Men
                        </div>
                      </div>
                      <div style={{ maxWidth: 90 }} className="mx-3">
                        <a
                          className="w-100"
                          href="#"
                          target="_blank"
                        >
                          <img
                            className="w-100"
                            style={{ height: 135, objectFit: "cover" }}
                            src="/images/scrub-pant-men/jogger-scrub-pant.png"
                            alt
                          />
                        </a>
                        <div
                          className="text-center p-0"
                          style={{ wordWrap: "break-word", fontSize: 10 }}
                        >
                          2-Pocket Scrub Top - Men
                        </div>
                      </div>
                     
                    </div>
                  </div>
            </InfoContainer>
            
          </Wrapper>
        )}

        <Newsletter />
      </Container>
      
    </>
  );
};

export default Product;
