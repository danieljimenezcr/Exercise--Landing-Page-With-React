import React from "react";

const Jumbotron = () => {
  return (
    <div className=" container-fluid p-5  mb-4 bg-light rounded-3">
      <div className="container py-5 mt-5">
        <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
        <p className="col-md-8 fs-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
          pariatur amet animi quos in perferendis dolores non, natus eius
          delectus harum, obcaecati ducimus minima architecto ipsa impedit
          voluptatibus nesciunt cum.
        </p>
        <button className="btn btn-primary btn-lg" type="button">
          Call to action!
        </button>
      </div>
    </div>
  );
};
export default Jumbotron;
