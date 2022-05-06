import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './css/index.css';
import { Provider } from 'react-redux';
import App from './components/App';
import Home from "./components/Home";
import Categories from "./components/Categories";
import Recipes from "./components/Recipes";
import Recipe from "./components/Recipe";
import RecipesInCategory from "./components/RecipesInCategory";

import { createStore, compose } from 'redux';
import reducer from './redux/reducers';

type CategoryType = {
    id: number,
    name: string,
    description: string,
    photo: string
}

type propsCategory = {
    key: number,
    category: CategoryType,
}

const store = createStore(reducer);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />}>
                  <Route path="home" element={<Home />} />
                  <Route path="categories" element={<Categories />}>
                      <Route path=":categoryId" element={<RecipesInCategory />} />
                  </Route>
                  <Route path="recipes" element={<Recipes />}>
                      <Route path=":recipeId" element={<Recipe />} />
                  </Route>
              </Route>
          </Routes>
      </BrowserRouter>
    </Provider>
);