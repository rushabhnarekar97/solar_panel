import React, { useState } from "react";
import BackToTop from "../BackToTop.jsx";
import HomeThreeHeader from "../HomeThree/HomeThreeHeader.jsx";
import FooterHomeOne from "../HomeOne/FooterHomeOne.jsx";
import PageTitle from "../PageTitle.jsx";
import PortfolioFilter1 from "./PortfolioFilter1.jsx";
import ProductFilter from "./ProductFilter.jsx";

function Products() {
  const [filters, setFilters] = useState({});

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <>
      <HomeThreeHeader />
      <PageTitle
        title="Products"
        breadcrumb={[
          { link: "/", title: "Home" },
          { link: "/products", title: "Products" },
        ]}
      />

      <section className="featured-products">
        <span className="bg-shape"></span>
        <div className="auto-container">
          <div className="row">
            {/* Left Sidebar - Filters */}
            <ProductFilter onFilterChange={handleFilterChange} />

            {/* Product Listing */}
            <div className="col-lg-9 col-md-8 col-sm-12">
              <div className="mixitup-gallery">
                <PortfolioFilter1 filters={filters} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterHomeOne />
      <BackToTop />
    </>
  );
}

export default Products;
