import React from 'react';

const Banner = ({slide}) => {
 const {image ,pre ,id ,next} = slide;
    return (
              <div id={`slide${id}`} className="carousel-item  relative w-full">
               <div className='imageGradint'>
               <img src={image} alt='' className="w-full h-full" />
               </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5  bottom-0">
                    <a href={`#slide${pre}`} className="btn btn-circle mr-5">❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                </div>
                <div className="absolute ml-5 flex justify-start transform -translate-y-1/2 left-5 right-5 top-1/4">
                    <h1 className='text-6xl text-white font-bold'>
                        Affordable <br />
                        Price For Car <br />
                        Servicing
                    </h1>
                </div>
                <div className="absolute w-96 ml-5 flex justify-start transform -translate-y-1/2 left-5 right-5 top-2/4">
                    <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                </div>
                <div className="absolute w-96 ml-5 flex justify-start transform -translate-y-1/2 left-5 right-5 top-3/4">
                <button className="btn btn-warning mr-5 rounded-lg	">Warning</button>
                <button className="btn btn-outline btn-warning rounded-lg	">Warning</button>

                </div>
            </div>
       
    );
};

export default Banner;