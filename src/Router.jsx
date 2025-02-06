import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomeOne from "./components/HomeOne/index.jsx";
// import HomeOneBoxed from "./components/HomeOneBoxed/index.jsx";
import HomeTwo from "./components/HomeTwo/index.jsx";
// import HomeTwoBoxed from "./components/HomeTwoBoxed/index.jsx";
import HomeThree from "./components/HomeThree/index.jsx";
import AboutUs from "./components/AboutUs/index.jsx";
import Projects from "./components/ProjectsPages/index.jsx";
import Services from "./components/ServicesPages/index.jsx";
import News from "./components/NewsPages/index.jsx";
import NewsDetails from "./components/NewsPages/NewsDetails.jsx";
import TeamDetails from "./components/TeamPages/TeamDetails.jsx";
import Contact from "./components/ContactPages/Contact.jsx";
import Testimonial from "./components/TestimonialPages/Testimonial.jsx";
import ProjectsDetails from "./components/ProjectsPages/ProjectsDetails.jsx";
import ServiceDetails from "./components/ServicesPages/ServiceDetails.jsx";
import Pricing from "./components/PricingPages/Pricing.jsx";
import Team from "./components/TeamPages/index.jsx";
import Layout from "./components/Helper/Layout.jsx";
import Faq from "./components/FaqPages/Faq.jsx";
import Error from "./components/ErrorPages/Error.jsx";
import Products from "./components/ShopPages/Products.jsx";
import ProductsSidebar from "./components/ShopPages/ProductsSidebar.jsx";
import ProductsDetails from "./components/ShopPages/ProductsDetails.jsx";
import Cart from "./components/ShopPages/Cart.jsx"
import Checkout from "./components/ShopPages/Checkout.jsx";

const router = createBrowserRouter([
  {
    path:'/',
    Component:Layout,
    children:[
      // {
      //   index:true,
      //   path: "/home-one",
      //   element: <HomeOne />
      // },
     
      {
        index:true,
        element: <HomeTwo />
      },
      // {
      //   path: "/home-three",
      //   element: <HomeThree />
      // },
      {
        path: "/about",
        element: <AboutUs />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/products",
        element: <Products />
      },
      // {
      //   path: "/cart",
      //   element: <Cart />
      // },
      // {
      //   path: "/checkout",
      //   element: <Checkout />
      // },
      // {
      //   path: "/products-sidebar",
      //   element: <ProductsSidebar />
      // },
      {
        path: "/products-details",
        element: <ProductsDetails />
      },
      // {
      //   path: "/news",
      //   element: <News />
      // },
      // {
      //   path: "/news-details",
      //   element: <NewsDetails />
      // },
      {
        path: "/contact",
        element: <Contact />
      },
      // {
      //   path: "/team",
      //   element: <Team />
      // },
      // {
      //   path: "/team-details",
      //   element: <TeamDetails />
      // },
      // {
      //   path: "/testimonial",
      //   element: <Testimonial />
      // },
      // {
      //   path: "/project-details",
      //   element: <ProjectsDetails />
      // },
      // {
      //   path: "/Faq",
      //   element: <Faq />
      // },
      // {
      //   path: "/service-details",
      //   element: <ServiceDetails />
      // },
      // {
      //   path: "/pricing",
      //   element: <Pricing />
      // },
     
      {
        path: "*",
        element: <Error />
      },
    ]
  }
]);

function Router() {
  return (
      <>
        <RouterProvider router={router} />
      </>
  );
}

export default Router;
