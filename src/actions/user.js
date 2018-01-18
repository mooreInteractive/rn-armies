// Action types
export const BUY_COIN = "BUY_COIN";
export const ADD_CASH = "ADD_CASH";
export const EXCHANGE_COIN = "EXCHANGE_COIN";

// Action creators
export const buyCoinWithCash = (coinId, coinAmount) => ({
    type: BUY_COIN,
    coin: coinID,
    amount: coinAmount
});

export const addCashToWallet = dollars => ({
    type: ADD_CASH,
    dollars
});

export const exchangeCoin = () => ({
    type: EXCHANGE_COIN,
});
