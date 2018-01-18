import * as RANGE from "../constants/ranges";
import { coins } from "../constants/coins";

// Private
const _getRandomValue = (min, max) => {
    return Math.random() * (max - min) + min;
};

const _getRandomDollarAmount = (min, max) => {
    return Math.round(_getRandomValue(min, max) * 100) / 100; // round to 2 decimals
};

const _getRandomWholeNumber = (min, max) => {
    return Math.round(_getRandomValue(min, max));
};

const _getRandomCashAmount = () => {
    const { min, max } = RANGE.cash;
    return _getRandomDollarAmount(min, max);
} 

const _getRandomCoinAmount = () => {
    const { min, max } = RANGE.userCoin;
    return _getRandomWholeNumber(min, max);
};

const _getRandomCoinCollection = () => {
    return coins.reduce((collection, coin) => {
        if (Math.random() > .40) {
            collection.push({
                coin: coin.key,
                amount: _getRandomCoinAmount()
            });
        }
        return collection;
    }, []);
};

// Public
export const getRandomPrice = () => {
    const { min, max } = RANGE.price;
    return _getRandomDollarAmount(min, max);
};

export const getRandomSupply = () => {
    const { min, max } = RANGE.supply;
    return _getRandomWholeNumber(min, max);
};

export const getRandomWallet = () => ({
    dollars: _getRandomCashAmount(),
    coins: _getRandomCoinCollection()
});

