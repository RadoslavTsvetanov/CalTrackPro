import {useCookies} from 'react-cookie'
import React from 'react'
import Pfp from '~/components/pfp';
import { useRouter } from 'next/router';
import { api } from '~/utils/api';
import FillBar from '~/components/fillBar';
import OptionsInput from '~/components/CustomFoodForm';
import { string } from 'zod';
import FormHandler, { FormData } from "~/components/Standardform";
export default function Comp(){
    
    const router = useRouter();
    const [userFoods,steUserFoods] = React.useState([])
    const [showFood,setShowAddFood] = React.useState(false)
    const [customFoods,setCustomFoods] = React.useState([])
    const [cals,setCals] = React.useState(0)
    const [userStats,setUserStats]= React.useState([])
    const [cookies,setCookie] = useCookies(['name']);
    const short_stats = [{},{},{},{}]
    
    const user = api.user.getUserStats.useQuery(
        {
          name:"Radoslav",
        },
        {
          enabled:true,
        }
      )
    const add = () => {
        showAdd();
        // api.user.updateUserStats.useMutation({

        // })
    }
    const showAdd = () => {
        setShowAddFood(!showFood)
    }
    React.useEffect(() => {
        if(!cookies.name){
            router.replace('http://localhost:3000/').then(() => {console.log()}).catch(() => {console.log()})
        }
        console.log("user")
        if(user.data){
        console.log(user?.data[0])
        const foodStats = {
            protein:user?.data[0]?.foodStats[0]?.protein,
            fats:user?.data[0]?.foodStats[0]?.fats,
            carbs:user?.data[0]?.foodStats[0]?.carbs,
        }
        steUserFoods(user?.data[0]?.foods)
        setCals(user?.data[0]?.foodStats[0]?.calories || 0)
        // const foodStats = user?.data[0]?.foodStats.map((foodStat) => {
        //     <FillBar text = 
        // })
        const mappedStats = Object.entries(foodStats).map(([key, value]) => {
            // Transform the key or value as needed
            return <FillBar value={value || 0} text={key} key={key} color={"none"}/>;
          });
        setUserStats(mappedStats || [])
    }
        
},[cookies.name,user.data,router])
const options = userFoods.map((food) => {
    return {label:food.name,value:food.value}
})
    
      const [selectedOption, setSelectedOption] = React.useState('');
    
      const handleOptionChange = (selectedValue: string) => {
        let Food = userFoods.find(food => food.name === selectedValue)
        setFormData({
            protein:Food.protein,
            fats:Food.fats,
            carbs:Food.carbs,
            calories:Food.calories,
        })
        setSelectedOption(selectedValue);
      };








      //!!!NORMAL FORM START
      const [formData, setFormData] = React.useState<FormData>({
        protein:0,
        carbs:20,
        fat: 0,
        calories: 0
      });
    
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value
        }));
      };
    
      const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission logic here
      };
      //!!!END OF NORMAL FORM
    return (
        <div className = "w-screen h-screen flex items-center justify-center bg-[#112d33] text-[#d0d2d4]">
            <div className=''>
                <div><div><p>{cookies.name}`s dashboard <Pfp/></p></div></div>
                <div className = 'flex items-center justify-center'>
                    <div className='bg-[rgb(240,206,72)] '>
                        <FillBar value={cals} text='calories' color='hu'/>
                    </div>
                    <div className='bg-[#10292f49]'>
                        {
                            userStats
                        }
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
                <h3>Add Meal</h3>
                <FormHandler formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>
            <button onClick={showAdd
            } className='absolute right-20 bottom-20 rounded-3xl bg-slate-600 p-7'>Done</button>
            <OptionsInput
        options={options}
        selectedValue={selectedOption}
        onChange={handleOptionChange}
      />
            </div>}
            <button className='absolute right-20 bottom-20 rounded-3xl bg-slate-600 p-7' onClick={add}>+
            </button>
        </div>
    )
}