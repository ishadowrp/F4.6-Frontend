import React, {useEffect, useState} from 'react';
import '../css/Categories.css';
import Category from './Category';
import axios from 'axios';

type CategoryType = {
    id: number,
    name: string,
    description: string,
    photo: string
}

type CategoryArray = [CategoryType]

function Categories() {
    const initialState:CategoryArray = [
        {'id':0,
        'name': '',
        'description': '',
        'photo': ''}
    ];

    let [aCategories, setCategories] = useState(initialState);

    useEffect(() => {
        axios.get<CategoryArray>('http://127.0.0.1:8000/api/v1/categories/').then((response) => {
            if (response.status === 200) {
                setCategories(response.data);
            }
        }).catch((error) => {
            console.log(error);
        })
    }, []);

    return (
        <React.Fragment>
            <div className = 'categories-container'>
                <div className='categories-white-list'>
                    <h2 className='categories-header'>Категории</h2>
                    <div className='categories-list-container'>
                    {aCategories.map((category: CategoryType) => <Category key={category.id} category={category}/>)}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Categories;