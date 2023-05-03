import React from 'react';
import {useCookies} from "react-cookie"
import { useRouter } from 'next/router';
export default function Comp(){
    const router = useRouter()
    const [cookies,setCookie] = useCookies(['name']);
    React.useEffect(() => {
        console.log(cookies.name)
        if(!cookies.name){
            router.replace('http://localhost:3000/').then(() => {console.log()}).catch(() => {console.log()})
            console.log("hi");
        }
    })
    return (
        <div className="flex items-center align-center justify-center">
            <div>{cookies?.name}`s profile</div>
        </div>
    )
}