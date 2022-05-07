import React from 'react';
import '../css/App.css';
import {
    Link,
    Outlet
} from "react-router-dom";
import { connect } from 'react-redux';
import { State } from '../types/myTypes';

const mapStateToProps = (state: State) => ({
    categories: state.categories,
    recipes: state.recipes,
});

class App extends React.Component {

  render() {

      return (
        <div className="app-container">
            <nav className="nav-bar">
                <Link to="/" className="nav-link">Главная</Link>
                <Link to="/categories" className="nav-link">Категории</Link>
                <Link to="/recipes" className="nav-link">Рецепты</Link>
            </nav>
            <Outlet />
        </div>
      );
  }
}

export default connect(
    mapStateToProps,
    dispatch => ({
        addCategories: (elem:Array<object>) => {
            dispatch({type: "GET_CATEGORIES", payload: elem});
        },
        addRecipes: (elem:Array<object>) => {
            dispatch({type: "GET_RECIPES", payload: elem});
        }
    })
) (App);