import React,{useEffect} from "react"
import {useCookies} from "react-cookie"
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/router'
export default function Signup(){
    const [cookies,setCookie] = useCookies();
    function SetCookieHandler(name:string){
        
        setCookie('name',name,{
            path:'/',
            maxAge: 30 * 24 * 60 * 60
        })
    }
    const router = useRouter()
    const { data: sessionData } = useSession();
    const [formData,setFormData] = React.useState({
        Name:"",
        Password:"",
        Email:"",
    })
    function handleChange(event:React.ChangeEvent<HTMLInputElement>) {
        console.log()
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    useEffect(() =>{
        console.log(sessionData)
        if(sessionData?.user?.name){
            SetCookieHandler(sessionData.user.name)
            router.replace('/home').then(() => {console.log(sessionData)}).catch(() => {console.log(sessionData)})
        }
    });
    return (
        <div>
            <h1>Signup</h1>
            <form>
            <input type="text"
                placeholder="Name"
                onChange={handleChange}
                name="firstName"
                value={formData.Name}
                className = ""
            />
            <input 
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="Email"
                value={formData.Email}
            />
            <input 
                type="text"
                placeholder="Password"
                onChange={handleChange}
                name="Password"
                value={formData.Password}
            />
            </form>
            <p>or Sign up with Github</p>
            <button
              className="btn-ghost rounded-btn btn"
              onClick={() => void signIn()}
            >
              Sign in
            </button>
        </div>
    )
}