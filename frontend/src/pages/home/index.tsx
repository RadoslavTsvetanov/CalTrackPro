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
        <div className = "w-screen h-screen flex items-center justify-center bg-[#112d33] text-[#d0d2d4]">
            <div className=''>
                <div><div><p>{cookies.name}`s dashboard <Pfp/></p></div></div>
                <div className = 'flex items-center justify-center'>
                    <div className='bg-[rgb(240,206,72)] '>
                        <p>Total calories</p>
                        <h2>{}kcl</h2>
                    </div>
                    <div className='bg-[#10292f49]'>
                        <p>carbs</p>
                        <div className='w-[20rem] h-[5vh] bg-[#3c4345f9] rounded-3xl'><div className='w-[10rem] h-[5vh] bg-[rgb(240,206,72)] rounded-3xl'></div></div>
                        <p>protein</p>
                        <div className='w-[20rem] h-[5vh] bg-[#3c4345f9] rounded-3xl'><div className='w-[10rem] h-[5vh] bg-[rgb(240,206,72)] rounded-3xl'></div></div>
                        <p>fat</p>
                        <div className='w-[20rem] h-[5vh] bg-[#3c4345f9] rounded-3xl'><div className='w-[10rem] h-[5vh] bg-[rgb(240,206,72)] rounded-3xl'></div></div>
                    </div>
                    <div>
                        <p>What you have eaten today</p>
                        {}
                        
                    </div>
                    <div>
                        <p>DRI CHART</p>
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