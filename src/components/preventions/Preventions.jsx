import React from 'react';
import soapDispenserVideo from '../preventions/images/Using_soap_dispenser.mp4';
import wearMaskVideo from '../preventions/images/wear_mask.mp4';
import socialDistanceVideo from '../preventions/images/social_distance.mp4';
import consultDoctorVideo from '../preventions/images/consult_doctor.mp4';

export default function Symptoms()
{
  const contents = [
                      {
                          video_src : soapDispenserVideo,
                          video_title : "Wash Hands",
                          video_description:"Wash your hands regularly for 20secs using soap or handwash and clean water."
                      },
                      {
                        video_src : wearMaskVideo,
                        video_title : "Wear Mask",
                        video_description:"Cover your nose and mouth with mask, whenever you visit any public place."
                      },
                      {
                        video_src : socialDistanceVideo,
                        video_title : "Social Distance",
                        video_description:"Avoid close contact(1 meter or 3 feet) from people who are unwell."
                      },
                      {
                        video_src : consultDoctorVideo,
                        video_title : "Consult To Doctor And Get Vaccinated",
                        video_description:"Seek medical care early if you have fever,cold or difficulty in breathing. Also, get vaccinated as early as possible."
                      }
                   ]

  return(<>

    <section className="text-gray-600 body-font" id="preventions" style={ {fontFamily: "'Bebas-neue', sans-serif"} }>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-3xl font-bold title-font mb-4 text-gray-900 ">4 Prevention Steps Against Corona Virus</h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {
            contents.map((data) =>{
                                    return(
                                             <div className="card card-side card-bordered bg-blue-100 shadow-xl p-4 lg:w-2/5 lg:mx-auto my-4" key={data.video_src}>
                                               <div className=" h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                                 <video autoPlay loop muted className="flex-shrink-0 rounded-lg w-52 h-52 object-cover object-center sm:mb-0 mb-4">
                                                   <source src={data.video_src} type="video/mp4"/>
                                                 </video>
                                                 <div className="card-body flex-grow sm:pl-8 ">
                                                   <h2 className="title-font font-bold text-lg text-gray-900">{data.video_title}</h2>
                                                   <h3 className="text-gray-700 mb-3">{data.video_description}</h3>
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
