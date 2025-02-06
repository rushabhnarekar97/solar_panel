import React from 'react';
import Products from './Products';

function ExclusiveProduct({ className }) {
    return (
        <>
            <section className={`features-section-four pt-0 ${className || ''}`}>
                <div className="icon-solar-2"></div>
                <div className="auto-container">
                    <div className="sec-title text-center">
                    <div className="sub-title-outer">
                        <span className="sub-title">Products</span>
                        <span className="divider"></span>
                    </div>
                    <h2 className="letters-slide-up text-split">Exclusive Solar Products</h2>
                    </div>
                    <div className="outer-box">
                        <div className="row">
                            <Products/>
                            </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ExclusiveProduct;
