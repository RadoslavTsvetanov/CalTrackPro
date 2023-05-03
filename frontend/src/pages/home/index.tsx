import {useCookies} from 'react-cookie'
import React from 'react'
import Pfp from '~/components/pfp';
import { useRouter } from 'next/router';
export default function Comp(){
    const router = useRouter();
    const [cookies,setCookie] = useCookies(['name']);
    React.useEffect(() => {
        if(!cookies.name){
            router.replace('http://localhost:3000/').then(() => {console.log()}).catch(() => {console.log()})
            console.log("hi");
        }
        console.log(cookies.name);
    })
    return (
        <div className = "w-screen h-screen flex items-center justify-center">
            <div className=''>
                <div><p>{cookies.name}`s dashboard <Pfp/></p></div>
                <div className = 'flex items-center justify-center'>
                    <div>
                        <p>calories:</p>
                        <p>carbs</p>
                        <p>protein</p>
                        <p>fat</p>
                    </div>
                    <div>
                        <p>What you have eaten today</p>
                        {}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}