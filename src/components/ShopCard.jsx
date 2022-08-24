import React from "react";
import { Link } from "react-router-dom";

const ShopCard = ({ id, name, img, colors, price, sub, size, inStock }) => {
  let dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "PHP",
  });
  return (
    <div className="col-md-4 c-shop__block__col">
      <Link to={`/product/${id}`}>
        <img className="c-shop__3-block__img" src={img} alt={name} />
        <div className="c-shop__item__name">{name}</div>
        <div className="c-shop__item__sub">{sub}</div>
        <div className="c-shop__item__price">{dollarUS.format(price)}</div>
      </Link>
      <div className="d-flex flex-wrap justify-content-center align-items-center mt-1">
        {colors.map((color, i) => (
          <div key={i}>
            <a
              href="#"
              //   onclick=""
            ></a>

            <Link to={`/product/${id}`}>
              <div
                className="c-shop__color c-shop__color--selected my-1"
                style={{ background: color }}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopCard;
