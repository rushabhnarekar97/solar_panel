import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Cat.css";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  pagination: { clickable: true },
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    320: { slidesPerView: 1 },
    575: { slidesPerView: 1 },
    767: { slidesPerView: 2 },
    991: { slidesPerView: 4 },
    1199: { slidesPerView: 4 },
    1350: { slidesPerView: 4 },
  },
};

// Sample project data
const projects = [
  {
    id: 1,
    title: "Sale",
    company: "3 Products",
    image: "/assets/products/sale.jpg",
  },
  {
    id: 2,
    title: "Clearance",
    company: "11 Products",
    image: "/assets/products/cat1.avif",
  },
  {
    id: 3,
    title: "Pallets",
    company: "12 Products",
    image: "/assets/products/cat2.avif",
  },
  {
    id: 4,
    title: "Solar Panels",
    company: "32 Products",
    image: "/assets/products/cat3.avif",
  },
  {
    id: 5,
    title: "Racking & Mounting",
    company: "55 Products",
    image: "/assets/products/cat5.avif",
  },
  {
    id: 6,
    title: "Solar Kits",
    company: "11 Products",
    image: "/assets/products/cat4.jpg",
  },
  {
    id: 7,
    title: "Charge Controllers",
    company: "44 Products",
    image: "/assets/products/cat6.avif",
  },
  {
    id: 8,
    title: "Inverters",
    company: "21 Products",
    image: "/assets/products/cat7.avif",
  },
  {
    id: 9,
    title: "Batteries",
    company: "24 Products",
    image: "/assets/products/cat8.avif",
  },
];

function Category() {
  return (
    <section className="project-section-four py-5 mb-0">
      <div className="auto-container">
        <div className="sec-title text-center">
          <div className="sub-title-outer">
            <span className="sub-title">Categories</span>
            <span className="divider"></span>
          </div>
          <h2 className="letters-slide-up text-split">Shop By Categories</h2>
        </div>
      </div>
      <div className="bg bg-pattern-2"></div>
      <div className="large-container">
        <Swiper {...swiperOptions} className="projects-carousel">
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="project-block-two">
              <div className="inner-box">
                <figure className="image category-slider">
                  <Link to="/products">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="category-img"
                    />
                  </Link>
                </figure>

                <div className="content-box">
                  <div className="inner">
                    <h4 className="title">
                      <Link to="/products">{project.title}</Link>
                    </h4>
                    <span className="cat">{project.company}</span>

                    <Link to="/products" className="theme-btn read-more">
                      <i className="fa fa-plus"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Category;
