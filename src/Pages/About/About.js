import React from 'react';
import parson from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row ">
          <div className='w-1/2 relative'>
          <img src={parson} alt='' className="w-4/5 h-full rounded-lg shadow-2xl" />
          <img src={parts} alt='' className="w-3/5 absolute left-52 border-8 top-1/2 rounded-lg shadow-2xl" />
          </div>
          <div className='w-1/2'>
            <h1 className="text-5xl font-bold ">
            We are qualified <br />
            & of experience <br />
            in this field
            </h1>
            <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. .</p>
            <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default About;