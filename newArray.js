export function newArray(array){

    const filterNotMango = item => item.type != 'mango' ? item : null;

    const increasePriceApples = (item) => { 
        const copyItem = structuredClone(item);
        copyItem.type === 'apple' ?  copyItem.price *= 3 : null;
        return copyItem;
    }

    return array.filter(filterNotMango).map(increasePriceApples);
}
