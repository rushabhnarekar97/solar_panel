import React, { useState } from "react";
// import { FaSearch, FaFilter, FaTimesCircle } from "react-icons/fa";
import "./filter.css";

export default function ProductFilter({ onFilterChange }) {
  const [selectedPrice, setSelectedPrice] = useState({ min: 0, max: 1000 });
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSize, setSelectedSize] = useState([]);
  const [selectedCondition, setSelectedCondition] = useState("Any condition");

  const categories = [
    "Solar Panels",
    "Solar Kits",
    "Inverters",
    "Batteries",
    "Pallets",
    "All Products",
  ];
  const brands = [
    { name: "HT Solar", count: 120 },
    { name: "SunPower", count: 15 },
    { name: "Solaria", count: 35 },
    { name: "ReneSola", count: 89 },
  ];
  const sizes = ["XS", "SM", "LG", "XXL"];
  const conditions = ["Any condition", "Brand new", "Used items", "Very old"];

  const handleFilterChange = () => {
    onFilterChange({
      price: selectedPrice,
      category: selectedCategory,
      brands: selectedBrands,
      size: selectedSize,
      condition: selectedCondition,
    });
  };

  const clearFilters = () => {
    setSelectedPrice({ min: 0, max: 1000 });
    setSelectedCategory("");
    setSelectedBrands([]);
    setSelectedSize([]);
    setSelectedCondition("Any condition");
  };

  return (
    <aside className="col-md-3">
      <div className="card  border-medium">
        <article className="filter-group">
          <header className="card-header">
            <h6 className="title  text-center text-uppercase font-weight-bold mb-0 py-2">
              Categories
            </h6>
          </header>
          <div className="filter-content show" id="collapse_1">
            <div className="card-body">
              <div class="icon-input position-relative w-100">
                <input
                  class="customSearch border w-100 rounded-3 py-1"
                  placeholder="Search"
                  type="text"
                />
                <i class="icon lnr lnr-icon-search position-absolute end-0 mt-2 pt-1 mr-10"></i>
              </div>
              {categories.map((category) => (
                <div key={category} className="basic-chip background-blue">
                  {category}
                  <a href="">
                    <i className="ps-1 text-white fas fa-times-circle"></i>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* Brands Section */}
        <article className="filter-group">
          <header className="card-header">
            <h6 className="title text-uppercase d-block text-center font-weight-bold mb-0 py-1">
              Products{" "}
              <span className="badge badge-secondary text-black mx-0 px-0">
                ({selectedBrands.length})
              </span>
            </h6>
          </header>
          <div className="filter-content show" id="collapse_2">
            <div className="card-body">
              {brands.map((brand) => (
                <div key={brand.name} className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={selectedBrands.includes(brand.name)}
                    onChange={(e) => {
                      const updatedBrands = e.target.checked
                        ? [...selectedBrands, brand.name]
                        : selectedBrands.filter((b) => b !== brand.name);
                      setSelectedBrands(updatedBrands);
                    }}
                  />
                  <label className="form-check-label">
                    {brand.name} ({brand.count})
                  </label>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* Price Range Section */}
        <article className="filter-group">
          <header className="card-header">
            <h6 className="title mb-0 d-block text-center py-1 text-uppercase font-weight-bold">
              Price Range
            </h6>
          </header>
          <div className="filter-content show" id="collapse_3">
            <div className="card-body">
              <input
                type="range"
                className="custom-range mb-3 w-100"
                min="0"
                max="1000"
                value={selectedPrice.max}
                onChange={(e) =>
                  setSelectedPrice({ ...selectedPrice, max: e.target.value })
                }
              />
              <div className="form-row">
                <input
                  className="w-100 border rounded-3 col-md-6 ps-2"
                  placeholder="$0"
                  type="number"
                  value={selectedPrice.min}
                  onChange={(e) =>
                    setSelectedPrice({ ...selectedPrice, min: e.target.value })
                  }
                />
                <input
                  className="w-100 border my-3 rounded-3 col-md-6 ps-2"
                  placeholder="$1000"
                  type="number"
                  value={selectedPrice.max}
                  onChange={(e) =>
                    setSelectedPrice({ ...selectedPrice, max: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        </article>

      
      </div>
    </aside>
  );
}
