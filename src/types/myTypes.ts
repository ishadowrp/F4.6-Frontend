type RecipeType = {
    id: number,
    title: string,
    description: string,
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

type CategoryType = {
    id: number,
    name: string,
    description: string,
    photo: string
}

type RecipesArray = [RecipeType]

type CategoryArray = [CategoryType]

type propsCategory = {
    key: number,
    category: CategoryType,
}

type State = {
    categories: Array<object>;
    recipes: Array<object>;
};

type propsRecipe = {
    key: number,
    recipe: RecipeType,
}


export type {RecipeType, CategoryType, RecipesArray, CategoryArray, propsCategory, propsRecipe, State}