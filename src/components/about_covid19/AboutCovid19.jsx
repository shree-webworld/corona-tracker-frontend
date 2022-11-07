import React from 'react';
import Corona_Virus_Diagram from '../about_covid19/Corona_Virus_Diagram.jpg';

export default function AboutCovid19()
{
  return(<>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img className="lg:w-28  lg:min-w-min lg:mr-10 rounded-md" src={Corona_Virus_Diagram} alt="Corona Virus Diagram"  />
        <div>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900" style={ {fontFamily: "'Source Sans Pro', sans-serif"} }>
            What is COVID-19(Corona Virus)?
          </h1>
          <p className="mb-4 leading-relaxed text-xl indent-9 tracking-wider" style={ {fontFamily: "'Montserrat', sans-serif"} }>
            COVID-19 is the disease caused by SARS-CoV-2, the coronavirus that emerged in December 2019.
            COVID-19 can be severe, and has caused millions of deaths around the world as well as lasting health problems in some who have survived the illness.
            The coronavirus can be spread from person to person. It is diagnosed with a test.
            The best way to protect yourself is to get vaccinated and boosted when you are eligible, follow testing guidelines, wear a mask, wash your hands and practice physical distancing.
          </p>
          <p className=" leading-relaxed text-xl indent-9 tracking-wider" style={ {fontFamily: "'Montserrat', sans-serif"} }>
               Most people with COVID-19 have mild symptoms, but some people become severely ill.
            Older adults and people who have certain underlying medical conditions are more likely to get severely ill.
            Post-COVID conditions are a wide range of health problems people can experience four or more weeks after first getting COVID-19. Even those who do not become severely ill from COVID-19 may experience post-COVID conditions.
          </p>
        </div>
      </div>
    </div>
        </>);

}
