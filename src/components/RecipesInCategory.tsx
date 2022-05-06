import React from 'react';
import { useParams } from "react-router-dom";

function RecipesInCategory() {
    let params = useParams();
    console.log(params);
    return (
        <div>
        Рецепты по категории:
        </div>
    )
}

export default RecipesInCategory