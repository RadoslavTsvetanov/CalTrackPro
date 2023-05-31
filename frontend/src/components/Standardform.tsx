import React from 'react';

export interface FormData {
  protein: number;
  carbs: number;
  fat: number;
  calories: number;
}

interface ChildComponentProps {
  formData: FormData;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

function FormHandler({ formData, handleChange, handleSubmit }: ChildComponentProps) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center">
        <label htmlFor="protein">Protein</label>
        <input
          type="number"
          id="protein"
          name="protein"
          value={formData.protein}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center">
        <label htmlFor="carbs">Carbs</label>
        <input
          type="number"
          id="carbs"
          name="carbs"
          value={formData.carbs}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center">
        <label htmlFor="fat">Fat</label>
        <input
          type="number"
          id="fat"
          name="fat"
          value={formData.fat}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center">
        <label htmlFor="calories">Calories</label>
        <input
          type="number"
          id="calories"
          name="calories"
          value={formData.calories}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormHandler;
