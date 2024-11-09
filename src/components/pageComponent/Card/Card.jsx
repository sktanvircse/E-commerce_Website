import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
    return (
        <Link className='link' to={`/items/${item.id}`}>
            <div className='card'>
                <div className='image'>
                    {item.isNew && <span className="new-badge">New Season</span>}
                    <img src={item.img} alt='' className='mainImg'/>
                    <img src={item.img2} alt='' className='secondImg'/>
                </div>
                <h2 className='title'>{item.title}</h2>
                <div className='prices'>
                    {item.oldPrice && <h3 className='old-price'>${item.oldPrice}</h3>}
                    <h3 className='current-price'>${item.price}</h3>
                </div>
            </div>
        </Link>
    );
};

export default Card;
