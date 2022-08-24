import React, { useState, useEffect } from "react";
import ShopCard from "../components/ShopCard";
import { useLocation } from "react-router-dom";
import axios from "axios";

const data = [
  {
    header: "MoveTechⓇ Scrub Top Women",
    gender: "female",
    products: [
      {
        title: "4-Pocket Scrub Top - Women",
        desc: "MoveTechⓇ Plus",
        price: "1,495",
        categories:['women','scrub-top-women'],
        size:['small', 'medium', 'large'],
        img: "scrub-top-women/4-pocket-scrub-top-women.png",
        colors: [
          "#814500",
          "#9f687f",
          "#387e7c",
          "#333541",
          "#9f687f",
          "#814500",
        ],
      },
      {
        title: "3-Pocket Scrub Top - Women",
        desc: "MoveTechⓇ Plus",
        price: "1,295",
        categories:['women','scrub-top-women'],
        size:['small', 'medium', 'large'],
        img: "scrub-top-women/4-pocket-scrub-top-women2.png",
        colors: [
          "#814500",
          "#9f687f",
          "#387e7c",
          "#333541",
          "#9f687f",
          "#814500",
        ],
      },
      {
        title: "Mandarin Scrub Top - Women",
        desc: "MoveTechⓇ Plus",
        price: "1,195",
        categories:['women','scrub-top-women'],
        size:['small', 'medium', 'large'],
        img: "scrub-top-women/4-pocket-scrub-top-women3.png",
        colors: [
          "#814500",
          "#9f687f",
          "#387e7c",
          "#333541",
          "#9f687f",
          "#814500",
        ],
      },
    ],
  },
  {
    header: "MOVETECHⓇ SCRUB TOP MEN",
    gender: "male",
    products: [
      {
        title: "4-Pocket Scrub Top - Male",
        desc: "MoveTechⓇ Plus",
        price: "1,495",
        categories:['men','scrub-top-men'],
        size:['small', 'medium', 'large'],
        img: "scrub-top-men/4-pocket-scrub-top.png",
        colors: [
          "#814500",
          "#9f687f",
          "#387e7c",
          "#333541",
          "#9f687f",
          "#814500",
        ],
      },
      {
        title: "3-Pocket Scrub Top - Male",
        desc: "MoveTechⓇ Plus",
        price: "1,695",
        categories:['men','scrub-top-men'],
        size:['small', 'medium', 'large'],
        img: "scrub-top-men/4-pocket-scrub-top2.png",
        colors: [
          "#814500",
          "#9f687f",
          "#387e7c",
          "#333541",
          "#9f687f",
          "#814500",
        ],
      },
      {
        title: "Zip-Up Polo Scrub Top - Male",
        desc: "MoveTechⓇ Plus",
        price: "1,495",
        categories:['men','scrub-top-men'],
        size:['small', 'medium', 'large'],
        img: "scrub-top-men/zip-up-polo-scrub-top.png",
        colors: [
          "#814500",
          "#9f687f",
          "#387e7c",
          "#333541",
          "#9f687f",
          "#814500",
        ],
      },
    ],
  },
  {
    header: "MOVETECHⓇ SCRUB PANTS WOMEN",
    gender: "female",
    products: [
      {
        title: "Jogger Scrub Pants - Women",
        desc: "MoveTechⓇ Plus",
        price: "1,295",
        categories:['women','scrub-pant-women'],
        size:['small', 'medium', 'large'],
        img: "scrub-pant-women/jogger-scrub-pants.png",
        colors: [
          "#814500",
          "#9f687f",
          "#387e7c",
          "#333541",
          "#9f687f",
          "#814500",
        ],
      },
      {
        title: "Straight Cut Scrub Pants - Women",
        desc: "MoveTechⓇ Plus",
        price: "1,235",
        categories:['women','scrub-pant-women'],
        size:['small', 'medium', 'large'],
        img: "scrub-pant-women/straight-cut-scrub-pants.png",
        colors: [
          "#814500",
          "#9f687f",
          "#387e7c",
          "#333541",
          "#9f687f",
          "#814500",
        ],
      },
      {
        title: "Jogger Scrub Pants - Women",
        desc: "MoveTechⓇ Plus",
        price: "1,495",
        categories:['women','scrub-pant-women'],
        size:['small', 'medium', 'large'],
        img: "scrub-pant-women/jogger-scrub-pants3.png",
        colors: [
          "#814500",
          "#9f687f",
          "#387e7c",
          "#333541",
          "#9f687f",
          "#814500",
        ],
      },
    ],
  },
  {
    header: "MOVETECHⓇ SCRUB PANTS MEN",
    gender: "male",
    products: [
      {
        title: "Jogger Scrub Pants - Male",
        desc: "MoveTechⓇ Plus",
        price: "1,495",
        categories:['men','scrub-pant-men'],
        size:['small', 'medium', 'large'],
        img: "scrub-pant-men/jogger-scrub-pant.png",
        colors: [
          "#814500",
          "#9f687f",
          "#387e7c",
          "#333541",
          "#9f687f",
          "#814500",
        ],
      },
      {
        title: "Jogger Scrub Pants - Male",
        desc: "MoveTechⓇ Plus",
        price: "1,495",
        categories:['men','scrub-pant-men'],
        size:['small', 'medium', 'large'],
        img: "scrub-pant-men/jogger-scrub-pant2.png",
        colors: [
          "#814500",
          "#9f687f",
          "#387e7c",
          "#333541",
          "#9f687f",
          "#814500",
        ],
      },
      {
        title: "Jogger Scrub Pants - Male",
        desc: "MoveTechⓇ Plus",
        price: "1,495",
        categories:['men','scrub-pant-men'],
        size:['small', 'medium', 'large'],
        img: "scrub-pant-men/jogger-scrub-pant3.png",
        colors: [
          "#814500",
          "#9f687f",
          "#387e7c",
          "#333541",
          "#9f687f",
          "#814500",
        ],
      },
    ],
  },
  {
    header: "LONG COAT WOMEN",
    gender: "female",
    products: [
      {
        title: "Long Coat Pro+® - Women",
        desc: "MoveTechⓇ Plus",
        price: "1,495",
        categories:['women','long-coat-women'],
        size:['small', 'medium', 'large'],
        img: "long-coat-women/long-coat-women.png",
        colors: [
          "#814500",
          "#9f687f",
          "#387e7c",
          "#333541",
          "#9f687f",
          "#814500",
        ],
      },
      {
        title: "Long Coat Pro+® - Women",
        desc: "MoveTechⓇ Plus",
        price: "1,495",
        categories:['women','long-coat-women'],
        size:['small', 'medium', 'large'],
        img: "long-coat-women/long-coat-women2.png",
        colors: [
          "#814500",
          "#9f687f",
          "#387e7c",
          "#333541",
          "#9f687f",
          "#814500",
        ],
      },
    ],
  },
  {
    header: "LONG COAT MEN",
    gender: "male",
    products: [
      {
        title: "Long Coat Pro+® - Male",
        desc: "MoveTechⓇ Plus",
        price: "1,495",
        categories:['men','long-coat-men'],
        size:['small', 'medium', 'large'],
        img: "long-coat-men/long-coat-men.png",
        colors: [
          "#814500",
          "#9f687f",
          "#387e7c",
          "#333541",
          "#9f687f",
          "#814500",
        ],
      },
      {
        title: "Long Coat Pro+® - Male",
        desc: "MoveTechⓇ Plus",
        price: "1,495",
        categories:['men','long-coat-men'],
        size:['small', 'medium', 'large'],
        img: "long-coat-men/long-coat-pro+.png",
        colors: [
          "#814500",
          "#9f687f",
          "#387e7c",
          "#333541",
          "#9f687f",
          "#814500",
        ],
      },
    ],
  },
  {
    header: "LONG SLEEVES BLAZER WOMEN",
    gender: "female",
    products: [
      {
        title: "Long Sleeves Blazer Pro+® - Women",
        desc: "MoveTechⓇ Plus",
        price: "1,495",
        categories:['women','long-sleeve-blazer-women'],
        size:['small', 'medium', 'large'],
        img: "long-sleeve-blazer-women/pro-longsleeves-women01.jpg",
        colors: [
          "#814500",
          "#9f687f",
          "#387e7c",
          "#333541",
          "#9f687f",
          "#814500",
        ],
      },
      {
        title: "Long Sleeves Blazer  - Women",
        desc: "MoveTechⓇ Plus",
        price: "PHP 1,495",
        categories:['women','long-sleeve-blazer-women'],
        size:['small', 'medium', 'large'],
        img: "long-sleeve-blazer-women/long-sleeves-blazer.png",
        colors: [
          "#814500",
          "#9f687f",
          "#387e7c",
          "#333541",
          "#9f687f",
          "#814500",
        ],
      },
    ],
  },
  {
    header: "LONG SLEEVES BLAZER MEN",
    gender: "male",
    products: [
      {
        title: "Long Sleeves Blazer Pro+® - Male",
        desc: "MoveTechⓇ Plus",
        price: "PHP 1,495",
        img: "long-sleeves-blazer-men/long-sleeves-blazer-pro.png",
        colors: [
          "#814500",
          "#9f687f",
          "#387e7c",
          "#333541",
          "#9f687f",
          "#814500",
        ],
      },
      {
        title: "Long Sleeves Blazer  - Male",
        sub: "MoveTechⓇ Plus",
        price: "PHP 1,495",
        img: "long-sleeves-blazer-men/long-sleeves-blazer-men.png",
        colors: [
          "#814500",
          "#9f687f",
          "#387e7c",
          "#333541",
          "#9f687f",
          "#814500",
        ],
      },
    ],
  },
  {
    header: "SHORT SLEEVES BLAZER WOMEN",
    gender: "female",
    products: [
      {
        title: "Short Sleeves Blazer - Women",
        sub: "MoveTechⓇ Plus",
        price: "PHP 1,495",
        img: "short-sleeves-blazer-women/short-sleeves-blazer.png",
        colors: [
          "#814500",
          "#9f687f",
          "#387e7c",
          "#333541",
          "#9f687f",
          "#814500",
        ],
      },
    ],
  },
  {
    header: "SHORT SLEEVES BLAZER MEN",
    gender: "male",
    products: [
      {
        title: "Short Sleeves Blazer - Male",
        sub: "MoveTechⓇ Plus",
        price: "PHP 1,495",
        img: "short-sleeves-blazer-women/short-sleeves-blazer-men.png",
        colors: [
          "#814500",
          "#9f687f",
          "#387e7c",
          "#333541",
          "#9f687f",
          "#814500",
        ],
      },
    ],
  },
];

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
