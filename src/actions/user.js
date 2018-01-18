import { USER } from "../constants/types";

// Action creators
export const addCoinToWallet = (key, amount) => ({
   type: USER.ADD_COIN,
   key,
   amount
});

export const subtractCoinFromWallet = (key, amount) => ({
    type: USER.SUBTRACT_COIN,
    key,
    amount
});

export const addCashToWallet = dollars => ({
    type: USER.ADD_CASH,
    dollars
});

export const subtractCashFromWallet = dollars => ({
    type: USER.SUBTRACT_CASH,
    dollars
});

export const exchangeCoin = () => ({
    type: USER.EXCHANGE_COIN,
});
