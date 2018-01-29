import {
    addCoinToCollection,
    subtractCoinFromCollection
} from "../helpers/coins";
import init from "../helpers/initStates";
import * as STATES from "../constants/states";
import { USER } from "../constants/actionTypes";

const user = (state = init(STATES.user), action) => {
    switch (action.type) {
        case USER.ADD_CASH:
            return {
                ...state,
                wallet: {
                    ...state.wallet,
                    dollars: state.wallet.dollars + action.dollars
                }
            };
        case USER.SUBTRACT_CASH:
            return {
                ...state,
                wallet: {
                    ...state.wallet,
                    dollars: state.wallet.dollars - action.dollars
                }
            };
        case USER.ADD_COIN:
            return {
                ...state,
                wallet: {
                    ...state.wallet,
                    coins: addCoinToCollection(
                        action.key,
                        action.amount,
                        state.wallet.coins
                    )
                }
            };
        case USER.SUBTRACT_COIN:
            return {
                ...state,
                wallet: {
                    ...state.wallet,
                    coins: subtractCoinFromCollection(
                        action.key,
                        action.amount,
                        state.wallet.coins
                    )
                }
            };
        default:
            return state;
    }
};

export default user;
