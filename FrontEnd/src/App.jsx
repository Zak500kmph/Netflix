import { Toaster } from "react-hot-toast"
import Header from "./components/Header.jsx"
import {Outlet} from "react-router-dom"
function App() {
  
  return <div className="">
     <Header className="" />
     <Toaster/>
    <Outlet className=""/>
    </div>
  
}

export default App
