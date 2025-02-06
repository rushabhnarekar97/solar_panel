import React from "react";
import "./product.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductImage1 from "/public/assets/products/1.jpg";
import ProductImage2 from "/public/assets/products/2.webp";
import ProductImage3 from "/public/assets/products/3.webp";
import ProductImage4 from "/public/assets/products/4.webp";

const products = [
  { id: 1, image: ProductImage1, name: "TOPCON N-Type Framed Dual Glass Bifacial Non-DCR Solar", price: "$32.00" },
  { id: 2, image: ProductImage2, name: "Dual Glass Mono PERC Bifacial Solar Module", price: "$50.00" },
  { id: 3, image: ProductImage3, name: "All Black 405Wp 132 Cells 24 Volts Mono PERC Solar Panel", price: "$120.00" },
  { id: 4, image: ProductImage4, name: "450Wp 144Cells 24 Volts Mono PERC Solar Module", price: "$45.00" },
  { id: 5, image: ProductImage4, name: "450Wp 144Cells 24 Volts Mono PERC Solar Module", price: "$45.00" },
  { id: 6, image: ProductImage4, name: "450Wp 144Cells 24 Volts Mono PERC Solar Module", price: "$45.00" },
];

export default function Products() {
  return (
    <div className="product-slider-container">
      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev custom-prev"></div>
      <div className="swiper-button-next custom-next"></div>

      <Swiper 
        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }} 
        modules={[Navigation]} 
        spaceBetween={20} 
        slidesPerView={4} 
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="product-block">
              <div className="inner-box">
                <div className="image-box1">
                  {/* Floating Sale Badge */}
                  <div className="sale-badge">Sale</div>
                  <div className="image">
                    <Link to="/products-details">
                      <img src={product.image} alt={product.name} />
                    </Link>
                  </div>
                  <div className="icon-box">
                    <Link to="/products-details" className="ui-btn">
                      <i className="fa fa-heart"></i>
                    </Link>
                    {/* <Link to="/cart" className="ui-btn">
                      <i className="fa fa-shopping-cart"></i>
                    </Link> */}
                  </div>
                </div>
                <div className="content text-black">
                  <h4 className='text-black'>
                    {product.name.length > 30 ? product.name.substring(0, 30) + "..." : product.name}
                  </h4>
                  <span className="price">{product.price}</span>
                  <span className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

