import Featured from "./components/Featured/Featured"
import Header from "./components/Header/Header"
import Offer from "./components/Offer/Offer"

function App() {
  

  return (
    <div>
          <div>
              {/* <Header/> */}
          </div>
          <div className="mt-44 2xl:ml-64  mb-20">
              <Featured/>
          </div>
          <div className=" 2xl:ml-64  mb-44">
              <Offer/>
          </div>
    </div>
  )
}

export default App
