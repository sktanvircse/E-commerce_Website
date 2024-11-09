import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ imgSrc, linkTo, label }) => (
  <div className="row">
    <img src={imgSrc} alt={label} />
    <button style={{ width: "200px" }}>
      <Link className="link" to={linkTo}>
        {label}
      </Link>
    </button>
  </div>
);

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <CategoryItem
          imgSrc="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
          linkTo="/products/1"
          label="Sale"
        />
        <CategoryItem
          imgSrc="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
          linkTo="/products/1"
          label="Women"
        />
      </div>
      <div className="col">
        <CategoryItem
          imgSrc="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
          linkTo="/products/1"
          label="New Season"
        />

        <CategoryItem
          imgSrc="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600&h=350"
          linkTo="/products/1"
          label="Child"
        />



      </div>
      <div className="col ">
        <div className="row">
          <div className="col">
            <CategoryItem
              imgSrc="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
              linkTo="/products/1"
              label="Men"
            />
          </div>
          <div className="col">
            <CategoryItem
              imgSrc="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
              linkTo="/products/1"
              label="Accessories"
            />
          </div>
        </div>
        <CategoryItem
          imgSrc="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
          linkTo="/products/1"
          label="Shoes"
        />
      </div>
    </div>
  );
};

export default Categories;
