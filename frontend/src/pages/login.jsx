import React from 'react';
export default function Login(){
    const [formData,setFormData] = React.useState({
        Email:"",
        Password:"",
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
    return(
     <div>
        <p>Login</p>
        <form>
        <input 
                type="text"
                placeholder="Password"
                onChange={handleChange}
                name="Password"
                value={formData.Password}
        />
        <input 
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="Email"
                value={formData.Email}
        />

        </form>
    </div>
)
}