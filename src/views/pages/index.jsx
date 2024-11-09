import React from 'react';
import Slider from '../../components/pageComponent/Slider/Slider';
import FeaturedProducts from '../../components/pageComponent/FeaturedProducts/FeaturedProducts';
import Categories from '../../components/pageComponent/Categories/Categories';
import Contact from '../../components/pageComponent/Contact/Contact';

const Home = () => {
    return (
        <div className='home'>
           <Slider />
           <FeaturedProducts type="featured" />
            <Categories />
           <FeaturedProducts type="trending" />
           <Contact />
        </div>
    );
};

export default Home;