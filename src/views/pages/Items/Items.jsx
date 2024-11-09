import React, { useState } from 'react';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Items = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  const images = [
    "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600"
  ];

  const handleQuantityChange = (type) => {
    setQuantity(prev => {
      if (type === 'decrease' && prev > 1) return prev - 1;
      if (type === 'increase') return prev + 1;
      return prev;
    });
  };

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img 
            src={images[0]} 
            alt="Thumbnail 1" 
            className={selectedImg === 0 ? 'active' : ''}
            onClick={() => setSelectedImg(0)} 
          />
          <img 
            src={images[1]} 
            alt="Thumbnail 2" 
            className={selectedImg === 1 ? 'active' : ''}
            onClick={() => setSelectedImg(1)} 
          />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="Main product" />
        </div>
      </div>

      <div className="right">
        <h1>Title</h1>
        <span className="price">$199</span>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a.
        </p>

        <div className="quantity">
          <button className="quantity-btn" onClick={() => handleQuantityChange('decrease')}>-</button>
          <span>{quantity}</span>
          <button className="quantity-btn" onClick={() => handleQuantityChange('increase')}>+</button>
        </div>

        <button className="add-to-cart">
          <AddShoppingCartIcon /> ADD TO CART
        </button>

        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>

        <div className="info">
          <span>Vendor: Easy</span>
          <span>Product Type: T-shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>

        <hr />

        <div className="tabs">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Items;
