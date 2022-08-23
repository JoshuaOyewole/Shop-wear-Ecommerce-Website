import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialItem from "./TestimonialItem";

const Testimonial = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="container ">
      <div class="mx-auto w-75 c-line-divider"></div>
      <h1 class="c-home-title mb-5">CUSTOMER REVIEWS</h1>

      <Carousel
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        transitionDuration={500}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div>
          <TestimonialItem />
        </div>
        <div>
          <TestimonialItem />
        </div>
        <div>
          <TestimonialItem />
        </div>
        <div>
          <TestimonialItem />
        </div>
        <div>
          <TestimonialItem />
        </div>
        <div>
          <TestimonialItem />
        </div>
        <div>
          <TestimonialItem />
        </div>
        <div>
          <TestimonialItem />
        </div>
        <div>
          <TestimonialItem />
        </div>
        <div>
          <TestimonialItem />
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonial;
