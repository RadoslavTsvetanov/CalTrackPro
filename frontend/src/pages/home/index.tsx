import {useCookies} from 'react-cookie'
import React from 'react'
import Pfp from '~/components/pfp';
import { useRouter } from 'next/router';
import { api } from '~/utils/api';
export default function Comp(){
    const router = useRouter();
    const [showFood,setShowAddFood] = React.useState(false)
    const [cookies,setCookie] = useCookies(['name']);
    const showAdd = () => {
        setShowAddFood(!showFood)
    }
    React.useEffect(() => {
        if(!cookies.name){
            router.replace('http://localhost:3000/').then(() => {console.log()}).catch(() => {console.log()})
            console.log("hi");
        }
        console.log(cookies.name);
        function fetchData(){
            return api.user.getUserStats.useQuery(
            {
              name:"Radoslav",
            },
            {
              enabled:true,
              onSuccess: (data) => {
                console.log(data);
              },
            }
          )
    }
    console.log(fetchData)
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
            {showFood && <div className = 'absolute mx-auto bg-black w-[50vw] h-[50vh] rounded-lg shadow-lg p-4'>
            <button onClick={showAdd
            } className='absolute right-20 bottom-20 rounded-3xl bg-slate-600 p-7'>Done</button></div>}
            <button className='absolute right-20 bottom-20 rounded-3xl bg-slate-600 p-7' onClick={
                showAdd
                }>+
            </button>
        </div>
    )
}