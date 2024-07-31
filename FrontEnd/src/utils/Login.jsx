import axios from "axios"
import toast from "react-hot-toast"
import { useState,useRef } from "react"
import { api } from "../../constant"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { userAction } from "../../store/slices"
function Login(){
    const [newUser,setUser]=useState(false)
    const [islogin,setlogin]=useState(false)
    const navigate=useNavigate()
    const dispatch=useDispatch()
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
            const config={
                headers: {
                  'Content-Type': 'application/json'
                },
                withCredentials: true
              }
            
            const responce=await axios.post(`/v1/reg`,option,config)
            if(responce.data.code==200){
             toast.success(responce.data.message)
            }
            setUser(!newUser)
         } catch (error) {
            toast.success("Sorry")
         }
            
         
       

        }else{
            try {
              setlogin(true)
                const Username=username.current.value
                const Password=password.current.value
                const option ={Username,Password} 
                const config={
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    withCredentials: true
                  }
                const response=await axios.post(`/v1/login`,option,config)
                dispatch(userAction.setUser(response.data.data.user))
              toast.success(response.data.message)
                setlogin(false)
              navigate("/browser")
            } catch (error) {
                toast.error("Enter your credential correctly")
                setlogin(false)
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
    return <div className="main">
        <form onSubmit={loginHandler} action="Submit"
        className="bg-black absolute mx-[33%] top-[30%]   bottom-2 w-[400px] flex-col pl-12 py-12 text-white opacity-[85%] z-10">
        <h1 className="pl-24 pb-8 font-bold text-4xl"> Login </h1>
        {newUser && <input type="text" ref={email} className="w-[270px] bg-slate-700 my-1 h-8"  title="Email" placeholder="Enter Your Email "/>}
        <input type="text" className="w-[270px] bg-slate-700 my-1 h-8"  title="Username" placeholder="Enter Your Username " ref={username}/>
        <input type="password" className="w-[270px] bg-slate-700 my-1 h-8"  title="Password" placeholder="Enter Your Password " ref={password}/>
        <div className="mt-3 text-blue-800 underline cursor-pointer" onClick={showPassword}> show password 
        </div>
        <button className=" ml-[30%] pl-[4px] mt-4 w-20 h-10  bg-red-800 rounded-xl font-semibold cursor-pointer">{islogin?"Loading...":newUser?"SignUp":"Login"}</button>
       <p className="pt-2 cursor-pointer underline text-blue-700 ml-[6px]" onClick={Toggle}>{!newUser ?` New to Netflix ? `:"Already have an account ?"}</p>
        </form>

    </div>

}
export default Login