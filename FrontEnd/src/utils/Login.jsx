import axios from "axios"
import toast from "react-hot-toast"
import { useState,useRef } from "react"
import { api } from "../../constant"

function Login(){
    const [newUser,setUser]=useState(false)
    function Toggle(){
     setUser(!newUser)
    }
    let email=useRef()
    let password=useRef()
    let username=useRef()
    async function loginHandler(e){
        e.preventDefault()
       
        if(newUser){
            //   register
         try {
             const Email=email.current.value
             const Password=password.current.value
            const Username=username.current.value
            const option ={Username,Email,Password} 
            
            const responce=await axios.post(`${api}/reg`,option)
            if(responce.data.code==200){
             toast.success(responce.data.message)
            }
         } catch (error) {
            toast.success("Sorry")
         }
            
         
       

        }else{
            try {
                const Username=username.current.value
                const Password=password.current.value
                const option ={Username,Password} 
                const response=await axios.post(`${api}/login`,option)
                console.log(response)
              toast.success(response.data.message)
            } catch (error) {
                toast.error("Enter your credential correctly")
            }
        }
        
         password.current.value=""
         
         
    }

    function showPassword(){
       if( password.current.type=="text"){
        password.current.type="password"

       }
       else{
           password.current.type="text"
       }
    }
    return <div className="main h-[100vh] w-[100%] bg-cover">
        <form onSubmit={loginHandler} action="Submit"
        className="bg-black absolute ml-[35%] top-[30%] mr-[14%]  bottom-2 w-[400px] flex-col pl-12 py-12 text-white opacity-[85%] z-10">
        <h1 className="pl-24 pb-8 font-bold text-4xl"> Login </h1>
        {newUser && <input type="text" ref={email} className="w-[270px] bg-slate-700 my-1 h-8"  title="Email" placeholder="Enter Your Email "/>}
        <input type="text" className="w-[270px] bg-slate-700 my-1 h-8"  title="Username" placeholder="Enter Your Username " ref={username}/>
        <input type="password" className="w-[270px] bg-slate-700 my-1 h-8"  title="Password" placeholder="Enter Your Password " ref={password}/>
        <div className="mt-3 text-blue-800 underline cursor-pointer" onClick={showPassword}> show password 
        </div>
        <button className=" ml-[30%] pl-[4px] mt-4 w-20 h-10  bg-red-800 rounded-xl font-semibold cursor-pointer">{newUser?"SIGNUP":"LOGIN"}</button>
       <p className="pt-2 cursor-pointer underline text-blue-700 ml-[6px]" onClick={Toggle}>{!newUser ?`\xa0  Forget - Password ? \xa0`:"Already have an account ?"}</p>
        </form>

    </div>

}
export default Login