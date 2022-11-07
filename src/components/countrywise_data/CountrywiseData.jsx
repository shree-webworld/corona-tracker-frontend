import React, {useEffect,useState} from 'react';

export default function CountrywiseData()
{
  let [data, setData] = useState([]);

  let getCountryCovidData =
      async() =>{
                    try
                    {
                      const response = await fetch('https://api.covid19api.com/summary');
                      const responsedata = await response.json();
                      console.log(responsedata);
                      setData(responsedata.Countries);
                    } catch (e)
                      {
                          console.log(`The error while fetching api data`+e);

                      }
                }

  useEffect( ()=>{
                      getCountryCovidData();

                 },[]);

  return(<>
    <div className="md:my-16 my-32 mx-1" id="countrywise_data">
    <div className="flex flex-col text-center w-full mb-4 md:pt-10">
      <h1 className="text-3xl font-medium title-font mb-4 text-purple-700 underline">Covid-19 Live Updates of the World</h1>
    </div>

      <table className=" table table-normal w-full ">
        <thead className="sticky top-0  text-purple-900 drop-shadow-2xl underline">
          <tr>
            <th >| Country |</th>
            <th >| Confirmed |</th>
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
                                                              <td className="text-white bg-purple-900 font-bold text-lg">
                                                                  {currentElement.Country}
                                                              </td>
                                                              <td className="text-lg font-bold">
                                                                {currentElement.TotalConfirmed}
                                                              </td>
                                                              <td className="text-green-500 font-bold hover:bg-green-200 text-lg">
                                                                  {currentElement.TotalRecovered}
                                                              </td>
                                                              <td className="text-red-500 font-bold hover:bg-red-200 text-lg">
                                                                  {currentElement.TotalDeaths}
                                                              </td>
                                                              <td className="text-lg font-bold">{currentElement.NewConfirmed}</td>
                                                              <td className="text-lg font-bold">{currentElement.Date}</td>
                                                            </tr>
                                                        )
                                                }
                    )
          }
        </tbody>
      </table>
    </div>

    </>)
}
