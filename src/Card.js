import React from "react";

const Card = (props) => {
  let { name, tagLine, description, imageUrl } = props;
  return (
    <div className="my-3">
      <div className="card" style={{ width: "300px" }}>
        <img
          src={imageUrl ? imageUrl : "https://images.punkapi.com/v2/keg.png"}
          className="card-img-top"
          height={"500px"}
          alt={name}
        />
        <div className="card-body">
          <h4 className="card-title">
            {name.length > 20 ? `${name.slice(0, 20)}...` : name}
          </h4>
          <h5 className="card-text">
            {tagLine.length > 27 ? `${tagLine.slice(0, 27)}...` : tagLine}
          </h5>
          <p className="card-text">
            {description.length > 100
              ? `${description.slice(0, 100)}...`
              : description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
