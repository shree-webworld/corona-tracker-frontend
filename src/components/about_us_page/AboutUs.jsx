import React from 'react';
import about_image from '../about_us_page/images/about_uss.jpg';
import { CheckIcon } from '@chakra-ui/icons';


export default function AboutUs()
{
  return(<>

    <header className="bg-gray-200 dark:bg-gray-800 py-20" id="about">
        <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg  tracking-wider">
                    <h1 className="text-2xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl" style={{fontFamily: "'Playfair Display', serif"}}>Hello everyone,</h1>
                    <p className="mt-2 text-gray-600 dark:text-gray-300 indent-9 leading-relaxed" style={{fontFamily: "'Montserrat', san-serif"}}>
                       This website deals with 'Corona Tracking System' developed by 'Shreedhar'.
                        The website features are as follows :-
                     </p>
                    <div className="grid gap-6 mt-8 sm:grid-cols-2 indent-4" style={{fontFamily: "'Montserrat', san-serif"}}>
                        <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                             <CheckIcon/>
                            <span className="mx-3">Live tracking of infected patients.</span>
                        </div>

                        <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                            <CheckIcon/>
                            <span className="mx-3">Also tracks the deaths of patient.</span>
                        </div>

                        <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                            <CheckIcon/>
                            <span className="mx-3">Live patient status displayed in tabular format.</span>
                        </div>

                        <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                            <CheckIcon/>
                            <span className="mx-3">Indian Statewise and World(Countrywise) data is displayed.</span>
                        </div>

                        <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                            <CheckIcon/>
                            <span className="mx-3">Covered Symptoms of Corona patient.</span>
                        </div>

                        <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                            <CheckIcon/>
                            <span className="mx-3">Covered precautions to be taken to avoid Corona.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                <img className="object-cover w-full h-full max-w-2xl rounded-md" src={about_image} alt="about_page" />
            </div>
        </div>
    </header>


        </>);
}
