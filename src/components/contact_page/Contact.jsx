import React from 'react';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";
// import emailjs,{init} from '@emailjs/browser';
// init(process.env.REACT_APP_USERID);

const schema = yup.object({
                            name: yup.string().required(),
                            email: yup.string().email().required(),
                            phone: yup.number().positive().integer().required(),
                            symptoms:yup.string().required(),
                            message:yup.string().required(),
                          }).required();



export default function Contact()
{
    const { register, handleSubmit, reset, formState:{errors}  } = useForm({ resolver: yupResolver(schema) });
    let base_url = process.env.REACT_APP_BASE_URL;


    const onSubmit = async(patientInfo) =>{
                                            try{
                                                 const res = await axios.post(`${base_url}/api/register`,patientInfo); //post to req.body
                                                 // console.log(res);
                                                 // sendEmail();
                                                 reset();
                                                 window.alert(res.data.message);

                                               }catch(error)
                                                {
                                                  console.log(`${error.message}`);
                                                  window.alert(error.message);

                                                }
                                            }

      /*const form = useRef();
      const sendEmail = () => {
                                  emailjs.sendForm(process.env.REACT_APP_SERVICEID, process.env.REACT_APP_TEMPLATEID, form.current, process.env.REACT_APP_USERID)
                                          .then((response) =>
                                          {
                                                console.log('SUCCESS!', response.status, response.text);
                                          }, (error) =>
                                              {
                                                  console.log('FAILED...', error);
                                              });
                                }*/


    return(<> <div className="bg-gray-400 py-10">
          <div className="min-h-screen ">
          <section className="form-control w-full max-w-2xl px-6 py-4 mx-auto bg-white rounded-md shadow-2xl dark:bg-gray-900 ">
            {/*<pre>{JSON.stringify(patientInfo, undefined, 2)}</pre>  */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white">Contact Us ASAP</h2>
              <div className="divider"></div>

              <div className="mt-3 ">
                  <div className="w-full mt-4">
                      <label className="label label-text block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Name</label>
                      <input className="input input-bordered input-primary block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 capitalize"
                             autoComplete="off" placeholder="Enter your name"  type="text"  name="name"  {...register("name", { required: true, pattern: /[A-Za-z]/  })}
                      />
                    {errors.name && <p className="text-red-600"> *Name is required</p>}
                  </div>

                  <div className="w-full mt-4">
                      <label className="label label-text block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Email</label>
                      <input className="input input-bordered input-primary block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                              autoComplete="off" type="email" name="email" placeholder="Enter your Email"  {...register("email", { required: true })}
                      />
                    {errors.email && <p className="text-red-600"> *Email is required </p>}
                  </div>

                  <div className="w-full mt-4">
                      <label className="label label-text block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Mobile</label>
                      <input className="input input-bordered input-primary block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                             autoComplete="off" type="tel" name="phone" placeholder="Enter your mobile number" {...register("phone", { required: true })}
                      />
                    {errors.phone && <p className="text-red-600">*phone no. is required </p>}
                  </div>

                  <div className="w-full mt-4">
                      <label className="label label-text block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Select the Symptoms</label>
                        <select className="select w-full  select-primary" name="symptoms" defaultValue={'DEFAULT'} {...register("symptoms", { required: true })}>
                          {/*<option disabled value="DEFAULT">Select the Symptoms </option>*/}
                          <option value="Cold">Cold</option>
                          <option value="Fever">Fever</option>
                          <option value="Difficulty in Breathing">Difficulty in Breathing</option>
                          <option value="Feeling Weak">Feeling Weak</option>
                        </select>
                        {errors.symptoms && <p className="text-red-600">*Select the proper option </p>}
                  </div>


                  <div className="w-full mt-4">
                      <label className="label label-text block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Description how are you feeling</label>
                      <textarea className="input input-bordered input-primary block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 capitalize"
                                 name="message" placeholder="Add description here"  {...register("message", { required: true })}>
                      </textarea>
                      <p className="text-red-600">{errors.message && "*Enter some comment"}</p>
                  </div>

                  <div className="flex justify-center mt-6">
                      <button className="btn btn-outline btn-primary px-10 font-bold text-lg" type="submit">Save</button>
                  </div>
              </div>
            </form>
          </section>
        </div>
      </div></>);
}
