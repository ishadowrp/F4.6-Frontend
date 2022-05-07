import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

type RecipeType = {
    id: number,
    title: string,
    category: [],
    author: number,
    date_posted: string,
    ingredients: string,
    cooking_method: string,
    photo1: string,
    photo2: string,
    photo3: string,
    rating: number
}

type RecipesArray = [RecipeType]

function RecipesInCategory() {
    let params = useParams();
    let queryString = 'http://127.0.0.1:8000/api/v1/recipes/?category='+params.categoryId;
    console.log(queryString);

    const initialState:RecipesArray = [
        {
            "id": 1,
            "title": "",
            "category": [],
            "author": 1,
            "date_posted": "",
            "ingredients": "",
            "cooking_method": "",
            "photo1": '',
            "photo2": '',
            "photo3": '',
            "rating": 0
        }
    ];

    let [aRecipes, setRecipesByCategory] = useState(initialState);

    useEffect(() => {
        axios.get<RecipesArray>(queryString).then((response) => {
            if (response.status === 200) {
                setRecipesByCategory(response.data);
            }
        }).catch((error) => {
            console.log(error);
        })
    }, [queryString]);

    console.log(aRecipes);
    return (
        <div className='ric-list-container'>
            Проверка работы
        </div>
    )
}

export default RecipesInCategory