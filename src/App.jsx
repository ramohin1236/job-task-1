import Airlines from "./components/Airlines/Airlines"
import Featured from "./components/Featured/Featured"
import Header from "./components/Header/Header"
import Offer from "./components/Offer/Offer"
import Testimonial from "./components/Testimonial/Testimonial"

function App() {
  

  return (
    <div>
          <div>
              {/* <Header/> */}
          </div>
          <div className="mt-44 2xl:ml-64  mb-20">
              <Featured/>
          </div>
          <div className=" 2xl:ml-64  mb-20">
              <Offer/>
          </div>
          <div className=" 2xl:ml-64  mb-20">
              <Airlines/>
          </div>
          <div className=" mb-20">
              <Testimonial/>
          </div>
    </div>
  )
}

export default App
