import React from 'react';

interface EatenFoodProps {
  name: string;
  calories: number;
  fat: number;
  protein: number;
  carbs: number;
}

const EatenFood: React.FC<EatenFoodProps> = ({
  name,
  calories,
  fat,
  protein,
  carbs,
}) => {
  return (
    <div className="eaten-food">
      <h3>{name}</h3>
      <p>Calories: {calories}</p>
      <p>Fat: {fat}</p>
      <p>Protein: {protein}</p>
      <p>Carbs: {carbs}</p>
    </div>
  );
};

export default EatenFood;