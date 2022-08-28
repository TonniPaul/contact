import { MyAbout } from "../components/About"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import { useState } from "react";

export default function AboutPage() {
   const [theme] = useState(localStorage.getItem('themeColor')? localStorage.getItem('themeColor').toString(): 'dark');
  return (
    <div id={theme}>
      <Nav/>
      <MyAbout/>
      <Footer/>
    </div>
  )
}
