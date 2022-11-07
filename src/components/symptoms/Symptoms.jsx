import React from 'react';
import boy_with_cold from '../symptoms/images/boy_with_cold.png';
import little_girl_coughing from '../symptoms/images/little_girl_coughing.png';
import fever from '../symptoms/images/fever.jpg';
import coughing from '../symptoms/images/coughing.jpg';

export default function Symptoms()
{
  const contents = [
                      {
                          image_src : boy_with_cold,
                          image_alt : "person_with_cold",
                          image_title:"Cold"
                      },
                      {
                          image_src : little_girl_coughing,
                          image_alt : "person_coughing",
                          image_title:"Cough"
                      },
                      {
                          image_src : fever,
                          image_alt : "person_with_fever",
                          image_title:"Fever"
                      },
                      {
                          image_src : coughing,
                          image_alt : "person_difficult_in_breathing",
                          image_title:"Difficult to breathe"
                      }
                   ]

  return(<>
    <section className="text-gray-600 body-font bg-gray-100" id="symptoms" style={ {fontFamily: "'Source Sans Pro', sans-serif"} }>
      <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900" >Corona Virus Symptoms</h1>
      </div>
        <div className="flex flex-wrap -m-4 ">
         {
           contents.map((data) =>{
                                    return(
                                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={data.image_src}>
                                                <div className="card w-80 bg-indigo-200 shadow-xl" >
                                                    <figure className="px-5 pt-5">
                                                      <img src={data.image_src} alt={data.image_alt} className="rounded-xl bg-indigo-400"/>
                                                    </figure>
                                                    <div className="card-body items-center text-center">
                                                      <h1 className="card-title  text-gray-900">{data.image_title}</h1>
                                                    </div>
                                                 </div>
                                            </div>
                                        )
                              }
                        )
          }
        </div>
      </div>
  </section>
        </>);

      }
