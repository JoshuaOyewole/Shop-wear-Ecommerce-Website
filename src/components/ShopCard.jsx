import React from "react";

const ShopCard = ({ name, img, colors, price, sub }) => {
  return (
    <div className="col-md-4 c-shop__block__col">
      <a href="#">
        <img
          className="c-shop__3-block__img"
          src={`/images/${img}`}
          alt={name}
        />
        <div className="c-shop__item__name">{name}</div>
        <div className="c-shop__item__sub">{sub}</div>
        <div className="c-shop__item__price">{price}</div>
      </a>
      <div className="d-flex flex-wrap justify-content-center align-items-center mt-1">
        {colors.map((color, i) => (
          <div>
            <a
              href="#"
              //   onclick=""
            ></a>

            <a href="#">
              <div
                className="c-shop__color c-shop__color--selected my-1"
                style={{ background: color }}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopCard;
