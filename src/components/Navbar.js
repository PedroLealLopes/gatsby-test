import React from "react"
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import NavbarWebsite from "./NavbarWebsite";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  const breakpoints = useBreakpoint();
  

  return (
    <>
    {breakpoints.sm ? <NavbarMobile /> : <NavbarWebsite />}
    </>
  )
}

export default Navbar
