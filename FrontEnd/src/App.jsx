import Header from "./components/Header.jsx"
import {Outlet} from "react-router-dom"
function App() {
  
  return <div className="">
     <Header className="" />
    <Outlet className=""/>
    </div>
  
}

export default App
