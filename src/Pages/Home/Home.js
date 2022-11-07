import React from 'react';
import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'
import img5 from '../../assets/images/banner/5.jpg'
import img6 from '../../assets/images/banner/6.jpg'
import About from '../About/About';
import Banner from './Banner';
import './Home.css'
import Services from './Services/Services';

const Home = () => {
    const bannerData = [
        {   
            image : img1,
            pre : 6,
            id : 1,
            next : 2
        },
        {
            image : img2,
            pre : 1,
            id : 2,
            next : 3
        },
        {
            image : img3,
            pre : 2,
            id : 3,
            next : 4
        },
        {
            image : img4,
            pre : 3,
            id : 4,
            next : 5
        },
        {
            image : img5,
            pre : 4,
            id : 5,
            next : 6
        },
        {
            image : img6,
            pre : 5,
            id : 6,
            next : 1
        },
       ]
    return (
        <div>
<div className="carousel w-full ">
          {
            bannerData.map(slide => <Banner
            key={slide.id}
            slide={slide}
            ></Banner>)
          }
        
        </div>
        <About></About>
        <Services></Services>
        </div>
    );
};

export default Home;