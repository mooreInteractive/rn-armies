import { randomPrice, randomSupply } from "../constants/coins";

// Private
const _getRandomInitialValue = (min, max) => {
    return Math.random() * (max - min) + min;
};

// Public
export const getRandomPrice = () => {
    const min = randomPrice.min;
    const max = randomPrice.max;
    const random = _getRandomInitialValue(min, max);
    return Math.round(random * 100) / 100; // round to 2 decimals
};

export const getRandomSupply = () => {
    const min = randomSupply.min;
    const max = randomSupply.max;
    const random = _getRandomInitialValue(min, max);
    return Math.round(random); // round to whole number
};


