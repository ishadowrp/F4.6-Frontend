import React from 'react';
import {useParams} from "react-router-dom";

function RecipeDetail() {
    let params = useParams();
    console.log(params);
    return (
        <div>
            Полное описание рецепта
        </div>
    )
}

export default RecipeDetail;