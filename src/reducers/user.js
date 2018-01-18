import { getRandomWallet } from "../helpers/randoms";
import { addCoinToCollection, subtractCoinFromCollection } from "../helpers/coins";
import { ADD_CASH, SUBTRACT_CASH, ADD_COIN, SUBTRACT_COIN } from "../actions/user";

const getInitialState = () => ({
    name: "Bob Belcher",
    wallet: getRandomWallet(),
});

const user = (state = getInitialState(), action) => {
    switch (action.type) {
        case ADD_CASH:
            return {
                ...state,
                wallet: {
                    ...state.wallet,
                    dollars: state.wallet.dollars + action.dollars
                }
            };
        case SUBTRACT_CASH:
            return {
                ...state,
                wallet: {
                    ...state.wallet,
                    dollars: state.wallet.dollars - action.dollars
                }
            };
        case ADD_COIN:
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
        case SUBTRACT_COIN:
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
}

export default user;
