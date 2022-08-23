import React from "react";
import ShopCard from "../components/ShopCard";

const data = [
  {
    header: "MoveTechⓇ Scrub Top Women",
    products: [
      {
        name: "4-Pocket Scrub Top - Women",
        sub: "MoveTechⓇ Plus",
        price: "PHP 1,495",
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
        name: "3-Pocket Scrub Top - Women",
        sub: "MoveTechⓇ Plus",
        price: "PHP 1,495",
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
        name: "Mandarin Scrub Top - Women",
        sub: "MoveTechⓇ Plus",
        price: "PHP 1,495",
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
    products: [
      {
        name: "4-Pocket Scrub Top - Male",
        sub: "MoveTechⓇ Plus",
        price: "PHP 1,495",
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
        name: "3-Pocket Scrub Top - Male",
        sub: "MoveTechⓇ Plus",
        price: "PHP 1,495",
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
        name: "Zip-Up Polo Scrub Top - Male",
        sub: "MoveTechⓇ Plus",
        price: "PHP 1,495",
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
    products: [
      {
        name: "Jogger Scrub Pants - Women",
        sub: "MoveTechⓇ Plus",
        price: "PHP 1,495",
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
        name: "Straight Cut Scrub Pants - Women",
        sub: "MoveTechⓇ Plus",
        price: "PHP 1,495",
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
        name: "Jogger Scrub Pants - Women",
        sub: "MoveTechⓇ Plus",
        price: "PHP 1,495",
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
    products: [
      {
        name: "Jogger Scrub Pants - Male",
        sub: "MoveTechⓇ Plus",
        price: "PHP 1,495",
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
        name: "Jogger Scrub Pants - Male",
        sub: "MoveTechⓇ Plus",
        price: "PHP 1,495",
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
        name: "Jogger Scrub Pants - Male",
        sub: "MoveTechⓇ Plus",
        price: "PHP 1,495",
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
    products: [
      {
        name: "Long Coat Pro+® - Women",
        sub: "MoveTechⓇ Plus",
        price: "PHP 1,495",
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
        name: "Long Coat Pro+® - Women",
        sub: "MoveTechⓇ Plus",
        price: "PHP 1,495",
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
    products: [
      {
        name: "Long Coat Pro+® - Male",
        sub: "MoveTechⓇ Plus",
        price: "PHP 1,495",
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
        name: "Long Coat Pro+® - Male",
        sub: "MoveTechⓇ Plus",
        price: "PHP 1,495",
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
    products: [
      {
        name: "Long Sleeves Blazer Pro+® - Women",
        sub: "MoveTechⓇ Plus",
        price: "PHP 1,495",
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
        name: "Long Sleeves Blazer  - Women",
        sub: "MoveTechⓇ Plus",
        price: "PHP 1,495",
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
    products: [
      {
        name: "Long Sleeves Blazer Pro+® - Male",
        sub: "MoveTechⓇ Plus",
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
        name: "Long Sleeves Blazer  - Male",
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
    products: [
      {
        name: "Short Sleeves Blazer - Women",
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
    products: [
      {
        name: "Short Sleeves Blazer - Male",
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

const Shop = () => {
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
        {data.map((section, i) => (
          <div key={i}>
            <div id="scrubtopHeader" className="c-shop__header">
              {section.header}
            </div>
            <div className="container-fluid c-shop__container">
              <div className="row c-shop__row--3" style={{ maxWidth: 1440 }}>
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
        ))}
      </div>
    </div>
  );
};

export default Shop;
