import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BackToTop from '../BackToTop.jsx';
import HomeThreeHeader from '../HomeThree/HomeThreeHeader.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import PageTitle from '../PageTitle.jsx';

function ServiceDetails() {
    const [showQues, setQues] = useState(1);
    const openQuestion = (value) => {
        setQues(value);
    };

    return (
        <>
            <HomeThreeHeader />
            <PageTitle
                title="Services Details"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/service-details', title: 'Services Details' },
                ]}
            />
            <section className="services-details">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4">
                            <div className="service-sidebar">
                                <div className="sidebar-widget service-sidebar-single">
                                    <div className="sidebar-service-list">
                                        <ul>
                                            <li><Link to="/service-details" className="current"><i className="fas fa-angle-right"></i><span>Air Freight</span></Link></li>
                                            <li className="current"><Link to="/service-details"><i className="fas fa-angle-right"></i><span>Sea freight</span></Link></li>
                                            <li><Link to="/service-details"><i className="fas fa-angle-right"></i><span>Road service</span></Link></li>
                                            <li><Link to="/service-details"><i className="fas fa-angle-right"></i><span>Other solution</span></Link></li>
                                            <li><Link to="/service-details"><i className="fas fa-angle-right"></i><span>Train Freight</span></Link></li>
                                            <li><Link to="/service-details"><i className="fas fa-angle-right"></i><span>Land Transport</span></Link></li>
                                        </ul>
                                    </div>

                                    <div className="service-details-help">
                                        <div className="help-shape-1"></div>
                                        <div className="help-shape-2"></div>
                                        <h2 className="help-title">Contact with <br /> us for any <br /> advice</h2>
                                        <div className="help-icon">
                                            <span className="lnr-icon-phone-handset"></span>
                                        </div>
                                        <div className="help-contact">
                                            <p>Need help? Talk to an expert</p>
                                            <Link to="tel:12463330079">+892 ( 123 ) 112 - 9999</Link>
                                        </div>
                                    </div>

                                    <div className="sidebar-widget service-sidebar-single mt-4">
                                        <div className="service-sidebar-single-btn wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1200m">
                                            <Link to="#" className="theme-btn btn-style-one d-grid"><span className="btn-title"><span className="fas fa-file-pdf"></span> download pdf file</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-8 col-lg-8">
                            <div className="services-details__content">
                                <img src="../../assets/images/resource/service-details.jpg" alt="Service Details" />
                                <h3 className="mt-4">Service Overview</h3>
                                <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
                                <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <div className="content mt-40">
                                    <div className="text">
                                        <h3>Service Center</h3>
                                        <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                        <blockquote className="blockquote-one">Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod remaining essentially unchanged Lorem ipsum dolor sit amet consectetur.</blockquote>
                                    </div>
                                    <div className="feature-list mt-4">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <img className="mb-3" src="../../assets/images/resource/service-d1.jpg" alt="Service D1" />
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellat pariatur temporibus doloribus hic consequuntur copy typing refreshing.</p>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <img className="mb-3" src="../../assets/images/resource/service-d2.jpg" alt="Service D2" />
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellat pariatur temporibus doloribus hic consequuntur copy typing refreshing.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-25">
                                    <h3>Frequently Asked Question</h3>
                                    <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                    <ul className="accordion-box wow fadeInRight">
                                        <li onClick={() => openQuestion(1)} className={`accordion block ${showQues === 1 ? 'active-block' : ''}`}>
                                            <div className={`acc-btn ${showQues === 1 ? 'active' : ''}`}>
                                                Where do I usually find FAQs in a page?
                                                <div className="icon fa fa-angle-down"></div>
                                            </div>
                                            <div className={`acc-content ${showQues === 1 ? 'current' : ''}`}>
                                                <div className="content">
                                                    <div className="text">Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vit commodo nisl Sed luctus venenatis pellentesque.</div>
                                                </div>
                                            </div>
                                        </li>
                                        <li onClick={() => openQuestion(2)} className={`accordion block ${showQues === 2 ? 'active-block' : ''}`}>
                                            <div className={`acc-btn ${showQues === 2 ? 'active' : ''}`}>
                                                How to turn visitors into contributors?
                                                <div className="icon fa fa-angle-down"></div>
                                            </div>
                                            <div className={`acc-content ${showQues === 2 ? 'current' : ''}`}>
                                                <div className="content">
                                                    <div className="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
                                                </div>
                                            </div>
                                        </li>
                                        <li onClick={() => openQuestion(3)} className={`accordion block ${showQues === 3 ? 'active-block' : ''}`}>
                                            <div className={`acc-btn ${showQues === 3 ? 'active' : ''}`}>
                                                How can I find my solutions?
                                                <div className="icon fa fa-angle-down"></div>
                                            </div>
                                            <div className={`acc-content ${showQues === 3 ? 'current' : ''}`}>
                                                <div className="content">
                                                    <div className="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
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

export default ServiceDetails;
