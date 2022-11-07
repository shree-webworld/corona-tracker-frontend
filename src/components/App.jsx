import React from 'react';
import Navbar from './Navbar';
import HomePage from './home_page/HomePage';
import Statewise from './statewise_data/StatewiseData';
import Countrywise from './countrywise_data/CountrywiseData';
import AboutUs from './about_us_page/AboutUs';
import Footer from './Footer';
import ErrorPage from './error_page/ErrorPage';
import {Routes, Route} from "react-router-dom";
import ScrollToTop from './ScrollToTop';


export default function App()
{
    return(<>
                <ScrollToTop>
                  <Routes>
                    <Route path="/"  element={<Navbar />}>
                       <Route  index element={<HomePage />} />
                       <Route  path = "/statewise_data" element= {<Statewise />}  />
                       <Route  path = "/countrywise_data" element= {<Countrywise />}  />
                       <Route  path = "/about" element= {<AboutUs />}  />
                       <Route  path="*" element={<ErrorPage />} />
                    </Route>
                  </Routes>
                </ScrollToTop>
                  <Footer/>
          </>);
}
