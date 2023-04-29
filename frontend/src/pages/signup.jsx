import React from "react"

export default function Signup(){
    const [formData,setFormData] = React.useState({
        Name:"",
        Password:"",
        Email:"",
    })
    function handleChange(event) {
        console.log(event)
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    return (
        <div>
            <h1>Signup</h1>
            <form>
                <input type="text"
                placeholder="Name"
                onChange={handleChange}
                name="firstName"
                value={formData.Name}/>
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
            
        </div>
    )
}