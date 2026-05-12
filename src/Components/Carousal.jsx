import React from 'react'

import Slider from 'react-slick';
import '../Styles/carousel.css'
import { Link } from 'react-router-dom';

function Carousal() {

    const data=[

{name:"1 Night 2 Days Kumbh Mela Package",
    description:"In this bundle of 1 nights and 2 days Kumbh Mela Tour Package in Prayagraj 2025, you'll embark on a journey towards Nirv.",
    img:"./images/3750.avif",
    style:"Arrival At Prayagraj",
    level:"Kumbh Mela Holy Dip & Departure",
    duration:"",
    butlink:"/Package1"
    },
{name:"2 Night 3 Days Kumbh Mela Package",
  img:"./images/Kumbh-Mela-Package-from-Delhi.jpg",
    description:"Come and savor every bit of spirituality at Kumbh Mela with our 2 nights 3 days Kumbh Mela Package. Plan your Kumbh Mela. ",
    style:"Arrival At Prayagraj",
    level:"Kumbh Mela Holy Dip & Departure",
    duration:"Drop At Prayagraj Railway Station/Airport",
    butlink:"/Package2"
},
{name:"3 Night 4 Days Kumbh Mela Package",
  description:"Our holy Kumbh Mela Tour Package for 3 nights and 4 days will lead you to a world that washes away all your sins.",
  img:"https://nextjs.thekumbhyatra.com/wp-content/uploads/2020/02/Kumbh-Mela-Tour.jpg",
  style:"Arrival At Prayagraj",
  level:"Kumbh Mela Holy Dip & Departure",
  duration:"",
  butlink:"/Package3"
  }
,{name:"Kumbh Mela Shahi Snan Package",
   img:"./images/istockphoto-1408894834-612x612.jpg",
    description:"Immerse yourself in our sacred Shahi Snan Package or Kumbh Mela package for 4 nights and 5 days, where you'll come and s",
    style:"Ashtanga, Vinyasa, Hatha, Yin",
    level:"Beginner to Intermediate",
    duration:"25 Days ",
    butlink:"/Package4"
}

    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,

        autoplay: true,
     
        autoplaySpeed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
<div className="boxx">
 <div className="heading"> <h1>Kumbh Mela Packages</h1>
 <img src="./images/lg.png" alt="" /></div>
    <div className="boxxx" >
        <Slider className='slid' {...settings}>
        {data.map((d)=>(
            <div className="cardcarusel">
              <div className="im">
                <img src={d.img} alt="" />
              </div>
<div className="name">
<h3>{d.name}</h3>
</div>
<div className="descr">
<p>{d.description}</p>
</div>


<div className="but">
<Link to={d.butlink}><button>View Details</button></Link>
<Link to='/Contact'><button>Book</button></Link>

</div>
            </div>
        ))}
        </Slider>
    </div>
</div>
  )
}

export default Carousal
