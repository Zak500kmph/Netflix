import { IoIosArrowDropdown } from "react-icons/io";
import Button from "./buttons.jsx";

const Header=()=>{
    const button=["Search","Logout"]

    
    return <div className="flex items-center bg-gradient-to-b from-black w-full absolute z-10" >
        <img src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png" alt="Netflix.logo" className="w-[250px]" />
        <div className="flex ml-auto gap-3 items-center font-semibold text-white ">
            <IoIosArrowDropdown />
            Zakaria Siddiqui
            <Button buttons={button}/>
        </div>
        
        
    </div>
}
export default Header