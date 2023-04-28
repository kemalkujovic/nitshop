import React from "react";
import "./App.css";
import Navigation from "./Templates/Navigation/Navigation";
import Slider from "./Templates/Slider/Slider";
import SimplifiedDiv from "./components/SimplifiedDiv/SimplifiedDiv";
import ProductsHomePage from "./Templates/ProductsHomePage/ProductsHomePage";
import "./assets/fonts/Lato-Black.ttf";
import "./assets/fonts/Lato-BlackItalic.ttf";
import "./assets/fonts/Lato-Bold.ttf";
import "./assets/fonts/Lato-BoldItalic.ttf";
import "./assets/fonts/Lato-Italic.ttf";
import "./assets/fonts/Lato-Light.ttf";
import "./assets/fonts/Lato-LightItalic.ttf";
import "./assets/fonts/Lato-Regular.ttf";
import "./assets/fonts/Lato-Thin.ttf";
import "./assets/fonts/Lato-ThinItalic.ttf";
import "./assets/fonts/Montserrat-Black.ttf";
import "./assets/fonts/Montserrat-BlackItalic.ttf";
import "./assets/fonts/Montserrat-Bold.ttf";
import "./assets/fonts/Montserrat-BoldItalic.ttf";
import "./assets/fonts/Montserrat-ExtraBold.ttf";
import "./assets/fonts/Montserrat-ExtraBoldItalic.ttf";
import "./assets/fonts/Montserrat-ExtraLight.ttf";
import "./assets/fonts/Montserrat-ExtraLightItalic.ttf";
import "./assets/fonts/Montserrat-Italic-VariableFont_wght.ttf";
import "./assets/fonts/Montserrat-Italic.ttf";
import "./assets/fonts/Montserrat-Light.ttf";
import "./assets/fonts/Montserrat-Regular.ttf";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePageScreen from "./Screens/HomePageScreen/HomePageScreen";
import ShopScreen from "./Screens/ShopScreen/ShopScreen";
import BlogScreenf from "./Screens/BlogScreen/BlogScreen";
import BlogScreen from "./Screens/BlogScreen/BlogScreen";
import AboutScreen from "./Screens/AboutScreen/AboutScreen";
import ContactScreen from "./Screens/ContactScreen/ContactScreen";
import CartScreen from "./Screens/CartScreen/CartScreen";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePageScreen />,
    },
    {
      path: "/shop",
      element: <ShopScreen />,
    },
    {
      path: "/blog",
      element: <BlogScreen />,
    },
    {
      path: "/about",
      element: <AboutScreen />,
    },
    {
      path: "/contact",
      element: <ContactScreen />,
    },
    {
      path: "/cart",
      element: <CartScreen />,
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
