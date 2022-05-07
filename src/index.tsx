import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import './css/index.css';
import { Provider } from 'react-redux';
import App from './components/App';
import Home from "./components/Home";
import Categories from "./components/Categories";
import Recipes from "./components/Recipes";
import RecipesInCategory from "./components/RecipesInCategory";

import { createStore } from 'redux';
import reducer from './redux/reducers';
import RecipeDetail from "./components/RecipeDetail";



const store = createStore(reducer);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />}>
                  <Route path="/" element={<Home />} />
                  <Route path="categories" element={<Categories />} />
                  <Route path="recipesInCategory" element={<RecipesInCategory />}>
                      <Route path=":categoryId" element={<RecipesInCategory />} />
                  </Route>
                  <Route path="recipes" element={<Recipes />} />
                  <Route path="recipe" element = {<RecipeDetail />}>
                      <Route path=":recipeId" element={<RecipeDetail />} />
                  </Route>
              </Route>
              <Route path="*" element={<NoMatch />} />
          </Routes>
      </BrowserRouter>
    </Provider>
);

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}