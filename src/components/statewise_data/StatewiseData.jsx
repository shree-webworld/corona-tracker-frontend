import React, {useEffect, useState} from 'react';
// import axios from "axios";

export default function StatewiseData()
{
    let [data, setData] = useState([]);

    let getCovidData =
        async() =>{
                      try
                      {
                        const response = await fetch('https://data.covid19india.org/data.json');
                        // const res = await axios.get('https://data.covid19india.org/data.json');
                        const responsedata = await response.json();
                        console.log(responsedata);
                        setData(responsedata.statewise);
                      } catch (e)
                        {
                            console.log(`The error while fetching api data`+e);

                        }
                  }

    useEffect( ()=>{
                        getCovidData();

                   },[]);

    return(<>

      <div className="md:my-16 my-32 mx-1" id="statewise_data">
      <div className="flex flex-col text-center w-full mb-4 md:pt-10">
        <h1 className="text-3xl font-medium title-font mb-4 text-purple-700 underline">Covid-19 Live Updates of the India </h1>
      </div>
        <table className=" table table-normal w-full ">
          <thead className="sticky top-0 text-purple-900 drop-shadow-2xl underline">
            <tr>
              <th >|  State  |</th>
      				<th >|  Confirmed  |</th>
      				<th >| Recovered |</th>
      				<th >| Deaths |</th>
              <th >| Active |</th>
              <th >| Updated |</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((currentElement, index) =>{
                                                    return(
                                                              <tr key = {index}>
                                                                {/* <td className="text-purple-900 font-extrabold text-lg">*/}
                                                                <td className="text-white bg-purple-900 font-bold text-lg">
                                                                    {currentElement.state}
                                                                </td>
                                                                <td className="text-lg font-bold">
                                                                  {currentElement.confirmed}
                                                                </td>
                                                                <td className="text-green-500 font-bold hover:bg-green-200 text-lg">
                                                                    {currentElement.recovered}
                                                                </td>
                                                                <td className="text-red-500 font-bold hover:bg-red-200 text-lg">
                                                                    {currentElement.deaths}
                                                                </td>
                                                                <td className="text-lg font-bold">{currentElement.active}</td>
                                                                <td className="text-lg font-bold">{currentElement.lastupdatedtime}</td>
                                                              </tr>
                                                          )
                                                  }
                      )
            }
          </tbody>
        </table>
      </div>

          </>);
}
