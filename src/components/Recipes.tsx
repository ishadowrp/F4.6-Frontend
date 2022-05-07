import React from 'react';
import {Link} from "react-router-dom";

function Recipes() {
    return (
        <React.Fragment>
            <div>
                <h2>Рецепты</h2>
                <Link to='/recipes/1' className="nav-link">Рецепт 1</Link>
            </div>
        </React.Fragment>
    )
}

export default Recipes;