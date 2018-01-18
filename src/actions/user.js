// Action types
export const ADD_COIN = "ADD_COIN";
export const SUBTRACT_COIN = "SUBTRACT_COIN";

export const ADD_CASH = "ADD_CASH";
export const SUBTRACT_CASH = "SUBTRACT_CASH";

export const EXCHANGE_COIN = "EXCHANGE_COIN";

// Action creators
export const addCoinToWallet = (coinKey, coinAmount) => ({
    type: ADD_COIN,
    coin: coinKey,
    amount: coinAmount
});

export const subtractCoinFromWallet = (coinKey, coinAmount) => ({
    type: SUBTRACT_COIN,
    coin: coinKey,
    amount: coinAmount
});

export const addCashToWallet = dollars => ({
    type: ADD_CASH,
    dollars
});

export const subtractCashFromWallet = dollars => ({
    type: SUBTRACT_CASH,
    dollars
});

export const exchangeCoin = () => ({
    type: EXCHANGE_COIN,
});
