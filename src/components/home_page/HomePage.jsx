import React from 'react';
import fighting_virus_image from '../home_page/images/fighting_virus.jpg';
import AboutCovid19 from '../about_covid19/AboutCovid19';
import Symptoms from '../symptoms/Symptoms';
import Preventions from '../preventions/Preventions';
import Contact from '../contact_page/Contact';


export default function HomePage()
{
  return(<>

    <div className="hero min-h-screen bg-gray-200">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <img src={fighting_virus_image}  className="md:max-w-lg max-w-sm rounded-lg shadow-2xl" alt="fighting_virus_image "/>
        <div>
          <h1 className="mb-6 md:text-6xl text-5xl font-extrabold text-purple-900" style={ {fontFamily: "'Playfair Display', sans-serif"} }>
              Let's Stay Safe & Fight Together Against Corona Virus
          </h1>

           <p className="mb-5 text-3xl font-medium text-purple-700" style={ {fontFamily: "'Source Sans Pro', sans-serif"} }>
                 #IndiaFightsCorona
           </p>
        </div>
      </div>
    </div>

    <AboutCovid19 />

    <Symptoms />

    <Preventions />

    <Contact />

    </>)
}
