import reducer from "../user";
import { USER } from "../../constants/types";
import * as STATES from "../../constants/states";
import init from "../../helpers/initStates";

let state = init(STATES.user);

describe("User reducer", () => {
    describe(USER.ADD_CASH, () => {
        it("should add cash to user's wallet", () => {
            const dollars = 1337;
            const action = {
                type: USER.ADD_CASH,
                dollars
            };
            const expectedState = {
                ...state,
                wallet: {
                    ...state.wallet,
                    dollars: state.wallet.dollars + dollars
                }
            }

            state = reducer(state, action)
            expect(state).toEqual(expectedState);
        });
    });

    describe(USER.SUBTRACT_CASH, () => {
        it("should subtract cash from user's wallet", () => {
            const dollars = 101;
            const action = {
                type: USER.SUBTRACT_CASH,
                dollars
            };
            const expectedState = {
                ...state,
                wallet: {
                    ...state.wallet,
                    dollars: state.wallet.dollars - dollars
                }
            };

            state = reducer(state, action);
            expect(state).toEqual(expectedState);
        });
    });

    describe(USER.ADD_COIN, () => {
        it("should add coin to user's wallet (when user doesnt own any)", () => {
            // first remove any wutang coin from wallet
            const coin = { key: 'wutang', amount: 36 };
            state = {
                ...state,
                wallet: {
                    ...state.wallet,
                    coins: state.wallet.coins.filter(c => c.key !== coin.key)
                }
            };
            const action = {
                type: USER.ADD_COIN,
                key: coin.key,
                amount: coin.amount
            };
            const expectedState = {
                ...state,
                wallet: {
                    ...state.wallet,
                    coins: [ ...state.wallet.coins, coin ]
                }
            };

            state = reducer(state, action);
            expect(state).toEqual(expectedState);
        });

        it("should add coin to user's wallet (when user already owns some)", () => {});
    });

    describe(USER.SUBTRACT_COIN, () => {
        it("should subtract coin from user's wallet", () => {
            const coin = { key: 'wutang', amount: 32 };
            const action = {
                type: USER.SUBTRACT_COIN,
                key: coin.key,
                amount: coin.amount
            };

            const expectedState = {
                ...state,
                wallet: {
                    ...state.wallet,
                    coins: state.wallet.coins
                        .map(c => {
                            if (c.key === coin.key) {
                                const updatedCoin = {
                                    ...c,
                                    amount: c.amount - coin.amount
                                }
                                return updatedCoin;
                            }
                            return c;
                         })
                }
            };

            state = reducer(state, action);
            expect(state).toEqual(expectedState);
        });

        xit("should remove the coin entirely if zero balance", () => {});
    });
});
