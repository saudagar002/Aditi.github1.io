import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Style/Home.css'

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
      <div>
  <img src="/photo-1612349317150-e413f6a5b16d.avif" alt="Slide 1 "/>
</div>

<div>
  <img src="/young-woman-medic-clinic_23-2147763791.avif" alt="Slide 2" />
</div>

       
        {/* Add more slides as needed */}
      </Slider>

      <div className="home-container">
        <h2>Welcome to Aditya Maternity and Eye Hospital</h2>
        <p>
          Providing quality healthcare services to our community. Your health is our priority.
        </p>
      </div>

    
    </div>
  );
};

export default Home;
