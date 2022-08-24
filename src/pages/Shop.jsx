import React, { useState, useEffect } from "react";
import ShopCard from "../components/ShopCard";
import { useLocation } from "react-router-dom";
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
            <div id="scrubsuitLink" className="c-shop__topnav__link">
              Scrubsuits
            </div>
            <div id="scrubtopLink" className="c-shop__topnav__link">
              Scrub Top
            </div>
            <div id="scrubpantsLink" className="c-shop__topnav__link">
              Scrub Pants
            </div>
            <div id="shortSleevesBlazerLink" className="c-shop__topnav__link">
              Blazer Short
            </div>
            <div id="longSleevesBlazerLink" className="c-shop__topnav__link">
              Blazer Long
            </div>
            <div id="longCoatLink" className="c-shop__topnav__link">
              Lab Coat
            </div>
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
        {products.length < 1 ? (
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
        )}

        {/* {
      cat == "male" ?
      data.length > 0 &&
      data.filter(section => section.gender == "male").map((section, i) => (
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
      )) : cat == "female" ? data.length > 0 &&
      data.filter(section => section.gender == "female").map((section, i) => (
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
      )) : data.length > 0 &&
      data.map((section, i) => (
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
