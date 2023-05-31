import React, { useState, ChangeEvent, FormEvent } from 'react';
interface FormData {
  protein: number;
  carbs: number;
  fats: number;
  calories: number;
}

const FormHandler: React.FC = (props) => {
  
  const [formData, setFormData] = useState<FormData>(
    {
      protein: 0,
    carbs: 0,
    fats: 0,
    calories: 0,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData); // You can perform further actions with the form data here
    // Reset the form
    
    setFormData({
        protein: 0,
        carbs: 0,
        fats:0,
        calories: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="protein">Protein</label>
        <input
          type="number"
          id="protein"
          name="protein"
          value={formData.protein}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Carbs</label>
        <input
          type="number"
          id="carbs"
          name="carbs"
          value={formData.carbs}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="fat">Fat</label>
        <input
        type = "number"
          id="fat"
          name="fat"
          value={formData.fats}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="calories">Calories</label>
        <textarea name="calories" id="calories" value={formData.calories} onChange={handleChange}></textarea>
      </div>
      <button onClick = {handleSubmit}>Submit</button>
    </form>
  );
};

export default FormHandler;