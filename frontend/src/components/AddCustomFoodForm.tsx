import React, { useState } from 'react';

interface FormValues {
  fats: number;
  carbs: number;
  protein: number;
  calories: number;
}

interface Props {
    handleChange:(e:React.ChangeEvent<HTMLInputElement>) => void,
    submitAction: () => void;
    formData:{
        name : string,
        fats: number;
        carbs: number;
        protein: number;
        calories: number;
    }
  }


const AddCustomFood: React.FC<Props> = (props) => {
  const [formValues, setFormValues] = useState<FormValues>({
    ...props.formData
  });

  const handleChange = props.handleChange

  const handleSubmit = (e: React.FormEvent) => {
    props.submitAction()
    e.preventDefault();
    console.log(formValues); // You can do something with the form values here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='absolute left-32 bottom-32'>
        <label>
          Fats:
          <input
            type="number"
            name="fats"
            value={formValues.fats}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Carbs:
          <input
            type="number"
            name="carbs"
            value={formValues.carbs}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Protein:
          <input
            type="number"
            name="protein"
            value={formValues.protein}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Calories:
          <input
            type="number"
            name="calories"
            value={formValues.calories}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddCustomFood;
