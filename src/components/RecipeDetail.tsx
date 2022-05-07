import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {initialStateRecipeDetails} from "../types/InitialStateObjects";
import '../css/RecipeDetail.css';
import axios from "axios";
import {RecipeType} from "../types/myTypes";

function RecipeDetail() {
    let params = useParams();
    let queryString = 'http://127.0.0.1:8000/api/v1/recipes/'+params.recipeId;

    const [recipe, setRecipe] = useState(initialStateRecipeDetails);

    useEffect(() => {
        axios.get<RecipeType>(queryString).then((response) => {
            if (response.status === 200) {
                setRecipe(response.data);
            }
        }).catch((error) => {
            console.log(error);
        })
    }, []);

    const openCarousel = () => {
        console.log('Открыть карусель');
    }

    return (
        <div className = 'recipe-detail-container'>
            <div className='recipe-detail-white-list'>
                <div className='detail-wrapper'>
                    <div className='detail-img-title-description'>
                        <div className='detail-main-photo'>
                            <a href='#' className='detail-img-button' onClick={openCarousel}>
                                <img src={recipe.photo1} alt='main photo'/>
                            </a>
                        </div>
                        <div className='detail-title-description'>
                            <h3 className='detail-title'>{recipe.title}</h3>
                            <p className='detail-description'>{recipe.description}</p>
                            <h3 className='detail-title'>Ингредиенты:</h3>
                            <p className='detail-ingredients'>{recipe.ingredients}</p>
                        </div>
                    </div>
                    <div className='detail-cooking-method'>
                        <h3>Способ приготовления:</h3>
                        <p>{recipe.cooking_method}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetail;