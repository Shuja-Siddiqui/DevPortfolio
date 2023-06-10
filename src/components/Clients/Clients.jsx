import React, { useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import ClientSlider from "./ClientSlider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from "react-awesome-reveal";

let clients = [
  {
    name: "John Michel",
    position: "web developer",
    img_url:
      "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
    stars: 3,
    disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
  },
  {
    name: "John Michel",
    position: "web developer",
    img_url:
      "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
    stars: 4,
    disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
  },
  {
    name: "John Michel",
    position: "web developer",
    img_url:
      "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
    stars: 5,
    disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
  },
  {
    name: "John Michel",
    position: "web developer",
    img_url:
      "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
    stars: 5,
    disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
  },
];
var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Clients = ({ data }) => {
  console.log("Testimonial data", data);
  const arrowRef = useRef(null);
  let clientDisc = "";
  clientDisc = data?.map((item, i) => <ClientSlider item={item} key={i} />);
  console.log("Client Description", clientDisc);
  return (
    <Container id="client">
      <Slide direction="left">
        <span className="green">testimonials</span>
        <h1>what clients say</h1>
      </Slide>
      <Testimonials>
        <Slider ref={arrowRef} {...settings}>
          {clientDisc}
        </Slider>
        <Buttons>
          <button onClick={() => arrowRef.current.slickPrev()}>
            <IoIosArrowBack />
          </button>
          <button onClick={() => arrowRef.current.slickNext()}>
            <IoIosArrowForward />
          </button>
        </Buttons>
      </Testimonials>
    </Container>
  );
};

export default Clients;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 0;

  @media (max-width: 840px) {
    width: 90%;
  }

  span {
    font-weight: 700;
    text-transform: uppercase;
  }

  h1 {
    padding-top: 1rem;
    text-transform: capitalize;
  }

  .slick-list,
  .slick-slider,
  .slick-track {
    padding: 0;
  }

  .slick-dots {
    text-align: left;
    margin-left: 1rem;
  }

  .slick-dots li button:before {
    content: "";
  }

  .slick-dots li button {
    width: 9px;
    height: 4px;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
    padding: 0.1rem;
    margin-top: 1rem;
    transition: all 400ms ease-in-out;
    border-radius: 50px;
  }

  .slick-dots li.slick-active button {
    background: #01be96;
    width: 15px;
  }

  .slick-dots li {
    margin: 0;
  }
`;

const Testimonials = styled.div`
  margin-top: 2rem;
  position: relative;
`;
const Buttons = styled.div`
  position: absolute;
  right: 0.7rem;
  bottom: -2rem;

  button {
    background-color: transparent;
    margin-left: 0.5rem;
    border: none;
    color: #01be96;
    cursor: pointer;
    font-size: 1.1rem;
  }

  @media (max-width: 530px) {
    display: none;
  }
`;

// import React from "react";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";

// const Clients = () => {
//   const options = {
//     items: 3,
//     // Add any other options you want to customize the carousel
//   };

//   return (
//     <OwlCarousel className="owl-theme" {...options}>
//       <div className="item">
//         <h4>1</h4>
//       </div>
//       <div className="item">
//         <h4>2</h4>
//       </div>
//       <div className="item">
//         <h4>3</h4>
//       </div>
//       <div className="item">
//         <h4>4</h4>
//       </div>
//       <div className="item">
//         <h4>5</h4>
//       </div>
//       <div className="item">
//         <h4>6</h4>
//       </div>
//     </OwlCarousel>
//   );
// };

// export default Clients;
