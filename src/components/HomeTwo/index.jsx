import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import ZeroHomeTwo from './ZeroHomeTwo.jsx';
import HomeTwoHeader from './HomeTwoHeader.jsx';
import FeaturesHomeTwo from './FeaturesHomeTwo.jsx';
import AboutHomeTwo from './AboutHomeTwo.jsx';
import ServiceHomeTwo from './ServiceHomeTwo.jsx';
import WhyChooseUsHomeTwo from './WhyChooseUsHomeTwo.jsx';
import Features2HomeTwo from './Features2HomeTwo.jsx';
import FunfactHomeTwo from './FunfactHomeTwo.jsx';
import TestimonialHomeTwo from './TestimonialHomeTwo.jsx';
import PricingHomeTwo from './PricingHomeTwo.jsx';
import ContactHomeTwo from './ContactHomeTwo.jsx';
import TeamHomeTwo from './TeamHomeTwo.jsx';
import FaqHomeTwo from './FaqHomeTwo.jsx';
import ClientsHomeOne from '../HomeOne/ClientsHomeOne.jsx';
import BlogHomeOne from '../HomeOne/BlogHomeOne.jsx';
import ExclusiveProduct from './ExclusiveProduct/ExclusiveProduct.jsx';
import Category from './CategorySection/Category.jsx';
import ContactHomeOne from './ContactHomeOne.jsx';

function HomeTwo() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>            
            <HomeTwoHeader action={drawerAction.toggle} />
            <ZeroHomeTwo />
            <FeaturesHomeTwo />
            <ExclusiveProduct/>
            <Category/>
         
            <Features2HomeTwo />
          <ContactHomeOne/>
            <FooterHomeOne /> 
            <BackToTop />
        </>
    );
}

export default HomeTwo;
