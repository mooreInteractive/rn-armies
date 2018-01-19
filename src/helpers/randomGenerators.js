import * as RANGES from "../constants/randomRanges";
import { coins } from "../constants/coins";

// Private
const _generateValue = (min, max) => {
    return Math.random() * (max - min) + min;
};

const _generateNumberTwoDecimalPlaces = (min, max) => {
    return Math.round(_generateValue(min, max) * 100) / 100;
};

const _generateWholeNumber = (min, max) => {
    return Math.round(_generateValue(min, max));
};

const _generateCashAmount = () => {
    const { min, max } = RANGES.cash;
    return _generateNumberTwoDecimalPlaces(min, max);
} 

const _generateCoinAmount = () => {
    const { min, max } = RANGES.userCoin;
    return _generateNumberTwoDecimalPlaces(min, max);
};

const _generateCoinCollection = () => {
    return coins.reduce((collection, coin) => {
        if (Math.random() > .40) {
            collection.push({
                key: coin.key,
                amount: _generateCoinAmount()
            });
        }
        return collection;
    }, []);
};

// Public
export const generatePrice = () => {
    const { min, max } = RANGES.price;
    return _generateNumberTwoDecimalPlaces(min, max);
};

export const generateSupply = () => {
    const { min, max } = RANGES.supply;
    return _generateWholeNumber(min, max);
};

export const generateWallet = () => ({
    dollars: _generateCashAmount(),
    coins: _generateCoinCollection()
});

