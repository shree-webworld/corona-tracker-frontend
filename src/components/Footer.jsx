import React from 'react';
import { Link } from "react-scroll";
import {NavLink} from "react-router-dom";


export default function Footer()
{
  return(<>

    <footer className="footer footer-center p-10 bg-[#394f8a] text-[#ffffff] rounded">
      <div className="grid grid-flow-col gap-4">
        <Link className="link link-hover" to="symptoms" spy={true} smooth={true} offset={0} duration={900}>Symptoms</Link>
        <Link className="link link-hover" to="preventions" spy={true} smooth={true} offset={0} duration={900} >Preventions</Link>
        <NavLink className="link link-hover" end to="/statewise_data">India Corona Live</NavLink>
        <NavLink className="link link-hover" end to="/countrywise_data">World Corona Live</NavLink>
        <NavLink className="link link-hover" end to="/about">About</NavLink>
      </div>
      <div>
        <p>Copyright © 2022 - Made with ❤️ by Shreedhar</p>
      </div>
    </footer>

        </>);
}
