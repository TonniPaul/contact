import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { MyContact } from "../components/Contact";
import { useState } from "react";

export default function ContactPage() {
   const [theme] = useState(localStorage.getItem('themeColor')? localStorage.getItem('themeColor').toString(): 'dark');
  return (
    <div id={theme}>
      <Nav/>
      <MyContact/>
      <Footer/>
    </div>
  )
}
