import { Link } from "react-router-dom";
import ProductImage1 from "/public/assets/products/1.jpg";
import ProductImage2 from "/public/assets/products/2.webp";
import ProductImage3 from "/public/assets/products/3.webp";
import ProductImage4 from "/public/assets/products/4.webp";
import ProductImage5 from "/public/assets/products/5.webp";
import ProductImage6 from "/public/assets/products/2.webp";
import ProductImage7 from "/public/assets/products/3.webp";
import ProductImage8 from "/public/assets/products/4.webp";

const products = [
  {
    id: 1,
    image: ProductImage1,
    name: "TOPCON N-Type Framed Dual Glass Bifacial Non-DCR Solar",
    price: "$32.00",
  },
  {
    id: 2,
    image: ProductImage2,
    name: "Dual Glass Mono PERC Bifacial Solar Module",
    price: "$50.00",
  },
  {
    id: 3,
    image: ProductImage3,
    name: "All Black 405Wp 132 Cells 24 Volts Mono PERC Solar Panel",
    price: "$120.00",
  },
  {
    id: 4,
    image: ProductImage4,
    name: "450Wp 144Cells 24 Volts Mono PERC Solar Module",
    price: "$45.00",
  },
  {
    id: 5,
    image: ProductImage4,
    name: "450Wp 144Cells 24 Volts Mono PERC Solar Module",
    price: "$45.00",
  },
  {
    id: 6,
    image: ProductImage1,
    name: "450Wp 144Cells 24 Volts Mono PERC Solar Module",
    price: "$45.00",
  },
  {
    id: 7,
    image: ProductImage2,
    name: "450Wp 144Cells 24 Volts Mono PERC Solar Module",
    price: "$45.00",
  },
  {
    id: 8,
    image: ProductImage3,
    name: "450Wp 144Cells 24 Volts Mono PERC Solar Module",
    price: "$45.00",
  },
  {
    id: 9,
    image: ProductImage3,
    name: "450Wp 144Cells 24 Volts Mono PERC Solar Module",
    price: "$45.00",
  },
];
export default function PortfolioFilter1({ filters }) {
  const filteredProducts = products.filter((product) => {
    let priceMatch = true;
    let categoryMatch = true;

    if (filters.price) {
      const [min, max] = filters.price.split("-").map(Number);
      const productPrice = Number(product.price.replace("$", ""));
      priceMatch = productPrice >= min && productPrice <= max;
    }

    if (filters.category) {
      categoryMatch = product.name.toLowerCase().includes(filters.category);
    }

    return priceMatch && categoryMatch;
  });

  return (
    <div className="items-container row">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="product-block col-lg-4 col-md-6 col-sm-12 mb-50"
        >
          <div className="inner-box">
            <div className="image-box1">
              <div className="image">
                <Link to="/products-details">
                  <img src={product.image} alt={product.name} />
                </Link>
              </div>
              <div className="icon-box">
                <Link to="/products-details" className="ui-btn">
                  <i className="fa fa-heart"></i>
                </Link>
              </div>
            </div>
            <div className="content">
              <h4 className="text-black">
                {product.name.length > 30
                  ? product.name.substring(0, 30) + "..."
                  : product.name}
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
      ))}
    </div>
  );
}

