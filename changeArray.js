export function changeArray(array){
    
    const filterNotPotato = item => item.type != 'potato' ? item : null;

    const spliceNotPotato = [0, array.length, ...array.filter(filterNotPotato)];

    const increasePriceApples = item => item.type === 'apple' ?  item.price *= 2 : null;

    array.splice(...spliceNotPotato).forEach(increasePriceApples);
}