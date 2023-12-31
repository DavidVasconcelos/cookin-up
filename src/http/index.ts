import type ICategory from '@/interfaces/ICategory';
import type IRecipe from '@/interfaces/IRecipe';

export async function getCategories() {
    const response = await fetch('https://gist.githubusercontent.com/DavidVasconcelos/78016a573e449b7489ae4751486e8325/raw/5330ca7b440794a7c1516157b6459865ad24ec46/categories.json');

    const categories: ICategory[] = await response.json();

    return categories;
}

export async function getRecipes() {
    const response = await fetch('https://gist.githubusercontent.com/DavidVasconcelos/3cb729e89be8861fded6cd892ecab74d/raw/2e2d818e4334947350a5d9624ff3ea29feb1ca5b/recipes.json');

    const recipes: IRecipe[] = await response.json();

    return recipes;
}