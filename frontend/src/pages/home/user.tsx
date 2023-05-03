import React from 'react';
import {useCookies} from "react-cookie"
import { useRouter } from 'next/router';
export default function Comp(){
    const [cookies,setCookie] = useCookies(['name']);
    const [changeName,setChange] = React.useState(false)
    const [userObject,setUserObject] = React.useState({
        name:""
    })
    const router = useRouter()
    
    React.useEffect(() => {
        console.log(cookies.name)
        if(!cookies.name){
            router.replace('http://localhost:3000/').then(() => {console.log()}).catch(() => {console.log()})
            console.log("hi");
        }
        //TODO:fetch user data
        setUserObject({
            name:typeof(cookies.name) == "string" ? cookies.name : "",
        })
    })
    const [formData,setFormData] = React.useState({
        Name:userObject.name,
        Instagram:"",
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
    function changeInfo(){
        setChange(!changeName)
    }
    return (
        <div className="flex items-center align-center justify-center">
            <div>
                <div>{cookies?.name}`s profile</div>
                <div></div>
                <button onClick={changeInfo}>Change</button>
                {
                changeName && <div>
                    <input type="text" placeholder="Enter your name" value={formData.Name} onChange={handleChange} name = "Name" />
                    <input type="text" placeholder="instagram" value = {formData.Instagram} onChange={handleChange} name = "Instagram" />
                    <button onClick={changeInfo}></button>
                </div>
                }
            </div>
        </div>
    )
}