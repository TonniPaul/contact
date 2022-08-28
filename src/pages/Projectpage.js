import { useState } from "react";
import Projects from "../components/Projects";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function ProjectPage() {
   const [theme] = useState(localStorage.getItem('themeColor')? localStorage.getItem('themeColor').toString(): 'dark');
  return (
    <div id={theme}>
      <Nav/>
      <Projects/>
      <Footer/>
    </div>
  )
}
