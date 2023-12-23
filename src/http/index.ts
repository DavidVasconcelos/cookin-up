import type ICategory from '@/interfaces/ICategory';

export async function getCategories() {
    const response = await fetch('https://gist.githubusercontent.com/DavidVasconcelos/78016a573e449b7489ae4751486e8325/raw/5330ca7b440794a7c1516157b6459865ad24ec46/categories.json')

    const categories: ICategory[] = await response.json();

    return categories;
}