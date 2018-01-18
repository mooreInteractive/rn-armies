import { coins } from "../constants/coins";

// Private
const _isValidKey = key => !!coins.find(coin => coin.key === key);

const _updateCoinInCollection = (key, amount, collection) => {
    if (!_isValidKey(key) return collection;

    const index = collection.findIndex(coin => {
        return coin.key === key;
    });
    if (index === -1) { // coin doesnt exist in collection yet
        return [...collection, { key, amount }];
    } else {  // coin already exists in collection
        const existingCoin = collection[index];
        const updatedCoin = {
            ...existingCoin,
            amount: existingCoin.amount + amount
        }
        const updatedCollection = [...collection];
        updatedCollection[index] = updatedCoin;
        return updatedCollection;
    }
}

// Public
export const addCoinToCollection = (key, amount, collection) => {
    return _updateCoinInCollection(key, amount, collection);
}

export const subtractCoinFromCollection = (key, amount, collection) => {
    return _updateCoinInCollection(key, -amount, collection);
}
