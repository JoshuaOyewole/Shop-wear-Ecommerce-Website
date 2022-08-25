import React, { useState, useEffect } from "react";
import ShopCard from "../components/ShopCard";
import { useLocation } from "react-router-dom";
import {Link} from 'react-scroll'
import axios from "axios";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Shop = () => {
  let query = useQuery();
  const [products, setProducts] = useState([]);

  const cat = query.get("cat");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `https://whitecoatmanila.herokuapp.com/api/products?category=${cat}`
            : "https://whitecoatmanila.herokuapp.com/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  return (
    <div>
      <div className="c-height-70">
        <div className="c-shop__top-block" />
        <div className="c-shop__topnav">
          <div className="c-shop__topnav__links">      
            <Link  to={cat === "men" ? "scrubTopMen" : "scrubTopWomen"} spy={true} smooth={true}  className="c-shop__topnav__link">
              Scrub Top
            </Link>
            <Link  to={cat === "men" ? "scrubPantMen" : "scrubPantWomen"} spy={true} smooth={true}  className="c-shop__topnav__link">
              Scrub Pants
            </Link>
            <Link  to={cat === "men" ? "shortSleeveBlazerMen" : "shortSleeveBlazerWomen"} spy={true} smooth={true}  className="c-shop__topnav__link">
              Blazer Short
            </Link>
            <Link  to={cat === "men" ? "longSleeveBlazerMen" : "longSleeveBlazerWomen"} spy={true} smooth={true} id="longSleevesBlazerLink" className="c-shop__topnav__link">
              Blazer Long
            </Link>
            <Link  to={cat === "men" ? "longCoatMen" : "longCoatWomen"} spy={true} smooth={true} id="longCoatLink" className="c-shop__topnav__link">
              Lab Coat
            </Link>
            <Link  to={cat === "men" ? "scrubTopMen" : "scrubTopWomen"} spy={true} smooth={true} id="scrubsuitLink" className="c-shop__topnav__link">
              Scrubsuits
            </Link>
            <div style={{ clear: "both" }} />
          </div>
          <div style={{ clear: "both" }} />
        </div>
        <img
          className="c-shop__banner"
          src="/images/generalbanner_WCM.png"
          alt="White Coat Manila Shop"
          style={{ objectPosition: "50% 25%" }}
        />
        <div style={{ clear: "both" }} />
        <div className="container-fluid c-shop__container">
          <div className="row c-shop__row--3" style={{ maxWidth: 1440 }} />
        </div>
        <div className="container-fluid c-shop__container">
          <div className="row c-shop__row--3" style={{ maxWidth: 1440 }} />
        </div>
        {cat == "men"
          ? products.length > 0 &&
          products
              .filter((section) => section.gender == "male")
              .map((section, i) => (
                <div id={section.section} key={i}>
                  <div id="scrubtopHeader" className="c-shop__header">
                    {section.header}
                  </div>
                  <div className="container-fluid c-shop__container">
                    <div
                      className="row c-shop__row--3"
                      style={{ maxWidth: 1440 }}
                    >
                      {section.products.map((product, i) => (
                        <ShopCard
                          id={product.pid}
                          name={product.title}
                          sub={product.description}
                          price={product.price}
                          colors={product.colors}
                          size={product.size}
                          img={product.img}
                          inStock={product.inStock}
                          key={product.pid}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))
          : cat == "women"
          ? products.length > 0 &&
          products
              .filter((section) => section.gender == "female")
              .map((section, i) => (
                <div id={section.section} key={i}>
                  <div id="scrubtopHeader" className="c-shop__header">
                    {section.header}
                  </div>
                  <div className="container-fluid c-shop__container">
                    <div
                      className="row c-shop__row--3"
                      style={{ maxWidth: 1440 }}
                    >
                      {section.products.map((product, i) => (
                        <ShopCard
                          id={product.pid}
                          name={product.title}
                          sub={product.description}
                          price={product.price}
                          colors={product.colors}
                          size={product.size}
                          img={product.img}
                          inStock={product.inStock}
                          key={product.pid}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))
          : products.length > 0 &&
            products.map((section, i) => (
              <div id={section.section} key={i}>
                <div id="scrubtopHeader" className="c-shop__header">
                  {section.header}
                </div>
                <div className="container-fluid c-shop__container">
                  <div
                    className="row c-shop__row--3"
                    style={{ maxWidth: 1440 }}
                  >
                    {section.products.map((product, i) => (
                      <ShopCard
                        id={product.pid}
                        name={product.title}
                        sub={product.desc}
                        price={product.price}
                        colors={product.colors}
                        size={product.size}
                        img={product.img}
                        inStock={product.inStock}
                        key={product.pid}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
        {/* {products.length < 1 ? (
          <>Loading...</>
        ) : (
          <div>
            <div id="scrubtopHeader" className="c-shop__header">
              PRODUCTS
            </div>
            <div className="container-fluid c-shop__container">
              <div className="row c-shop__row--3" style={{ maxWidth: 1440 }}>
                {products.map((product) => (
                  <ShopCard
                    id={product._id}
                    name={product.title}
                    sub={product.description}
                    price={product.price}
                    colors={product.color}
                    size={product.size}
                    img={product.img}
                    inStock={product.inStock}
                    key={product._id}
                  />
                ))}
              </div>
            </div>
          </div>
        )} */}

        {/* {
      cat == "male" ?
      products.length > 0 &&
      products.filter(section => section.gender == "male").map((section, i) => (
        <div key={i}>
          <div id="scrubtopHeader" className="c-shop__header">
            {section.header}
          </div>
          <div className="container-fluid c-shop__container">
            <div
              className="row c-shop__row--3"
              style={{ maxWidth: 1440 }}
            >
              {section.products.map((product, i) => (
                <ShopCard
                  name={product.name}
                  sub={product.sub}
                  price={product.price}
                  colors={product.colors}
                  img={product.img}
                  key={i}
                />
              ))}
            </div>
          </div>
        </div>
      )) : cat == "female" ? products.length > 0 &&
      products.filter(section => section.gender == "female").map((section, i) => (
        <div key={i}>
          <div id="scrubtopHeader" className="c-shop__header">
            {section.header}
          </div>
          <div className="container-fluid c-shop__container">
            <div
              className="row c-shop__row--3"
              style={{ maxWidth: 1440 }}
            >
              {section.products.map((product, i) => (
                <ShopCard
                  name={product.name}
                  sub={product.sub}
                  price={product.price}
                  colors={product.colors}
                  img={product.img}
                  key={i}
                />
              ))}
            </div>
          </div>
        </div>
      )) : products.length > 0 &&
      products.map((section, i) => (
        <div key={i}>
         
          <div id="scrubtopHeader" className="c-shop__header">
            {section.header}
          </div>
          <div className="container-fluid c-shop__container">
            <div
              className="row c-shop__row--3"
              style={{ maxWidth: 1440 }}
            >
              {section.products.map((product, i) => (
                <ShopCard
                  name={product.name}
                  sub={product.sub}
                  price={product.price}
                  colors={product.colors}
                  img={product.img}
                  key={i}
                />
              ))}
            </div>
          </div>
        </div>
      ))
    } */}
      </div>
    </div>
  );
};

export default Shop;
