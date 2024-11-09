import React, { useState } from 'react';
import List from '../../../components/pageComponent/List/List';
import { useParams } from 'react-router-dom';

const Products = () => {
   let catId = parseInt(useParams().id);
   const [maxPrice, setMaxPrice] = useState(1000);
   const [sort, setSort] = useState(null);
   const [selectedCategories, setSelectedCategories] = useState([]);

   const handleCategoryChange = (categoryId) => {
     setSelectedCategories(prevState => 
       prevState.includes(categoryId)
         ? prevState.filter(id => id !== categoryId)
         : [...prevState, categoryId]
     );
   };

   return (
        <div className='products'>
            <div className='left'>
                <div className='filterItem'>
                    <h2>Product Categories</h2>
                    {['1', '2', '3'].map(categoryId => (
                        <div className='inputItem' key={categoryId}>
                            <input 
                                type='checkbox' 
                                id={categoryId} 
                                value={categoryId}
                                checked={selectedCategories.includes(categoryId)}
                                onChange={() => handleCategoryChange(categoryId)} 
                            />
                            <label htmlFor={categoryId}>Category {categoryId}</label>
                        </div>
                    ))}
                </div>
                <div className='filterItem'>
                    <h2>Filter By Price</h2>
                    <div className='inputItem'>
                        <span>0</span>
                        <input 
                            type='range' 
                            min={0} 
                            max={1000} 
                            value={maxPrice} 
                            onChange={(e) => setMaxPrice(Number(e.target.value))}
                        />
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div className='filterItem'>
                    <h2>Sort By</h2>
                    <div className='inputItem'>
                        <input 
                            type='radio' 
                            id='asc' 
                            value="asc" 
                            name='price' 
                            checked={sort === "asc"} 
                            onChange={() => setSort("asc")} 
                        />
                        <label htmlFor='asc'>Price (Lowest first)</label>
                    </div>
                    <div className='inputItem'>
                        <input 
                            type='radio' 
                            id='desc' 
                            value="desc" 
                            name='price' 
                            checked={sort === "desc"} 
                            onChange={() => setSort("desc")} 
                        />
                        <label htmlFor='desc'>Price (Highest first)</label>
                    </div>
                </div>
            </div>
            <div className='right'>
                <img
                    className="catImg"
                    src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="Category Preview"
                />
                <List 
                    catId={catId} 
                    maxPrice={maxPrice} 
                    sort={sort} 
                    categories={selectedCategories}
                />
            </div>
        </div>
    );
};

export default Products;
