import Hero from "../components/Hero";
import { About } from "../components/About";
import Toolset from "../components/Toolset";
import { Contact } from "../components/Contact";

export default function HomePage() {
  return (
    <div>
           <div className="App">
          <Hero/>
          <div className="toolabout">
            <About />
            <Toolset/>
          </div>
          <div className="ccontact">
            <Contact />
          </div>
        </div>
    </div>
  )
}
