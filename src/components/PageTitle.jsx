import React from 'react';
import { Link } from 'react-router-dom';

function HeroPageTitle({ title, breadcrumb = [] }) {
    return (
        <>
            <section className="page-title" style={{ backgroundImage: 'url(../../assets/images/background/page-title-bg.png)' }}>
                <div className="auto-container">
                    <div className="title-outer text-center">
                        <h1 className="title">{title}</h1>
                        <ul className="page-breadcrumb">
                            {breadcrumb.map((value, index) => (
                                <li key={index} className="breadcrumb-item">
                                    <Link to={value.link}>{value.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroPageTitle;
