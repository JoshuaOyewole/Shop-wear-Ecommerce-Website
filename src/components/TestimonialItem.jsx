import React from 'react';

const TestimonialItem = () => {
  return (
  
      <div className="row h-100">
        <div className="col p-2 h-100">
          <div className="d-flex justify-content-center mb-4">
            <img
              className="c-home-reviews__star"
              src="images/star.png"
              alt="star"
            />
            <img
              className="c-home-reviews__star"
              src="images/star.png"
              alt="star"
            />
            <img
              className="c-home-reviews__star"
              src="images/star.png"
              alt="star"
            />
            <img
              className="c-home-reviews__star"
              src="images/star.png"
              alt="star"
            />
            <img
              className="c-home-reviews__star"
              src="images/star.png"
              alt="star"
            />
          </div>{" "}
          <div className="c-home-reviews__review mx-auto mb-4">
            Love the feel! Super lightweight and comfy. Great for our
            weather.
          </div>
          <div className="c-home-reviews__by">- Mandy S. M.D.</div>
        </div>
      
  </div>
  )
}

export default TestimonialItem