export function allElementsExist(firstList: unknown[], secondList: unknown[]): boolean {
    return firstList.every(element => secondList.includes(element));
}